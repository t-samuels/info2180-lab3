//waits until the DOM is fully loaded before running the code
window.addEventListener("DOMContentLoaded", function() {

    //gets all the div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");

    //loops through each div and add the 'square' class
    boardSquares.forEach(function(square) {
        square.classList.add("square");
    });
});