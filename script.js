function PlayNow() { 

let randomDiceNumber =  Math.floor((Math.random() * 6) + 1);
let randomImageDiceRandom = "dice" + randomDiceNumber + ".png";
let randomImageSource = "images/" + randomImageDiceRandom;
let randomImage = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
// randomImage.setAttribute("src", randomImageSource);

let randomDiceNumber2 =  Math.floor((Math.random() * 6) + 1);
let randomImageDiceRandom2 = "dice" + randomDiceNumber2 + ".png";
let randomImageSource2 = "images/" + randomImageDiceRandom2;
let randomImage2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);;

if (randomDiceNumber > randomDiceNumber2) {
    document.querySelector("h1").innerHTML = "O pLaYeR 1 yOu win!"
    } else if (randomDiceNumber2 > randomDiceNumber) {
        document.querySelector("h1").innerHTML = "O PlAyEr 2 yOu win!"
        } else {
            document.querySelector("h1").innerHTML = "O DrAw! O"
        }
    }


PlayNow();













