// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function generateNumber() {
    return Math.ceil(Math.random() * 100);
}

number1.textContent = generateNumber();
number2.textContent = generateNumber();


// Iteration 3: Make the options button functional



// Iteration 4: Build a timer for the game
