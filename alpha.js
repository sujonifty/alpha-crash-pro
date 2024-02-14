function play(){
    // console.log('play now.');
    // step-1: hidden the homeScreen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    // step-2: show the play ground
    const playScreen = document.getElementById('play-ground');
    playScreen.classList.remove('hidden');

    getRandomAlphabet();
    continueGame();
}
function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    //create random number
    let randomNumber = Math.random()*25;
    let index = Math.round(randomNumber);
    //get random number by index
    let alphabet = alphabets[index];
    return alphabet;
}

// add backgriund
function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColor(alphabet);
}
