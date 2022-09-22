

/** Module for the gameBoard object */
const gameBoard = (function(){

    const mygameBoard = [] ;

    const gameOver = function() {
        const displaySelection = document.querySelectorAll('.tic'); 
        let a0 = displaySelection[0].innerHTML;
        let a1 = displaySelection[1].innerHTML;
        let a2 = displaySelection[2].innerHTML;
        let a3 = displaySelection[3].innerHTML;
        let a4 = displaySelection[4].innerHTML;
        let a5 = displaySelection[5].innerHTML;
        let a6 = displaySelection[6].innerHTML;
        let a7 = displaySelection[7].innerHTML;
        let a8 = displaySelection[8].innerHTML; 

        if((a0 == "X" && a1 =="X" && a2 == "X")|| (a0 == "X" && a3 =="X" && a6 == "X") || (a6 == "X" && a7 =="X" && a8 == "X") || (a2 == "X" && a5 =="X" && a8 == "X") || (a1 == "X" && a4 =="X" && a7 == "X") || (a3 == "X" && a4 =="X" && a5 == "X") || (a2 == "X" && a4 =="X" && a6 == "X") || (a0 == "X" && a4 =="X" && a8 == "X") ) 
        {   reset();
            y = 1;

            const myTurn = document.getElementById('playerturn');
            myTurn.innerHTML = "";

            const myOverlay = document.getElementById('overlay');
            myOverlay.classList.add('active');

            const myCongrats = document.querySelector('.congratulation');
            myCongrats.classList.add('active');

            const myWinner = players();
            const winnerName = document.querySelector('.winner')
            winnerName.innerHTML = myWinner.playerName1;

            const winnerRound = document.querySelector('.winnerround');
            winnerRound.innerHTML = "Is the winner of this round ! Do you want to play again ?"

            
            
        }
        else if ( (a0 == "O" && a1 =="O" && a2 == "O")|| (a0 == "O" && a3 =="O" && a6 == "O") || (a6 == "O" && a7 =="O" && a8 == "O") || (a2 == "O" && a5 =="O" && a8 == "O") || (a1 == "O" && a4 =="O" && a7 == "O") || (a3 == "O" && a4 =="O" && a5 == "O") || (a2 == "O" && a4 =="O" && a6 == "O") || (a0 == "O" && a4 =="O" && a8 == "O")
        )
        {   reset();
            y = 1;
            const thisForm = document.querySelector('.tics');
            thisForm.classList.remove('active');

            const myTurn = document.getElementById('playerturn');
            myTurn.innerHTML = "";

            const myOverlay = document.getElementById('overlay');
            myOverlay.classList.add('active');

            const myCongrats = document.querySelector('.congratulation');
            myCongrats.classList.add('active');

            const myWinner = players();
            const winnerName = document.querySelector('.winner')
            winnerName.innerHTML = myWinner.playerName2;

            const winnerRound = document.querySelector('.winnerround');
            winnerRound.innerHTML = "Is the winner of this round ! Do you want to play again ?"
            
        }

        else if ( a0 !== " " && a1 !== " " && a2 !== " " && a3 !== " " && a4 !== " " && a5 !== " " && a6 !== " " && a7 !== " " && a8 !== " ")
        {   reset();
            y = 1;

            const myTurn = document.getElementById('playerturn');
            myTurn.innerHTML = "";

            const myOverlay = document.getElementById('overlay');
            myOverlay.classList.add('active');

            const myCongrats = document.querySelector('.congratulation');
            myCongrats.classList.add('active');

            const winnerName = document.querySelector('.winner');
            winnerName.innerHTML = "It's a TIE !";

            const roundWinner = document.querySelector ('.winnerround');
            roundWinner.innerHTML = "No one whon this round. Do you want to play again ?"
      
           
        }
    }

    const reset = function() {
        const playerSelection = document.querySelectorAll('.tic');
        playerSelection.forEach(tic => tic.innerHTML =" ");
    }

    return {mygameBoard, gameOver,reset};

})();



/** Module for controlling the flow of the game */

let score=[];
let x = 0;
let y = 1;

const displayController = (function(){

    /** Display the player selection  */

    const displaySelection = document.querySelectorAll('.tic');
    displaySelection.forEach(tic => tic.addEventListener ('click', function(){

        score = players("X","O");

        if (tic.innerHTML == " ") {
            if ((y % 2) == 0) {
                gameBoard.mygameBoard.push(score.playerSelection2);
                tic.innerHTML = gameBoard.mygameBoard[x];
                x += 1;
                y += 1; 
                
                const myTurn = document.getElementById('playerturn');
                myTurn.innerHTML = `This is the turn of ${score.playerName1} to play !`;

            }

            else {
                gameBoard.mygameBoard.push(score.playerSelection1);
                tic.innerHTML = gameBoard.mygameBoard[x];
                x += 1;
                y += 1; 

                const myTurn = document.getElementById('playerturn');
                myTurn.innerHTML = `This is the turn of ${score.playerName2} to play !`;
            }
         }

         else 
         {
            return
         }

        gameBoard.gameOver();

    }))


    /** Reset Button */
    const playerReset = document.getElementById('restart');
    playerReset.addEventListener('click', function() {
        gameBoard.reset();
        const myTurn = document.getElementById('playerturn');
        myTurn.innerHTML = "";
        const thisForm = document.querySelector('.tics');
        thisForm.classList.add('active');



    })


    /** Display and close the playerForm */

    let openForm = function(){
        const form = document.querySelector('.openform');
        form.addEventListener('click', function() {
            const myForm = document.querySelector('.playerData');
            const myOverlay = document.getElementById('overlay');
            myForm.classList.add('active');
            myOverlay.classList.add('active');
        })
        };
    openForm();

    let closeForm = function() {
        const closeTheForm = document.querySelector('.closeform');
        closeTheForm.addEventListener('click', function() {
            const myForm = document.querySelector('.playerData');
            const myOverlay = document.getElementById('overlay');
            myForm.classList.remove('active');
            myOverlay.classList.remove('active');
        })
    };
    closeForm();

    let playForm = function() {
        const playTheForm = document.querySelector('.play');
        playTheForm.addEventListener('click', function() {

            const player1Validation = document.getElementById('player1');
            const player2Validation = document.getElementById('player2');
            const player1X = document.querySelector('.invalid-x');
            const player2Y = document.querySelector('.invalid-y');

            if (player1Validation.value == '' || player2Validation.value == '' ) {
                player1Validation.classList.add('invalid');
                player2Validation.classList.add('invalid');
                player1X.innerHTML = "✖";
                player2Y.innerHTML = "✖";
            }

            else {

            const myForm = document.querySelector('.playerData');
            const myOverlay = document.getElementById('overlay');
            myForm.classList.remove('active');
            myOverlay.classList.remove('active');

            player1Validation.classList.remove('invalid');
            player2Validation.classList.remove('invalid');
            player1X.innerHTML = "";
            player2Y.innerHTML = "";

            const thisForm = document.querySelector('.tics');
            thisForm.classList.add('active');

            let myPlayer = players();
            const myTurn = document.getElementById('playerturn');
            myTurn.innerHTML = `This is the turn of ${myPlayer.playerName1} to play !`;

            gameBoard.reset();

           let getNames = players().playerNames();
            };

        })
    };

    playForm();

        /** Congra - Buttons */

        const replaySame = document.querySelector('.replay1');
        replaySame.addEventListener('click', function() {
            const myCongra = document.querySelector('.congratulation');
            myCongra.classList.remove('active');

            const myOverlay = document.getElementById('overlay');
            myOverlay.classList.remove('active');

        });

        const replayDifferent = document.querySelector('.replay2');
        replayDifferent.addEventListener('click', function(){
            const myCongra = document.querySelector('.congratulation');
            myCongra.classList.remove('active');

            const player1Reset = document.getElementById('player1');
            const player2Reset = document.getElementById('player2');
            player1Reset.value = "";
            player2Reset.value = "";

            const myForms = document.querySelector('.playerData');
            const myOverlay = document.getElementById('overlay');
            myForms.classList.add('active');
            myOverlay.classList.add('active');
        });

        const closeCongra = document.querySelector('.closecongra');
        closeCongra.addEventListener('click', function() {
            const myCongra = document.querySelector('.congratulation');
            myCongra.classList.remove('active');

            const myOverlay = document.getElementById('overlay');
            myOverlay.classList.remove('active');
        })


})();


/** Function factory for the players object */

const players = (playerSelection1, playerSelection2, playerName1, playerName2) => {

    let playerNames = function() {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    }

    playerName1 = player1.value;
    playerName2 = player2.value;


    return {playerSelection1, playerSelection2, playerNames, playerName1, playerName2}
};










