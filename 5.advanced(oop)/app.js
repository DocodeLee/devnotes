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
let person = {
  greet: function () {
    console.log(`Hello i am ${this.firstName} ${this.lastName}`);
  },
};

const lee = Object.create(person);
lee.firstName = "Lee";
lee.lastName = "Ming";
lee.greet();

let john = Object.create(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
});

john.greet();

//Every js object has anonymous property called prototype
// Remeber function and array is also object
//we can check prototype
//1.    obj.__proto__
//2.   obj.constructor.prototype
//3. Object.getProtoTypeOf(a)

const obj = {};

//12:42:56
