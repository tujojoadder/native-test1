//string
let a: string = '12';
let b: boolean = false;
let c: undefined = undefined;

//function
function sum(a: number, b: number) {
  console.log(a + b);
}

sum(12, 12);

//with array
// Array of numbers
let numbers: number[] = [1, 2, 3, 4];
// Array of strings
let fruits: Array<string> = ['apple', 'banana', 'cherry'];
// Array that can contain both numbers and strings
let mixedArray: (number | string)[] = [1, 'apple', 'banana', 23];
//enum
enum my {
  name = 'tj',
  numbers = 10,
}
let hello: my = my.name;

//any
let d: unknown = 'hi';

if (typeof d === 'string') {
  console.log(d.toUpperCase());
}

//obj
interface User {
  name: string;
  age: number;
  roll?: number;
}

let obj1: {name: string; age: number; roll?: number} = {
  name: 'tj',
  age: 12,
  roll: 23,
};
let obj2: object = {name: 'tj', age: 23, roll: 50};
let obj3: object[] = [
  {name: 'tj', age: 10},
  {name: 'rj', age: 20},
];

//type
interface User {
  name: string;
  age: number;
}
type RequestType = 'POST' | 'GET';




//class
class User {
  //variables
  name: string;
  age: number;

  //constractor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //function
  display() {
    console.log(`my name is ${this.name} and my age is  ${this.age}`);
  }
}
class Student extends User {
  roll: number;
  constructor(name: string, age: number, roll: number) {
    super(name, age);
    this.roll = roll;
  }
  display():void {
    console.log(
      `my name is ${this.name} and my age is  ${this.age} and my roll is  ${this.roll}`,
    );
  }
}

//object
let User1 = new User('tj', 23);


User1.display();
let User2 = new Student('tj', 23, 10);
User2.display();
User1.name;
User2.name;

const display=(text:string|number):string|number=>{
return text;
}

display('12');