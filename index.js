let computerGuess;
let userGuess = [];
let audio=new Audio("./audio/sound.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

const newGameBegin = () =>{
    audio.play();
    document.location.reload();
};

const startNewGame = () => {
  audio.play();
  document.getElementById("newGameButton").style.display = "inline";
  document.getElementById("inputBox").setAttribute("disabled", true);
};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  if (userGuess.length < maxGuess) {
    audio.play();
    if (userNumber > computerGuess) {
      document.getElementById("textOutput").innerHTML = "Your guess is high";
      document.getElementById("inputBox").value = "";
    } else if (userNumber < computerGuess) {
      document.getElementById("textOutput").innerHTML = "Your guess is low";
      document.getElementById("inputBox").value = "";
    } else {
      document.getElementById("textOutput").innerHTML = "It's correct!";
      document.getElementById("inputBox").value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      document.getElementById(
        "textOutput"
      ).innerHTML = `You loose!! correct number was ${computerGuess}`;
      document.getElementById("inputBox").value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      document.getElementById(
        "textOutput"
      ).innerHTML = `You loose!! correct number was ${computerGuess}`;
      document.getElementById("inputBox").value = "";
      startNewGame();
    } else {
      document.getElementById("textOutput").innerHTML = "It's correct!";
      document.getElementById("inputBox").value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
