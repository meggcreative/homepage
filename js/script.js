{
    const welcome = () => {
        console.log("Witam, witam i o zdrowie pytam !!!");
    }



    const changeBackgroundColor = () => {

        const body = document.querySelector(".body");
        body.classList.toggle("body--special")
    }

    const button = document.querySelector(".js-button");

    const makePoemInvisible = () => {

        const poem = document.querySelector(".section__poem");
        poem.classList.toggle("section__poem--special");

        button.innerText = button.innerText === "schowaj" ? "pokaz" : "schowaj";
    }

    const init = () => {
        const changeColorButton = document.querySelector(".js-changeColorButton");
        welcome();
        button.addEventListener("click", makePoemInvisible);
        changeColorButton.addEventListener("click", changeBackgroundColor);

    }


    init();
}