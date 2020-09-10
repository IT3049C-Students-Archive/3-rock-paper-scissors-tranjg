// Elements
const welcomeScreen = document.querySelector(`#welcome-screen`);
const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.querySelector(`#start-game-button`);
const userName = document.querySelector(`#username`);
const userSelection = document.querySelector(`#user-selection`);
const goButton = document.querySelector(`#go-button`);
const scoreParagraph = document.querySelector(`#score`);
const gameHistoryParagraph = document.querySelector(`#game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
// gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = `<p>${userName.value} : ${game.score.user} v CPU: ${game.score.cpu}</p>`;
}


// updateGameHistoryUI

function updateGameHistoryUI(){
 gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  game = new RockPaperScissors(userName.value);
 // welcomeScreen.classList.add(`d-none`);
 // gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play(userSelection.value);
  updateScoreTallyUI();
  updateGameHistoryUI();
});