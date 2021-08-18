// // var, let, const

// var name = 'john steve';
// console.log(name);
// name = 'cold austene';
// console.log(name);

// // init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // can not start with number

// // Multi word vars
// var firstName = 'john'; // Camel case
// var first_name = 'jude'; // Underscore
// var FirstName = 'tom'; // Pascal case

// // LET 
// let name = 'john steve';
// console.log(name);
// name = 'cold austene';
// console.log(name);

// CONST
// const name = 'john';
// console.log(name);

// const person ={
//     name: 'john',
//     age: 30
// }

// person.name = 'Tom'
// person.age = 20

// //console.log(person);

// const numbers = [1,2,3,4,5,]
// numbers.push(6);
// console.log(numbers)

// SPRIMITIVE

// // String
// const name = 'Adam doe';
// console.log(typeof name);

// //number
// const age = 45;
// console.log(typeof age);

// //boolean
// const haskids = true;
// console.log(typeof haskids);

// // null
// const car = null;
// console.log(typeof car);

// //undefined
// let test;
// console.log(typeof test);

// //symbol
// const sym = Symbol();
// console.log(typeof sym);

// REFERENCE TYPES - OBJECTS
// Array
// const hobbies = ['movies,music'];
// console.log(typeof hobbies);

// // OBJECT LITTERAL
// const adress = {
//     city: 'Buston',
//     state: 'Ma'
// }
// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);


// let val;

// // Number to String
// val = String(555);
// val = String(4+4);

// //Bool to string
// val = String(true);

// //Date to string
// val = String(new Date());

// //Array to string
// val = String([1,2,3,4]);

// //tostring()
// val = (5). toString();
// val = (true).toString();

// // string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number([1,2,3])

// val = parseInt('100.30');
// val = parseFloat('100.30');

// // Output
// console.log (val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = 5;
// const val2 = 6;
// const sum = (val1 + val2);

// console.log(sum);
// console.log(typeof sum);
 
// 
const firstName = 'Williams';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is chief';
const tags = 'Web Design,Web Development,Development';

let val;
val = firstName + lastName;

// concatenation

val = firstName + ' ' + lastName;

// Append
val = 'High ';
val += 'chief';

val = 'Hello, my name is ' + firstName + 'i am ' + age;
val = 'that\'s awsome, i can\'t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// CharAt()
val = firstName.charAt(2);
// Get last char
val = firstName.charAt(firstName.length -1);

// Substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(';');

// Replace
val = str.replace('chief', 'stan');

// Include
val = str.includes('foo');

console.log(val); 