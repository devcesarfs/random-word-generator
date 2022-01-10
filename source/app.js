import fs from "fs";
import path from "path";
const data = fs.readFileSync(path.join(__dirname, "assets/nouns.txt"), "utf8");
//let nounsArray = setupData(data);
//let carrouselArray;
//let randomIndex;
let start = 0;
let end = 0;

export function generateRandomWords() {
    displayRandomWordsForAllThreeDivs();
}

function computeRangeToDisplayRandomWord(randomIndex, nounsArray) {
    if (randomIndex < 10) {
        start = randomIndex + 1;
        end = start + 10;
    } else if (randomIndex > nounsArray.length - 11) {
        start = randomIndex - 1;
        end = start - 10;
    } else {
        start = randomIndex - 10;
        end = randomIndex + 10;
    }
}

function displayRandomWordsForAllThreeDivs() {
    let delay = 150;
    let carrouselArray;
    let nounsArray = setupData(data);

    const displayCarrouselOfWordsBeforeDisplayingDesiredWord = (randomWordToDisplay, displayRandomWordDiv, waitTimeBetweenWords) => {
        return (rw, i) => {
            setTimeout(() => {
                displayRandomWord(displayRandomWordDiv, rw);
                if (i === carrouselArray.length - 1) {
                    displayRandomWord(displayRandomWordDiv, randomWordToDisplay);
                }
            }, i * waitTimeBetweenWords);
        }
    }

    for (let i = 1; i < 4; i++) {
        let randomIndex = getRandomIndex(nounsArray.length);
        let randomWord = nounsArray[randomIndex];
        computeRangeToDisplayRandomWord(randomIndex, nounsArray);
        carrouselArray = nounsArray.slice(start, end);
        let randomWordDiv = document.getElementById("random-word-".concat(i));
        carrouselArray.forEach(displayCarrouselOfWordsBeforeDisplayingDesiredWord(randomWord, randomWordDiv, delay));
    }

}

function displayRandomWord(div, randomWord) {
    div.innerText = randomWord;
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


