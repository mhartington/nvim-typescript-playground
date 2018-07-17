import { filter, } from 'lodash';
class Test1 {
}
class Test2 {
}
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["Down"] = 2] = "Down";
    direction[direction["Left"] = 3] = "Left";
    direction[direction["Right"] = 4] = "Right";
})(direction || (direction = {}));
class Test3 {
    getTest2() {
        return this.test2;
    }
}
const foo = '123';
const bar = 'hello';
const t3 = new Test3();
t3.getTest2().test1.id = 'test';
export function interpret(expr) {
    switch (expr.kind) {
        case 'BinaryExpression':
            const { left, right } = expr;
            return interpret(left) + interpret(right);
    }
}
//
// function superName(a: number, b: number) {
//     return a + b;
// }
let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
filter(users, (o) => {
    console.log(!o.active);
});
//# sourceMappingURL=main.js.map