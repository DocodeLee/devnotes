// console.log(window);
// console.log(this); // give the window

// window.firstName = "Lee";
// this.lastName = "Developer";
// console.log(window);

//---------- this's default is window
// function pritnThis() {
//   return this;
// }

// const res = pritnThis();
// console.log(res);
// const obj = {
//   firstName: "Lee",
//   lastName: "developer",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`; // this beacme obj
//   },
// };
// const res = obj.fullName();
// console.log(res);

// //----------Bad example----------
// const obj = {
//   firstName: "Lee",
//   lastName: "developer",
//   fullName: () => { // if you use => this became global
//     return this; // In here this became the window
//   },
// };
// const res = obj.fullName();
// console.log(res);

// const person = {
//   name: "lee",
//   age: "18",
//   greetRegular: function () {
//     return console.log(
//       `Hello, my name is ${this.name}, I'm ${this.age}years old`
//     );
//   },
//   greetArrow: () => {
//     return console.log(
//       `Hello, my name is ${this.name}, I'm ${this.age}years old`
//     );
//   },
// };
// person.greetRegular();
// person.greetArrow();

//---------------
// //FACTORY FUNCTION : if there is too many obj, you can use this pattern
// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     intro: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName}& i love ${this.pl}`
//       );
//     },
//   };
// }

// const john = createPerson("John", "Besro", "Python");
// const Lee = createPerson("Lee", "Heniri", "JS");
// john.intro();
// Lee.intro();

// function Vehicle(type, brand, model, year) {
//   return {
//     type: type,
//     brand: brand,
//     model: model,
//     year: year,
//   };
// }
// const Car = Vehicle("Car", "BMW", "series 5", "1998");

//-------------------------------------------------
//constructor function ?blueprint
// function CreatePeople(firstName, lastName, pl) {
//   this.firstName = firstName; //window\
//   this.lastName = lastName;
//   this.pl = pl;
//   this.info = function () {
//     console.log(`Hello i am ${this.firstName} ${this.lastName}
//     & i love ${this.pl}`);
//   };
// }

// //NEW keyword
// // 1.  first creat object {}
// // 2. set this, to point that object
// // new include return so if you plan to use new no need to use return

// const john = new CreatePeople("John", "Doe", "Golang");
// const lee = new CreatePeople("lee", "webdev", "JS");
// console.log(john);
// console.log(lee);
// john.info();

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getInfo = function () {
//     return `${this.title} by ${this.author} (${this.year})`;
//   };
// }
// const book1 = new Book("MEMEME", "LEE", "2022");
// console.log(book1);
// console.log(book1.getInfo());

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.info = function () {
//     return console.log(`${name},${age},${gender}`);
//   };
// }
// const nami = new Person("nami", "12", "f");
// const roopy = new Person("Roopy", "15", "M");
// roopy.info();
// nami.info();

// ********** EXERCISE 2
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.start = function () {
//     return console.log(`Startng ${this.make} ${this.model}...`);
//   };
//   this.stop = function () {
//     return console.log(`Stopping ${this.make}, ${this.model}...`);
//   };
// }

// const car1 = new Car("Toyota", "G1", "123", "Red");
// const car2 = new Car("Hyundai", "Sonata", "123", "Blue");
// car1.start();
// car2.stop();

//Built in constructor

// const num1 = new Number(10); // type = object
// const str1 = new String("lee the pro");
// const bool1 = new Boolean(true);
// const arr1 = new Array(1, 2, 3); // type = object
// console.log(typeof arr1);

//Object.create()
// let person = {
//   greet: function () {
//     console.log(`Hello i am ${this.firstName} ${this.lastName}`);
//   },
// };

// const lee = Object.create(person);
// lee.firstName = "Lee";
// lee.lastName = "Ming";
// lee.greet();

// let john = Object.create(person, {
//   firstName: { value: "John" },
//   lastName: { value: "Doe" },
// });

// john.greet();

//Every js object has anonymous property called prototype
// Remeber function and array is also object
//we can check prototype
//1.    obj.__proto__
//2.   obj.constructor.prototype
//3. Object.getProtoTypeOf(a)

// Array.prototype.pop = function () {
//   return "pop it up";
// };
// const myArr = ["one", "two", "three"];
// console.log(myArr.pop());
//-------------------------

// String.prototype.hello = function () {
//   console.log(this);
//   console.log(this.toUpperCase());
// };
// console.log("hello and wellcome".hello());

// const arr = ["hello", "yellow", "bla"];
// console.log(arr);

//-------------------------------prototypal inheritance
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.sound = function () {
//   return "Animal sound";
// };
// const animal1 = new Animal("Frog");
// console.log(animal1); //in sound it has function

// function Dog(name, breed) {
//   Animal.call(this, name); // call the animal and set the name into Animal
//   this.breed = breed;
// }
// // Object.create() method creates a new object,
// Dog.prototype = Object.create(Animal.prototype); // Dog prototype = Animal prototype

// Dog.prototype.bark = function () {
//   return "woof!";
// };

// const dog1 = new Dog("Buddy", "Genius");
// console.log(dog1); //no sound in this object
// console.log(dog1.bark());

//-----CLasses--------------
// you can create object from the class

// Class Declaration
// class Person {
//   constructor(firstName, lastName, age) {
//     //instance Members
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.printUserInfo = function () {
//       return `Name : ${this.firstName} ${this.lastName}, Age: ${this.age}`;
//     };
//   }
//   // outside the constructor set the prototypes
//   greet() {
//     return `Hello there`;
//   }
// }
// // classes utilize
// class Programmer extends Person {
//   constructor(firstName, lastName, age, pl, exp) {
//     super(firstName, lastName, age); //this just calls the parent call constructor
//     this.pl = pl;
//     this.exp = exp;
//   }
// }

// const john = new Person("John", "Dev", 11);
// console.log(john);
// console.log(john.greet()); //call the prototype

// const lee = new Programmer("Lee", "sw", 25, "JS", 12);
// console.log(lee);
// console.log(lee.greet());

// class Hero {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//   }
//   greet() {
//     return "Hi";
//   }
// }
// const hero = new Hero("hurk", 10);
// class Mego extends Hero {
//   constructor(name, level, spell) {
//     super(name, level);
//     this.spell = spell;
//   }
// }
// const harry = new Mego("Harry", 123, "Abracadabra");
// console.log(harry);

//Modifiers
//{private, public,protected} has differnece in availability
//protected only can access in class
// //Other lang has public, private protected but Js not lol

// function MyClass(publicField, privateField, protectedField) {
//   //Public field
//   this.publicField = publicField;

//   //Private Field(closure) (_ means protected in JS)
//   const _privateField = privateField;
//   //Protected Field
//   const _protectedField = protectedField;

//   //Public Method
//   this.publicMethod = function () {
//     return `Public ${this.publicField}`;
//   };
//   // private Method (closure)
//   function _priavteMethod() {
//     return `Private : ${_privateField}`;
//   }
//   //Protected Method(closure)
//   function _protectedMethod() {
//     return `Protected: ${_protectedField}`;
//   }
//   //Method to access protected method
//   this.accessProtectedMethod = function () {
//     return _protectedMethod();

//   };
// }

// const myObject = new MyClass("Public Data", "Private Data", "Protected Data");
// // console.log(myObject.publicField);
// // console.log(myObject._privateField);
// // console.log(myObject._protectedField);
// // console.log(myObject.publicMethod());
// // console.log(myObject._priavteMethod()); // showing error
// // console.log(myObject._protectedMethod()); //error
// console.log(myObject.accessProtectedMethod());

//Encapsulation
// hide the variable using closure
// function Counter() {
//   let _count = 0; //private variable

//   // Public Method that access and modify the private variable
//   // user only use method not directly var
//   this.increment = function () {
//     _count++;
//   };

//   this.decrement = function () {
//     _count--;
//   };
//   this.getCount = function () {
//     return _count;
//   };
// }

// const counter = new Counter();
// console.log(counter.getCount());

// counter.increment();
// counter.increment();
// console.log(counter.getCount());

//-----------------------------
// Abstract class (providing a blueprint for subclasses)

// setting the parent class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   //Abstract method (to be implemented by subclasses)
//   makeSound() {
//     throw new Error("Method(makesound) must be implemented");
//   }
// }
// // in the children you can change the implemented func
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   //implementin the abstract method
//   makeSound() {
//     return "Woof";
//   }
// }

// //concrete subclass
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     return "Meow";
//   }
// }

// const dog = new Dog("Buddy");
// console.log(dog.name);
// console.log(dog.makeSound());

// const cat = new Cat("Whis");
// console.log(cat.name);
// console.log(cat.makeSound());

//----------INHERITANCE------------
// ///ES5 ver
// function Animal(name) {
//   this.name = name;
// }

// // method shared among all animal inheritances
// Animal.prototype.makeSound = function () {
//   return "Unknown sounds";
// };

// // Subclass constructor inheriting from Animal
// function Dog(name) {
//   Animal.call(this, name); // call the superclass constructor
// }
// //setup prototype chain for Dog to inherit from animal

// Dog.prototype = Object.create(Animal.prototype);

// // Method specific to Dog
// Dog.prototype.makeSound = function () {
//   return "woof";
// };

// //creating Instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());
// const dog = new Dog("Buddy");
// console.log(dog);

//ES 6 ver
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     return "Unkown sounds";
//   }
// }

// //subclass inheriting from Animal
// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     return "Woof";
//   }
// }

// const newani = new Animal("General Animal");
// console.log(newani.makeSound());
// const dog2 = new Dog("dd");
// console.log(dog2.makeSound());

//Polymorphism-----------------------

//super class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     return "Unknown Sound";
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   // overriding method
//   makeSound() {
//     return "Woof";
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   makeSound() {
//     return "Meow";
//   }
// }

// function animalInfo(animal) {
//   console.log(`Name : ${animal.name}`);
//   console.log(`Sound: ${animal.makeSound()}`);
// }

// const genericAnimal = new Animal("Generic Animal");
// animalInfo(genericAnimal);

// const dog = new Dog("Buddy");
// animalInfo(dog);

// Synchronous----------------------------------------------
//using the var in the next step's parameter

// function myFunc() {
//   console.log("Inside func");
// }
// console.log("Start");
// myFunc();
// console.log("End");

// //Asynchronous---------------------------------------------
// console.log("Start");
// setTimeout(() => {
//   console.log("inside setTimeOut");
// }, 2000);
// console.log("End");

//call Back Hell

// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "inside callbackhell";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }
// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - Processed First`;
//     console.log(`Inside(firstfunc) Func`);
//     callback(processedData);
//   }, 1000);
// }
// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - processed Second`;
//     console.log(`Inside (secondFunc) func`);
//     callback(processedData);
//   }, 1500);
// }
// Callback Hell
// callbackHell((data) => {
//   firstFunc(data, (processedData1) => {
//     secondFunc(processedData1, (processedData2) => {
//       console.log(`final result of all function, ${processedData2}`);
//     });
//   });
// });

//Callback is not always asynchronous
// console.log("Start");
// const nums = [1, 2, 3, 4, 5];
// nums.forEach((n) => console.log(n));
// console.log("End");
// console.log("Start");
// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log(`Getting user name`);
//     callback(name);
//   }, 2000);
// }
// function getUserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log(`Hobbies : `);
//     callback(["football", "reading", "singing"]);
//   }, 2000);
// }
// getUserDataFromDB("lee", (data) => {
//   console.log(data);
//   getUserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });
// console.log("End");

// Promise
//.then(onFulfilled,onRejected)
//.catch()with only rejected case

// const promiseObj = new Promise((resolve, reject) => {
//   let req = false;
//   req == true ? resolve("Request Successful") : reject("Request Rejected");
// })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 == 0) {
//       resolve(`${number}is an even number.`);
//     } else {
//       reject(`${number}is an odd number.`);
//     }
//   });
// }

// const numberTocheck = 7;
// checkNumber(numberTocheck)
//   .then((message) => {
//     console.log(`Success: ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Error :${error}`);
//   });

//callback promise

// function callbackHell() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "inside (callback Hell)";
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }

// function firstFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - processed data`;
//       console.log("Inside (firstfunc function");
//       resolve(processedData);
//     }, 2000);
//   });
// }

// function secondFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - processed data`;
//       console.log("Inside (secondFunc) function");
//       resolve(processedData);
//     }, 1500);
//   });
// }
// callbackHell()
//   .then((data) => firstFunc(data))
//   .then((processedData1) => secondFunc(processedData1))
//   .then((processedData2) =>
//     console.log(`Final result with promise : ${processedData2}`)
//   )
//   .catch((error) => console.log(`Error: ${error}`));

//-----------------callbackhell w/ promise

// console.log("Start");

// function getuserDataFromDB(name, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user Name");
//       resolve(name); //instead of callback use resolve
//     }, 2000);
//   });
// }
// function getUserHobbies(name, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Reading", "Game", "Code"]); //instead of callback use resolve
//     }, 2000);
//   });
// }
// // getuserDataFromDB("Lee", (data) => {
// //   console.log(data);
// //   getUserHobbies(data, (hobby) => console.log(hobby));
// // });

// getuserDataFromDB("lee")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

//-------------------asyn---------------------------------
// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data retrieved from the server");
//     }, 4000);
//   });
// }
// async function getUserData() {
//   try {
//     const data = await fetchDataFromServer();
//     console.log(data);
//     console.log("Remaining tasks can be executed here");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData().then().catch();

// function callbackHell() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = `inside (callbackhell) function`;
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }
// function firstFunc(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processedData = `${data} - processed first`;
//       console.log("inside the first func");
//       resolve(processedData);
//     });
//   });
// }

// function secondFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - processed Second`;
//       console.log(`Inside the second func`);
//       resolve(processedData);
//     }, 1500);
//   });
// }
// async function processedDataWithAsync() {
//   try {
//     const data = await callbackHell();
//     const processedData1 = await firstFunc(data);
//     const processedData2 = await secondFunc(processedData1);
//     console.log(`Final result with async/await ${processedData2}`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// processedDataWithAsync();

//------------Refractor code to use async/await

// console.log("Start");

// function getuserDataFromDB(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Getting user Name");
//       resolve(name); //instead of callback use resolve
//     }, 2000);
//   });
// }
// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Reading", "Game", "Code"]); //instead of callback use resolve
//     }, 2000);
//   });
// }
// // getuserDataFromDB("Lee", (data) => {
// //   console.log(data);
// //   getUserHobbies(data, (hobby) => console.log(hobby));
// // });

// // getuserDataFromDB("lee")
// //   .then((name) => getUserHobbies(name))
// //   .then((hobby) => console.log(hobby))
// //   .catch((err) => console.log(err));

// async function showHobbies() {
//   try {
//     const name = await getuserDataFromDB("Lee");
//     const hobby = await getUserHobbies(name);
//     console.log(hobby);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// showHobbies();
// console.log("End");

///+++++++++++++++++++++ How to load the file
// console.log(fetch("text.txt"));
//callback

//new promsie

//text method returns promsie
// if resolved will return text representation of body

//Fetch API promise only rejects when we have network problem

// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text(); //if there is prob, they show error
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//async/await
// const result = document.querySelector(".results");

// async function renderData() {
//   try {
//     const response = await fetch("text  .txt");
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.text();
//     result.textContent = data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// renderData();

// const result = document.querySelector(".results");
// async function renderData() {
//   try {
//     const res = await fetch("data.json");
//     if (!res.ok) throw Error(res.statusText);
//     const data = await res.json();
//     result.textContent = data.name;
//     result.textContent = data.age;
//   } catch (error) {
//     console.log(error);
//   }
// }
// renderData();

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", maekRequest);

// function maekRequest() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) new Error(res.statusText);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       document.querySelector(".id").innerHTML = data.id;
//       document.querySelector(".title").innerHTML = data.title;
//       document.querySelector(".body").innerHTML = data.body;
//     })
//     .catch((error) => console.log(error));
// }

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log(`Error${error.message}`);
    return null;
  }
}
const validJSON = '{"name": "Lee","Age":19}';
// const invalidJSON = `{"name": "Lee","Age":19,}`
const result1 = parseJSON(validJSON);
console.log(result1);
