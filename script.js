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


    }