// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the input fields, button, and result paragraph
  const costInput = document.getElementById("cost");
  const litersInput = document.getElementById("liters");
  const result = document.getElementById("result");
  const button = document.getElementById("calculate");

  // Add click event listener to the calculate button
  button.addEventListener("click", function () {
    
    // Parse the input values
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // Check if both inputs are valid numbers
    if (!isNaN(cost) && !isNaN(liters)) {
      const total = cost * liters; // Calculate total cost
      result.textContent = `Total Cost: $${total.toFixed(2)}`; // Update result text
    } else {
      result.textContent = "Please enter valid numbers!"; // Error message
    }
  });
});
