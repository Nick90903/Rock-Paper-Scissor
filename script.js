let playerInput;

let computerInput;

let playerScore = 0;

    for (var i = 1; i < 6; i++) {

        playerInput = prompt('rock, paper, scissors').toLowerCase();
        console.log(playerInput);

        computerInput = computerPlay();
        
        function computerPlay (){
        
        let rNum = 0;

        rNum = Math.floor(Math.random() * (3-0) + 0);
        console.log(rNum);
        
        switch (rNum)
            {
                case 0:
                    console.log('rock');
                    return 'rock';
                    break;

                case 1:
                    console.log('paper');
                    return 'paper';
                    break;
                
                case 2:
                    console.log('scissors');
                    return 'scissors';
                    break;
                
            }
        }

        if(playerInput == computerInput) {
            console.log('try again');
        } else if (playerInput === 'rock' && computerInput === 'paper') {
            console.log('Computer Wins');
        } else if (playerInput === 'rock' && computerInput === 'scissors') {
            console.log('Player Wins');
            playerScore++;
        } else if (playerInput === 'paper' && computerInput === 'rock') {
            console.log('Player Wins');
            playerScore++;
        } else if (playerInput === 'paper' && computerInput === 'scissors') {
            console.log('Computer Wins');
        } else if (playerInput === 'scissors' && computerInput === 'rock') {
            console.log('Computer Wins');
        } else if (playerInput === 'scissors' && computerInput === 'paper') {
            console.log('Player Wins');
            playerScore++;
        } else {
            console.log("something's gone horribly wrong");
        }

        console.log(playerScore);
    }