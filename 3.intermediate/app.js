//Template string = string with embedded expression ``
// console.log(`This is some
// random text`); // you can effect to the line and blank
// if you put function in to embedded use ${func()}

// const nick = "the quick";
// const firstName = "Hy";
// const lastName = "Lee";
// const fullName = `${nick} ${firstName} ${lastName}`;
// console.log(fullName);

//Arrow function makes function shorter (ES6)
// function greet(username) {
//   return `Hello ${username}`;
// }
//functionname = (par,par) => comand
// const greet = (username, username2) => `Hello ${(username, username2)}`;
//const double = (num) => n * 2;

//Enhanced object literals

// function user(name, age, work) {
//   return {
//     name: name,
//     age: age,
//     work: work,
//   };
// }

//enhanced version
// function user(name, age, work) {
//   return {
//     name,
//     age,
//     work,
//     intro: () => {           //keep this
//       console.log(`${name} ${age} ${work}`);
//     },
//   };
// }
// const me = user("me", "25", "Pro");
// console.log(me.intro());

// var lib = {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
// };
// even you don't need curly bracket and return

// function getPersionES6(name, age, height) {
//   return { name, age, height };
// }

//Default parameter allow parameter to be initiallized if undefine is passed
//function name(para = defualtvalue){}

//Spread Operator ...
// if you use ... in front of variable of array, ... layout the array
// const strNums = ["one", "two", "three"];
// const moreNums = ["four", "five"];
// const concat = [...strNums, ...moreNums];

//Rest parameter
//... Also use when you want to pass the remained ele. but you need to use at last

//Destructuring ,  separate different type
// const foo = ["one", "two"];
// const [human, yello, red, blue] = foo;
// By this you can put the element in the array

// let a, b;
// [a = 5, b = 2] = [3];
// console.log(a); // a= 3

// function f() {
//   return [1, 2, 3];
// }
// const [a, , b] = f(); //b=3

//Assigining the rest of an array to a variable
// const[a,...b] = ['one','two','three'] // be wil two and three

//Object Destructuring  [] ==> {}

// const stuendt = { name: "dd", position: "attacker" };
// const { name } = stuendt; //## You need to use same key
// console.log(name);
// You don't need to take care of order in object destruction

//Object destructuring and rest operator
// let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400 };
// rest =  c: 300, d: 400

// const person = {
//   name: "John",
//   age: 39,
//   gender: "male",
//   country: "USA",
// };
// const { name: personName, age: personAge, country: personCOuntry } = person;
// console.log(personName);

//FUnction Destructuring

// function printinfo(variable) {
//   `${variable.key1}``${variable.key2}``${variable.key3}`;
// }

// function printinfo({ key1, key2, key3 }) {
//   `${key1}``${key2}``${key3}`;
// }

// const songs = [
//   { name: "a", singer: "12", duration: 4.32 },
//   { name: "b", singer: "34", duration: 4.32 },
//   { name: "c", singer: "56", duration: 4.32 },
// ];

// const [, , { name: n }] = songs;
// console.log(n); // c

//ternary operator
// condition ? exprIfTrue : exprIffalse;

// let password = 2;
// function passwordChecker(ps) {
//   //   if (ps === 8) {
//   //     return `Strong pwd`;
//   //   } else {
//   //     return "Password should be 8 char";
//   //   }
//   return ps === 8 ? "Strong password" : "Password should be 8";
// }

// const age = 25;
// const isAdult = age >= 18 ? "Adult" : "teen";

//for in loop
// obj
// let person = {
//   name: "xx",
//   age: 12,
//   gender: "male",
// };
// for (let keys in person) {
//   console.log(keys, person[keys]);
// }

// // list
// let list = ["one", "two", "three"];
// for (let index in list) {
//   console.log(`${index}: ${list[index]}`);
// }

//for of loop
// for (const iterator of object) {
// It runs as much as iterators have
// }

// const array1 = ["a", "b", "c", "d"];
// for (const index of array1) {
//   console.log(index);
// }

// const colors = ["Teal", "Blue", "Red", "Grenn"];
// colors.forEach((color) => console.log(color));

// const words = ["Helllo", "one", "two"];
// const capWords = words.forEach(
//   (word, index, arr) => (arr[index] = word[0].toUpperCase() + word.substring(1))
// );
// console.log(words);

// const num = [1, 2, 3, 4, 5];
// let sum = 0;

// function add() {
//   num.forEach((num) => {
//     sum += num;
//     console.log(sum);
//   });
// }
// add(num);

//MAP HELPER
// map() creates a new array

// let number = [1, 2, 3, 4, 5];
// let double = number.map((person) => person * 2);
// console.log(double);

// I realized that the parameter is just for understanding you
// can name it whatever you want.

//filter()
// variable.filter((parameter) => condition) ... express when it's true

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const long = words.filter((word) => word.length >= 8);
// console.log(long);
