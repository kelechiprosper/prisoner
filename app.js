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

// let val;

// // number of string
// val = String(555);
// val = String(4+4);

// Bool to string
// val = String(true);

// // Date to string
// val = String(new Date());

// // Array to string
// val = String([1,2,3,4,5])

// //tostring ()
// val = (5).toString();
// val = (true).toString();

// // String to Numbers 
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3,4]);

// val = parseInt('100');
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// //console.log(val.length)
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 24;
// const str = 'Hello there my name is chief';
// const tags = 'web designs, web development,programming';

// let  val

// val = firstName + lastName;
// //Concatination
// val = firstName + ' ' + lastName;

// // Append
// val = 'high ';
// val += 'chief';

// val = 'Hello, my name is ' + firstName + ' and i am '+ age ;

// // Escaping
// val = "that's awsomw, I can't wait";

// // Length
// val  = firstName.length;

// // Concat()
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // indexof()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt
// val = firstName.charAt('2');
// //Get last char
// val = firstName.charAt(firstName.length - 1);
// //substring()
// val =firstName.substring(0, 4);
// //Slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);
// //Split
// val = str.split(' ');
// val = tags.split(',');
// //Replace
// val = str.replace('chief', 'High');
// //include
// val = str.includes('foo');

// console.log(val);

// const name = 'John';
// const age = 31;
// const job = 'web Developer';
// const city = 'maimi';
// let html;

// //Without Templet Strings (es5)
// html = '<ul><li>Name: ' + name + ' </li> <li>Age: ' + age + ' </li> <li>Job: ' + job + 
// ' </li><li>City: ' + city + ' </li></ul>';

// html = '<ul>' +
//         '<li>Name: ' + name + ' </li>' +
//         '<li>Age: ' + age + ' </li>' +
//         '<li>Job: ' + job + ' </li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>';

// function hello(){
//     return 'hello';
// }

// //With templete strings (es6)
// html = `
//     <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2+2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'over 30' : 'under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;


// Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Banana', 'Apple', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

// let val;
// //Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// //Get single value
// val = numbers[3];
// val = numbers[0];
// // insert into array 
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// //Mutating arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off frm front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate arrays
// val = numbers.concat(numbers2);

// // sorting arrays
// val = fruit.sort();
// // val = numbers.sort();
// // // use the "compare function"
// // val = numbers.sort(function(x,y){
// //     return x - y;
// // });
// // // Reverse sort
// // val = numbers.sort(function(x,y){
// //     return y - x;
// // });

// // Find
// function over50(num){
//     return num > 50;
// }
// val = numbers.find(over50);


// console.log(numbers);
// console.log(val);
// const person = {
//     firstName: 'Steve',
//     lastName: 'smith',
//     age: 36,
//     email: 'steve@aol.com',
//     hobbies: ['movies,sports'],
//     address: {
//         city: 'maimi',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();
// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'mike', age: 25},
//     {name: 'nancy', age: 47},
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

let val;

const today = new Date();
let birthday = new Date('8-12-2021 09:15:00');
birthday = new Date('September 12 2021')
birthday = new Date('8/12/2021');

val = today.getMonth();
val = today.getDate();
val = today.getDay();

console.log(val);




