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

// let val;

// const today = new Date();
// let birthday = new Date('8-12-2021 09:15:00');
// birthday = new Date('September 12 2021')
// birthday = new Date('8/12/2021');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(3);
// birthday.setDate(12);
// birthday.setFullYear(2020);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);


// console.log(birthday);

// if(something){
//     do something
// }else{
//     do something else
// }

//const id = 100;

// // EQUAL TO
// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// GREATER THAN OR LESS THAN
// if(id <= 100){
//         console.log('CORRECT');
//     } else {
//         console.log('INCORRECT');
//     }

// IF ELSE

//const color = 'yellow';

// if(color ===  'red'){
//     console.log('color is red');
// } else if(color == 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue');
// }

// LOGICAL OPERATORS

// const name = 'steve';
// const age = 70;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if (age >= 13 &&age <= 19){
//     console.log(`${name} is a teenager`);
// } else {
//     console.log(`${name} is an adult`);
// }
// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in a race`);
// } else {
//     console.log(`${name}is registere for the race`);
// }

// // TERNERY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(id === 100)
//     console.log('CORRECT');
// else
//     console.log('INCORRECT');

// const color = 'yellow';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//         case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'sunday';
//         break;
        
//         case 1:
//         day = 'monday';
//         break;

//         case 2:
//         day = 'tuesday';
//         break;

//         case 3:
//         day = 'wednesday';
//         break;

//         case 4:
//         day = 'thursday';
//         break;

//         case 5:
//         day = 'friday';
//         break;

//         case 6:
//         day = 'saturday';
//         break;
// }

// console.log(`today is ${day}`);

// FUNCTION DECLARATION
// function greet(firstName = 'John',lastName = 'Doe'){
//     console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }
//console.log(greet());

// FUNCTION EXPRESIONS
// const square = function(x = 5){
//     return x*x;
// };
//console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFS

// (function(){
//     console.log('IIFE ram...');
// })();
// (function(){
//     //     console.log('IIFE ram...');
//     // })()

// PROPERTY METHOD

// const todo = {
//     add: function(){
//         console.log('Add todo...')
//     },
//     edit: function(id){
//         console.log(`edit todo ${id}`);
//     }
// }
// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// FOR LOOP
// for(let a = 0; a < 20; a++){
//     if(a === 4){
//         console.log('4 is my favourite Number');
//         continue;
//     }

//     if(a === 10){
//         console.log('stop the loop');
//         break;
//     }
//     console.log('Number '+ a);
// }

// WHILE LOOP

// let i = 0;

// while(i < 20){
//     console.log('Number ' +i);
//     i++;
// }

// DO WHILE

// let i = 100

// do{
//     console.log('Number ' + i);
//     i++;

// }

// while(i < 20);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Acura'];

// for(let i = 0; i < cars.length; i++)
// {
// console.log(cars[i]);
// }

// FOR EACH
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// const users = [
//     {id: 1, name: 'Jack'},
//     {id: 2, name: 'Rose'},
//     {id: 3, name: 'Presh'},
//     {id: 4, name: 'King'},

// ];
// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);array.forEach(element => {
    
// });

// FOR IN LOOP

// const user = {
//     firstName: 'steve',
//     lastName: 'Andrew',
//     age: 38
// }
// for(let y in user){
//     console.log(`${y} : ${user[y]}`);
// }

// WINDOWS METHODS | OBJECTS | PROPERTIES

// ALERT
//window.alert('Hello World');

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if(confirm('are you sure')){
//     console.log('Yes');
// } else{
//     console.log('No');
// }

let val;

// // OUTER HIGHT AND WIDTH
// val = window.outerHeight;
// val = window.outerWidth;
// console.log(val);

// // INNEROUTER HIGHT AND WIDTH
// val = window.innerHeight;
// val = window.innerWidth;
// console.log(val);

// // SCROLL POINTS
// val = window.scrollY;
// val = window.scrollX;

// // LOCATION OBJECT
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// REDIRECT
// window.location.href = 'http://google.com';
// RELOAD
// window.location.reload();

// // history object

// window.history.go(-2);

// val = window.history.length;

// NAVIGATOR OBJECT
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// GLOBAL SCOPE
// var a = 1;
// let b = 2;
// const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c,);
}
test()

console.log('Global Scope: ', a, b, c,);