{
    const welcome = () => {
        console.log("Witam, witam i o zdrowie pytam !!!");
    }

    let changeColorButton = document.querySelector(".js-changeColorButton");
    let button = document.querySelector(".js-button");
    let poem = document.querySelector(".section__poem");

    const changeBackgroundColor = () => {
        let body = document.querySelector(".body");
        body.classList.toggle("body--special")
    }


    const makePoemInvisible = () => {
        poem.classList.toggle("section__poem--special");
        button.innerText = button.innerText === "schowaj" ? "pokaz" : "schowaj";
    }

    const init = () => {
        welcome();
        button.addEventListener("click", makePoemInvisible);
        changeColorButton.addEventListener("click", changeBackgroundColor);

    }


    init();
}