//waits until the DOM is fully loaded before running the code
window.addEventListener("DOMContentLoaded", function() {

    //gets all the div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //loops through each div and add the 'square' class
    boardSquares.forEach(function(square) {
        square.classList.add("square");
    });
});
//selects all the squares in the grid
const squares = document.querySelectorAll('.square');

//keeps track of whose turn it is
let currentPlayer = 'X';

//tracks state of game
let gameState = Array(9).fill(null);

squares.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (square.textContent !== '') 
            return;

        //updates the square content
        square.textContent = currentPlayer;

        //adds class "X" or "O" for styling
        square.classList.add(currentPlayer);

        //updates the game state array
        gameState[index] = currentPlayer;

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
});

