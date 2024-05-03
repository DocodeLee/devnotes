// ------------------------------------
// // createElement()
// const h1 = document.createElement("h1");
// h1.textContent = "hello world";
// h1.classList.add("Greeting");
// console.log(h1);
// // appendChild()
// const body = document.body;
// body.appendChild(h1);
//==============================================

// insertBefore()
// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "I am li tag";
// ul.appendChild(newLi);
// const firstLi = document.querySelector("li");
// //selector.insertBefore(what, where)
// ul.insertBefore(newLi, firstLi);
//==============================================

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "I'm italic";
// i.style.color = "skyblue";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
//==============================================

// append()
// prepend()
// let section = document.querySelector("section");
// const i = document.createElement("i");
// i.innerText = "I'm italic";
// i.style.color = "skyblue";

// const h4 = document.createElement("span");
// h4.innerText = "sisisi";
// h4.style.color = "red";
// section.prepend(i, h4);
// section.prepend(i, h4);
// ------------------------------------
// removeChild()
//remove()
// const newLi = document.querySelector(".new-list");
// const fourth = document.querySelector(".fourth");
// // if you don't select it doesnt' work
// newLi.removeChild(fourth);

// newLi.remove();
