// if === money
// --> Buy stuff
// else !== money
// -> Bring some money

// conditional statements
// if(condition){...}else if(condi){...}else(condi){...}

//Switch Statements
//switch (expression ){
// case x :  or default:
//var = "232332";
// break; }

//for loop
// DRY -> Don't repeat your self

//for (initalExpression; condition; incrementExpression){}
// for (let i = 0; i <= 5; i++){
//     console.log("Hello WOrld", i);
//     // nested loop for inside the for
//     for(let j = 1; j <= 5; j++){
//         console.log("Inner Loop")
//     }
// }

// while loop
// while(condition){
//      expression
//  i++ (if you don't set i++ it goes into infinite loop)
//}

//do while loop
// let i = 20;
// do {
//   console.log("H", i);
//   i++;
// } while (i <= 420);

//Logical operation
//1. && And
//2. || Or
//3. ! not

//Arrays --> 0 index based , help us to save many values in a variable
// const emptyList = [];
//Accessing to the var in arr . arr['num']
//Nested Array  const nestArr = [1,[2,"Three"]];
//Accessing to nested arry, nestArr[n][m]

//arr.function()
// concat() join the array
// push() add ele to the end
//unshift() add ele to begin
//shift() delete the first ele
//pop() delete last item
//arr.includes("") .. this boolean func, to check ele
//if you use join("-") the elements adjoined with -
//arr.reverse() . reverse the order
//arr.slice(num1,num2) give ele from num1 to 'num2'-1

//Objects ___ even the array has the type of objects
//const "key" ={
//   ele 1,
//   ele 2,
// }

//Accessing ele in our objects
//key.var & key["var"]
// if var is num we cannot use key.var / we need to use key["var"]

//Function is a block of code that perfom works
// maeks the code reusable
// divide to the small fraction
// function increase the readability
//DRY = Don't Repeat

// function name(para1,para2){...}       < parameter only use in function
// call run execute is need to function
// function name() {
//   comand;
// }

// * how to add the string // 1. `str ${str2}` // 2. "str" + "str"

//Function Declaration
// function name(para){}

//Function Expression
// const var1 = function (para) {
//   comand;
// };
//functionA(functionB(){}) funcB will be call bacck func

// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallFunc(function callme(val) {
//   console.log(val);
// });

//scope in JS refers to the current context of code . determmine accessbility
// we need to separate the global and local variable

//Objects Methods
// function greet() {
//   return `Hello,my name is ${person.name} & I am ${person.age} year`;
// }
// const person = {
//   name: "John",
//   age: 30,
//   greet,      // i can call the function with just function name
// };
// console.log(person.greet());

// const person = {
//   name: "John",
//   age: 30,
//   greet : function(){
//     return `Hello,my name is ${person.name} & I am ${person.age} year`
//   },      // i can call the function with just function name
// };

//JSON
// const person = {
//   name: "John DOe",
//   age: 20,
//   email: "js@gmail.com",
//   isSubscribed: true,
//   hobbies: ["Reading", "Running"],
// };
// const jsonString = JSON.stringify(person); // make Json into string
// const parsedObject = JSON.parse(person); // return to JSON

// Date() : year, month, day, hours, minutes, seconds, milliseconds
// date.toISOString(), date.toLocaleString() ..there is many date function

//set Interval
//setInterval(() => {func}, interval);
// setTimeout just run one time
// setTimeout(function () {console.log("sec3");}, 3000);

//stop the interval after 10s
const intervalid = setInterval(function () {
  console.log("being executed at the interval");
}, 1000);

setTimeout(function () {
  clearInterval(intervalid);
}, 10000);
