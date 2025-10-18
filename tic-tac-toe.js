//waits until the DOM is fully loaded before running the code
window.addEventListener("DOMContentLoaded", function() {

    //gets all the div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //loops through each div and add the 'square' class
    boardSquares.forEach(function(square) {
        square.classList.add("square");
    });

    //selects all the squares in the grid
    const squares = document.querySelectorAll('.square');

    //keeps track of whose turn it is
    let currentPlayer = 'X';

    //tracks state of game
    let gameState = Array(9).fill(null);

    const statusDiv = document.getElementById("status");

    const newGameButton = document.querySelector(".btn");


    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                const winner = gameState[a];
                statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                statusDiv.classList.add("you-won");
                return true;
            }
        }
        return false;
    }

    //resets the game
    newGameButton.addEventListener("click", () => {
        gameState = Array(9).fill(null);

        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");

        });
    
        statusDiv.textContent = "Move your mouse over a square and click to play an X or O.";
        statusDiv.classList.remove("you-won");

        currentPlayer = 'X';
    });

    squares.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (square.textContent !== '' || statusDiv.classList.contains("you-won")) 
                return;
            
        
    
        //updates the square content
        square.textContent = currentPlayer;

        //adds class "X" or "O" for styling
        square.classList.add(currentPlayer);

        //updates the game state array
        gameState[index] = currentPlayer;

        //checks for a winner after every move
        const winnerFound = checkWinner();

        //switches players if ther is no winner yet
        if (!winnerFound) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        
      });

      square.addEventListener('mouseover', () => {
         if (square.textContent === '' && !statusDiv.classList.contains("you-won")) {
            square.classList.add('hover');
        }
    });

    square.addEventListener('mouseout', () => {
        square.classList.remove('hover');
    });
  });
});


