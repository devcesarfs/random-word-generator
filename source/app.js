import fs from "fs";
import path from "path";
const data = fs.readFileSync(path.join(__dirname, "assets/nouns.txt"), "utf8");
let nounsArray = setupData(data);
let carrouselArray = nounsArray.slice(100, 120);
let randomIndex;

export function generateRandomWords() {
    randomIndex = getRandomIndex(nounsArray.length);
    const randomWordForFirstDiv = nounsArray[randomIndex];
    displayRandomWordsForFirstDiv(randomWordForFirstDiv);
    randomIndex = getRandomIndex(nounsArray.length);
    const randomWordForSecondDiv = nounsArray[randomIndex];
    displayRandomWordsForSecondDiv(randomWordForSecondDiv);
    randomIndex = getRandomIndex(nounsArray.length);
    const randomWordForThirdDiv = nounsArray[randomIndex];
    displayRandomWordsForThirdDiv(randomWordForThirdDiv);

}

function displayRandomWordsForFirstDiv(randomWord) {
    const randomWordDiv = document.getElementById("random-word-1");
    console.log('random word', randomWord);
    const displayRandomWord = rw => randomWordDiv.innerText = rw;
    const displayCarrouselOfWordsBeforeDisplayingDesiredWord = (fn, delay) => {
        return (rw, i) => {
            console.log(rw);
            setTimeout(() => {
                fn(rw);
                if (i === carrouselArray.length - 1) {
                    displayRandomWord(randomWord);
                }
            }, i * delay);
        }
    };

    carrouselArray.forEach(displayCarrouselOfWordsBeforeDisplayingDesiredWord(displayRandomWord, 150));
}

function displayRandomWordsForSecondDiv(randomWord) {
    const randomWordDiv = document.getElementById("random-word-2");
    console.log('random word', randomWord);
    const displayRandomWord = rw => randomWordDiv.innerText = rw;
    const displayCarrouselOfWordsBeforeDisplayingDesiredWord = (fn, delay) => {
        return (rw, i) => {
            console.log(rw);
            setTimeout(() => {
                fn(rw);
                if (i === carrouselArray.length - 1) {
                    displayRandomWord(randomWord);
                }
            }, i * delay);
        }
    };

    carrouselArray.forEach(displayCarrouselOfWordsBeforeDisplayingDesiredWord(displayRandomWord, 150));
}

function displayRandomWordsForThirdDiv(randomWord) {
    const randomWordDiv = document.getElementById("random-word-3");
    console.log('random word', randomWord);
    const displayRandomWord = rw => randomWordDiv.innerText = rw;
    const displayCarrouselOfWordsBeforeDisplayingDesiredWord = (fn, delay) => {
        return (rw, i) => {
            console.log(rw);
            setTimeout(() => {
                fn(rw);
                if (i === carrouselArray.length - 1) {
                    displayRandomWord(randomWord);
                }
            }, i * delay);
        }
    };

    carrouselArray.forEach(displayCarrouselOfWordsBeforeDisplayingDesiredWord(displayRandomWord, 150));
}

/*
Function declartion
*/
function setupData(data) {
    const array = data.split("\n");
    return array;
}

function getRandomIndex(max) {
    const num = Math.floor(Math.random() * max);
    return num;
}


