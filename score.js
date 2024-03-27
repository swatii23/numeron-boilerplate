// Iteration 5: Store the player score and display it on the game over screen
const scoreBoard = document.getElementById("score-board");
scoreBoard.textContent = JSON.parse(localStorage.getItem("score"));

document.getElementById("play-again-button").onclick = () => {
    window.location.href = "index.html"
}