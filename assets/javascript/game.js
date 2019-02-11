/* 
STEP 1: user chooses a letter
    if letter === hiddenLetter, then reveal (push) letter in hiddenWord
        remaining tries goes down
    if letter !== hiddenLetter, then reveal (push) letter in usedLetter
        remaining tries goes down
STEP 2: user continues to choose a letter until
    if hiddenWord is revealed, then game restarts
        wins ++
    if remaining tries === 0, then game restarts
        losses ++

1:  user presses a letter
2:  if right letter
        reveal letter in current word
        remaining guesses --
    else wrong letter
        reveal letter in guessed letters
        remaining guesses --
3:  when all letters guessed & remaining guesses > 0
        wins ++
        restart the game (generate new word, clear letters      guessed, remaining guesses to 12)
   
*/

let wordsList = ["irritated", "ashamed", "useless", "secure", "thankful", "anxious", "animated", "content"];
let randomWord = []; // set value to empty array so randomWord can be passed the value of words - computer generated word
let hiddenWord = []; // set value to empty array so hiddenWord can be passed value of randomWord.length
let wins = 0;
let losses = 0;
let guessesLeft = 12;
let userGuess = [];
let correctLetters = [];
let usedLetters = [];


// this function starts and restarts the game
function startGame() {
 
    // randomWord is assigned the value from words -- a word [in the words array] is chosen, based on the random number generated through the equation inside the words array

    randomWord = words[Math.floor(Math.random() * words.length)] 
    console.log(randomWord)

    // this for loop runs through the randomWord and tells you the words length
    for (i = 0; i < randomWord.length; i++) {
    console.log(randomWord.length)
    
    // so here the letters are seperated into an array. if word has 2 letters it will loop 2 times ["_", "_"]
    hiddenWord[i] = "_";  
    }
    
    // then after hiddenWord is out of the for loop we get the full length of the word in an array 
    console.log(hiddenWord)

    // that hiddenWord array is then displayed via js hooking into the html via #wordDisplay and .join hiddenWord array into a hiddenWord string
    document.getElementById("wordDisplay").textContent = hiddenWord.join(" ");

    // wins value is displayed
    document.getElementById("winsDisplay").textContent = wins;

    // losess value is displayed
    document.getElementById("lossesDisplay").textContent = losses;

    // guesses value displayed
    document.getElementById('guessesLeftDisplay').textContent = guessesLeft;
}

function checkLetter() {

}

startGame()

