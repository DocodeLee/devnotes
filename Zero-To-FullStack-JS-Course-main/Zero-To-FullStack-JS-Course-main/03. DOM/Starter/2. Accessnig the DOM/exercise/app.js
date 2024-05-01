// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName("h4");
console.log(h4);
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
console.log(document.getElementsByClassName("green"));
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsById
const blue = document.getElementById("blue");
console.log(blue);
// 4. Select div which has the class & Id of "yello" by using querySelector()
const yellow = document.querySelector("#yellow"); //# is for id , . is for class
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const teal = document.querySelectorAll(".teal");
