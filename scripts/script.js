

 const wordDisplay = document.querySelector(".word-display");
 const guessesText = document.querySelector(".guesses-text b");
 const keyboardDiv = document.querySelector(".keyboard");
 const gameModal = document.querySelector(".game-modal");
 const playAgainBtn = document.querySelector(".play-again");


 let currentWord, correctLetters = [], wrongGuessCount = 0
 const maxGuesses = 6;

 const resetGame = () => {

    //Reseting all game varaible and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");

 }

 const getRandomWord = () => {

// seclecting a random word and hint from the wordlist
 const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
 currentWord = word;
 console.log(word);
 document.querySelector(".hint-text b").innerText = hint;
 resetGame();
 wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
 }

 const gameOver = (isVictory) => {
    //After 600ms of game complete.. showing modal with relevant details
    setTimeout(() => {
        const modalText = isVictory ? `You found the word` : `The correct word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'lost' : 'victory'}.gif`;
         gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!🎉😃' : 'Game Over!😓'}`;
         gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}<b>`;
        gameModal.classList.add("show");
    }, 300);
 };

 const initGame = (button, clickedLetter) => {

    //checking if clicked letter exist on the the currentword

    if(currentWord.includes(clickedLetter)) {
      [...currentWord].forEach((letter, index) => {
        if(letter === clickedLetter) {
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
      }) 
    } else {
        wrongGuessCount++;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
 }
 

 const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colourless, odorless gas essential"
    },
    {
        word: "mountain",
        hint: "A large natural elevation of thge earth's surface"
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression"
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial object and phenomena."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music"
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behaviour of the physical and internal parts of an object"
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels"
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon"
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colourful wings and a slender body"
    },
    {
        word: "history",
        hint: "The study of past events and human civilization"
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings",
    },
    {
        word: "jazz",
        hint: "A genre of music characterizes by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness"
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made fropm cocoa beans"
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball"
    },
];



//creating keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);






