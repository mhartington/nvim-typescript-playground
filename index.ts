import { meth, math } from './b';
import { foo, bar } from './a';
import { map, uniq, filter } from 'lodash';
import { HerClass, MyClass } from './c';
let users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false }
];

function add(a: number, b: number){
  return a + b;
}
document.adop


filter(users, o => {
  console.log(!o.active);
});

class Test1 {
  public id: string;
  public name: string;
}
class Test2 {
  public test1: Test1;
  public name: string;
}

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

class Test3 {
  public test2: Test2;
  public name: string;
  public getTest2() {
    return this.test2;
  }
}
// const foo: string = '123';
// const bar: string = 'hello';
// const hc = new HerClass('123');
// const mc = new MyClass('test');

meth('args');
math('args');
var t3 = new Test3();
let fobo = '123';


const obj = { foo: 123, bar: '123' };

// let test = 'T';

console.log(foo);
console.log(bar);
t3.getTest2().test1.id = '123';
export function interpret(expr: any): number {
  switch (expr.kind) {
    case 'BinaryExpression':
      const { left, right } = expr;
      return interpret(left) + interpret(right);
  }
}
