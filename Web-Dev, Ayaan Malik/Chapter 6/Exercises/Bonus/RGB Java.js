

// Get all required elements from the page
const rgbValue = document.getElementById("rgb-value");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const livesText = document.getElementById("lives");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Initialize game state
let correctColor;
let lives = 3;
let score = 0;

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Start a new round
function startGame() {
  options.innerHTML = ""; // Clear previous options
  feedback.textContent = ""; // Clear feedback
  restartBtn.style.display = "none"; // Hide restart button

  correctColor = getRandomColor();
  rgbValue.textContent = correctColor; // Show the RGB value to guess

  const colors = [correctColor];

  // Generate 2 more random, unique colors
  while (colors.length < 3) {
    const newColor = getRandomColor();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  shuffleArray(colors); // Shuffle the colors

  // Create clickable color boxes
  colors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("color-box");
    div.style.backgroundColor = color;
    div.addEventListener("click", () => checkAnswer(color));
    options.appendChild(div);
  });
}

// Check if the selected color is correct
function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    feedback.textContent = "Correct!";
    score++;
  } else {
    feedback.textContent = "Wrong!";
    lives--;
  }

  // Update score and lives display
  scoreText.textContent = `Score: ${score}`;
  livesText.textContent = `Lives: ${lives}`;

  // Check if the player still has lives
  if (lives > 0) {
    setTimeout(startGame, 1000); // Wait then restart round
  } else {
    feedback.textContent = `Game Over! Final Score: ${score}`;
    restartBtn.style.display = "inline-block"; // Show restart button
  }
}

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Restart button event
restartBtn.addEventListener("click", () => {
  lives = 3;
  score = 0;
  scoreText.textContent = `Score: ${score}`;
  livesText.textContent = `Lives: ${lives}`;
  startGame();
});

// Start the game initially
startGame();
