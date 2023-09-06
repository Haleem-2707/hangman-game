// const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");


const getRandomWord = () => {

//     //seclecting a random word and hint from the wordlist
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
//     document.querySelector(".hint-text b").innerText = hint;
//     wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

//creating keyboard buttons
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}

getRandomWord();