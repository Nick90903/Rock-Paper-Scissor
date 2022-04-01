let playerInput;

let computerInput;

let playerScore = 0;

let computerScore = 0;

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');

const scoreCount = document.createElement('div');
scoreCount.classList.add('scoreCount');

const runningScore = document.createElement('div');
runningScore.classList.add('runningScore');

const rbtn = document.querySelector('#btn');
rbtn.addEventListener('click', () => {
  playerInput = 'rock';
  playRound();
});

const pbtn = document.querySelector('#paper');
pbtn.addEventListener('click', () => {
  playerInput = 'paper';
  playRound();
});

const sbtn = document.querySelector('#scissors');
sbtn.addEventListener('click', () => {
  playerInput = 'scissors';
  playRound();
});



    //for (var i = 1; i < 6; i++) {
function playRound() {
    console.log('playerInput:' + playerInput);

    computerInput = computerPlay();
    
    function computerPlay (){
    
    let rNum = 0;

    rNum = Math.floor(Math.random() * (3-0) + 0);
    console.log('RandomNumber: ' + rNum);
    
    switch (rNum)
        {
            case 0:
                console.log('computer played: rock');
                return 'rock';
                break;

            case 1:
                console.log('computer played: paper');
                return 'paper';
                break;
            
            case 2:
                console.log('computer played: scissors');
                return 'scissors';
                break;
            
        }
    }

    if(playerInput == computerInput) {
        content.textContent = 'Try Again';
    } else if (playerInput === 'rock' && computerInput === 'paper') {
        content.textContent = 'Computer Wins';
        computerScore++;
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
        content.textContent = 'Player Wins';
        playerScore++;
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        content.textContent = 'Player Wins';
        playerScore++;
    } else if (playerInput === 'paper' && computerInput === 'scissors') {
        content.textContent = 'Computer Wins';
        computerScore++;
    } else if (playerInput === 'scissors' && computerInput === 'rock') {
        content.textContent = 'Computer Wins';
        computerScore++;
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        content.textContent = 'Player Wins';
        playerScore++;
    } else {
        console.log("something's gone horribly wrong");
    }

    container.appendChild(content);

    runningScore.textContent = 'Player: ' + playerScore.toString() + ' Computer: ' + computerScore.toString();
    container.appendChild(runningScore);

    if(playerScore == 5) {
        scoreCount.textContent = 'Player Wins The Game';
        container.appendChild(scoreCount);
    } else if(computerScore == 5) {
        scoreCount.textContent = 'Computer Wins The Game';
        container.appendChild(scoreCount);
    }


    console.log('Container Appended');
}



   //}