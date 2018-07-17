/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS202: Simplify dynamic range loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

const sundayFirstCalendar = 'cal && date "+%-m %-d %y"';

const mondayFirstCalendar =  `cal | awk \'{ print " "$0; getline; print "Mo Tu We Th Fr Sa Su"; \
getline; if (substr($0,1,2) == " 1") print "                    1 "; \
do { prevline=$0; if (getline == 0) exit; print " " \
substr(prevline,4,17) " " substr($0,1,2) " "; } while (1) }\' && date "+%-m %-d %y"`;

({
  command: mondayFirstCalendar,
  //Set this to true to enable previous and next month dates, or false to disable
  otherMonths: true,

  refreshFrequency: 3600000,

  style: `\
top: 100px
left: 0px
color: #fff
font-family: -apple-system
width: 325px

table
    border-collapse: collapse
    table-layout: fixed
    width: 100%;

thead
    text-align: left

td
    padding: 8px 8px
    white-space: nowrap
    width: 100%
    text-align: center


thead tr
    &:first-child td
      font-size: 35px
      text-align: left

    &:last-child td
      font-size: 20px
      padding-bottom: 10px
      font-weight: 500

tbody td
    font-size: 20px


.today
    font-weight: bold
    background-color: rgb(255,59,48)

.grey
    color: rgba(#C0C0C0, .7)

\
`,

  render() { return `\
<table>
    <thead>
    </thead>
    <tbody>
    </tbody>
</table>\
`; },


  updateHeader(rows, table) {
    const thead = table.find("thead");
    thead.empty();

    thead.append(`<tr><td colspan='7'>${rows[0]}</td></tr>`);
    const tableRow = $("<tr></tr>").appendTo(thead);
    const daysOfWeek = rows[1].split(/\s+/);

    return Array.from(daysOfWeek).map((dayOfWeek) =>
      tableRow.append(`<td>${dayOfWeek}</td>`));
  },

  updateBody(rows, table) {
    //Set to 1 to enable previous and next month dates, 0 to disable
    const PrevAndNext = 1;

    const tbody = table.find("tbody");
    tbody.empty();

    rows.splice(0, 2);
    rows.pop();

    const today = rows.pop().split(/\s+/);
    const month = today[0];
    const date = today[1].replace(/\D/g, '');
    const year = today[2];

    const lengths = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    if ((year%4) === 0) {
      lengths[2] = 29;
    }

    return (() => {
      const result = [];
      for (let i = 0; i < rows.length; i++) {
        var cell, j;
        const week = rows[i];
        var days = week.split(/\s+/).filter(day => day.length > 0);
        var tableRow = $("<tr></tr>").appendTo(tbody);

        if ((i === 0) && (days.length < 7)) {
          var asc;
          for (j = days.length, asc = days.length <= 7; asc ? j < 7 : j > 7; asc ? j++ : j--) {
            if (this.otherMonths === true) {
              const k = 6 - j;
              cell = $(`<td>${lengths[month-1]-k}</td>`).appendTo(tableRow);
              cell.addClass("grey");
            } else {
              cell = $("<td></td>").appendTo(tableRow);
            }
          }
        }

        for (let day of Array.from(days)) {
          day = day.replace(/\D/g, '');
          cell = $(`<td>${day}</td>`).appendTo(tableRow);
          if (day === date) { cell.addClass("today"); }
        }

        if ((i !== 0) && (0 < days.length && days.length < 7) && (this.otherMonths === true)) {
          result.push((() => {
            let asc1, end;
            const result1 = [];
            for (j = 1, end = 7-days.length, asc1 = 1 <= end; asc1 ? j <= end : j >= end; asc1 ? j++ : j--) {
              cell = $(`<td>${j}</td>`).appendTo(tableRow);
              result1.push(cell.addClass("grey"));
            }
            return result1;
          })());
        } else {
          result.push(undefined);
        }
      }
      return result;
    })();
  },

  update(output, domEl) {
    const rows = output.split("\n");
    const table = $(domEl).find("table");

    this.updateHeader(rows, table);
    return this.updateBody(rows, table);
  }
});
