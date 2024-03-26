// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

var score = 0;

function generateNumber() {
    number1.textContent = Math.ceil(Math.random() * 100);
    number2.textContent = Math.ceil(Math.random() * 100);    
}



// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than");
const equal = document.getElementById("equal-to");
const lesser = document.getElementById("lesser-than");

greater.onclick = () => {
    // console.log(`${number1.textContent} ${number2.textContent}`)
    if(number1.textContent > number2.textContent)
    score++;
    console.log(score)
    generateNumber()
}

equal.onclick = () => {
    // console.log(`${number1.textContent} ${number2.textContent}`)
    if(number1.textContent == number2.textContent)
    score++;
    console.log(score)
    generateNumber()
}

lesser.onclick = () => {
    // console.log(`${number1.textContent} ${number2.textContent}`)
    if(number1.textContent < number2.textContent)
    score++;
    console.log(score)
    generateNumber()
}


// Iteration 4: Build a timer for the game

let timeInSeconds = 10;
const timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = timeInSeconds + "s";
  if(timeInSeconds > 0) {
    timeInSeconds--;
  } else {
    window.location.href = "gameover.html"
  }
}

setInterval(updateTimer, 1000);

export { score }