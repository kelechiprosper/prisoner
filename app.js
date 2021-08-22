// // log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});


// console.time('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.timeEnd('Hello World');


// // var,let,const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve smith';
// console.log(name);

// // Init var

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters,numbers,_,,$
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // camel case
// var first_name = 'sara'; // Underscore
// var FirstName = 'Tom';// Pascal case

// // LET
// let name
// name = 'John Doe';
// console.log(name);
// name = 'Steve smith';
// console.log(name);

// CONST
// const person ={
// name: 'John',
// age:30
// }
// person.name = 'sara';
// person.age = 32;
// //console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);


// console.log(numbers);

// PRIMITIVE

// STRING
// const name = 'John';
// console.log(typeof name);

// // NUMBER
// const age = 45;
// console.log(typeof age);

// // BOOLEAN
// const haskids = true;
// console.log(typeof haskids);

// // NULL
// const car = null;
// console.log(typeof car);

// // UNDEFINED
// let test;
// console.log(typeof test);

// // SYMBOLE
// const sym = Symbol();
// console.log(typeof sym);

// // REFERENCE TYPE - objects
// // Array
// const hobbies = ['movies,music'];
// console.log(typeof hobbies);

// // Object literal
// const address ={
//     city: 'Boston',
//     state: 'Ma'
// }
// const today = new Date();
// console.log(today)
// console.log(typeof today);

let val;

// number of string
val = String(555);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4,5])

//tostring ()
val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length)
