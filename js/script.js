console.log("Witam, witam i o zdrowie pytam !!!");

let button = document.querySelector(".button");
let poem = document.querySelector(".section__poem");
let buttonChangeColor = document.querySelector(".body__button--special");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    poem.classList.toggle("section__poem--special");

    button.innerText === "schowaj" ? button.innerText = "pokaż" : button.innerText = "schowaj"
})

buttonChangeColor.addEventListener("click", () => {
    body.classList.toggle("body--special")
})