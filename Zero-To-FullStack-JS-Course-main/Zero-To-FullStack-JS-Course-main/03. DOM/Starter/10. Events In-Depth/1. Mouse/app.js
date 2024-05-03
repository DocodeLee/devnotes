// https://www.w3schools.com/jsref/obj_mouseevent.asp

let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

// 1. click
one.addEventListener("click", () => {
  one.classList.toggle("red");
});
// 2. contextmenu
two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});
// 3. dblclick
three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});
// 4. mousedown
four.addEventListener("mousedown", () => {
  four.classList.toggle("orange");
});
// 5. mouseenter
five.addEventListener("mouseenter", () => {
  five.classList.toggle("aqua");
});
// 6. mouseleave
six.addEventListener("mouseleave", () => {
  six.classList.toggle("pink");
});
// 7. mousemove
seven.addEventListener("mousemove", () => {
  seven.textContent = "On working";
});
// 8. mouseout
eight.addEventListener("mouseout", () => {
  eight.classList.toggle("crimson");
});
// 9. mouseover
nine.addEventListener("mouseover", () => {
  nine.classList.toggle("red");
});
// 10. mouseup
ten.addEventListener("mouseup", () => {
  ten.classList.toggle("red");
});
