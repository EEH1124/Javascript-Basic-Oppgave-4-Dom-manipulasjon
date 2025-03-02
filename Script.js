// Get button and display elements
const colorButton = document.getElementById("colorButton");
const resetButton = document.getElementById("resetButton");
const colorDisplay = document.getElementById("colorDisplay");

// Function to generate a random color
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to change the background color
function changeBackgroundColor() {
  let newColor = getRandomColor(); // Get a random color
  document.body.style.backgroundColor = newColor; // Change background
  colorDisplay.textContent = `Current Color: ${newColor}`; // Update text
  colorButton.style.backgroundColor = newColor; // Change button color too
}

// Function to reset the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = "black"; // Reset to default black
  colorDisplay.textContent = "Current Color: White"; // Reset text
  colorButton.style.backgroundColor = "red"; // Reset button to red
}

// Event listeners for buttons
colorButton.addEventListener("click", changeBackgroundColor);
resetButton.addEventListener("click", resetBackgroundColor);
