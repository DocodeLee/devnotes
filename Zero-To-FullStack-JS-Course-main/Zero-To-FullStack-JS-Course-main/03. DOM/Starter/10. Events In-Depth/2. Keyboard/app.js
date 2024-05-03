// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

//keypress
// input.addEventListener("keypress", () => {
//   console.log("keypressed");
// });

//keyup
// input.addEventListener("keyup", () => {
//   console.log("keyup");
// });
// //keydown
// input.addEventListener("keydown", () => {
//   console.log("keydown");
// });

//useful properties and methods
input.addEventListener("keypress", (e) => {
  //   console.log(e.charCode);
  //   console.log(e.code);
  //   console.log(e.ctrlKey); //boolean
  //   console.log(e.key);
  //   console.log(e.shiftKey); //boolean
});
