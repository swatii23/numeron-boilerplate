// Iteration 5: Store the player score and display it on the game over screen
import { score } from "./game";

const scoreBoard = document.getElementById("score-board");
scoreBoard.textContent = score;