function hideElement() {
    // console.log('play now.');
    // step-1: hidden the homeScreen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
}
function showElement() {
    // step-2: show the play ground
    const playScreen = document.getElementById('play-ground');
    playScreen.classList.remove('hidden');
}
// add background color
function addBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// add background color
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    console.log(elementTextValue);
    const value = parseInt(elementTextValue);
    console.log(value);
    return value;
}
function setTextElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet() {
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    //create random number
    let randomNumber = Math.random() * 25;
    let index = Math.round(randomNumber);
    //get random number by index
    let alphabet = alphabets[index];
    return alphabet;
}
function handleKeyBoardKeyupPress(event) {
    const playerPress = event.key;
    //get the expected alphabet by screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if (playerPress == expectedAlphabet) {
        // console.log('right press');
        removeBackgroundColor(expectedAlphabet);
        //updated score
        // 1. get current score
        
        /*const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        console.log(currentScoreText);
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);*/

        //using function for above code
        const currentScore = getTextElementValue('current-score');
        // 2. increase score by 1 
        const newScore = currentScore + 1;
        // 3. display the updated score
        setTextElementValue('current-score' ,newScore);
        // start new round
        continueGame();
    }
    else {
        //updated Life
        // 1. get current Life
        
        /*const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        // console.log(currentLifeText);
        const currentLife = parseInt(currentLifeText);*/

        // using function 
        const currentLife = document.getElementById('current-life');
        // 2. decrease Life by 1
        console.log(currentLife); 
        const newLife = currentLife - 1;
        console.log(newLife);
        
    }


}
//capture keyboard key press
document.addEventListener('keyup', handleKeyBoardKeyupPress)
function continueGame() {
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColor(alphabet);
}

function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}