// PAPER ROCK SCISSORS GAME
// Player vs PC

function pcchoice () {
    pc=Math.floor(Math.random()*3)+1;
    if (pc === 1) {
        pc = 'rock';
    } else if (pc === 2) {
        pc = 'paper';
    } else{
        pc = 'scissors';
    }
    return pc;
}

function playerchoice() {
    player = prompt("Enter one of the followings:\n 1- rock \n 2- paper \n 2- scissors").toLowerCase();
    if (player != 'rock' &&  player != 'paper' && player != 'scissors') {
      prompt("You did not choice any given option. press OK to try again").toLowerCase();
      playerchoice();
    } else {
    return player;
    }
}

function playgame() {
    pcchoice();
    playerchoice();
    if (pc === 'rock' && player === 'paper') {
        console.log (`player wins. Pc's choice was ${pc}`);
    } else if (pc === 'rock' && player === 'scissors') {
        console.log (`pc wins. Pc's choice was ${pc}`);
    } else if (pc === 'paper' && player === 'rock') {
        console.log (`pc wins. Pc's choice was ${pc}`);
    } else if (pc === 'paper' && player === 'scissors') {
        console.log (`player wins. Pc's choice was ${pc}`);
    } else if (pc === 'scissors' && player === 'paper') {
        console.log (`pc wins. Pc's choice was ${pc}`);
    } else if (pc === 'scissors' && player === 'rock') {
        console.log (`player wins. Pc's choice was ${pc}`);
    } else {
        console.log (`Draw. Pc's choice was ${pc}`);
    }
}

playgame();