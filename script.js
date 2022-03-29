let playerInput;

let computerInput;

    for (var i = 1; i < 5; i++) {

        playerInput = prompt('rock, paper, scissors').toLowerCase();

        computerPlay();
        
        function computerPlay (){
        
        let rNum;

        rNum = Math.random(0,2);
        
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
        } else if (playerInput === 'paper' && computerInput === 'rock') {
            console.log('Player Wins');
        } else if (playerInput === 'paper' && computerInput === 'scissors') {
            console.log('Computer Wins');
        } else if (playerInput === 'scissors' && computerInput === 'rock') {
            console.log('Computer Wins');
        } else if (playerInput === 'scissors' && computerInput === 'paper') {
            console.log('Player Wins');
        }
    }