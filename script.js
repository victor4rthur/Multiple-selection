// Select all checkboxes inside elements with class 'inbox'
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Keep track of the last checked checkbox
let lastChecked;

// Handle the checkbox click event
function handleCheck(e) {
  // Flag to determine if checkboxes are in between the last and current checked checkboxes
  let inBetween = false;

  // Check if the shift key is pressed and the current checkbox is checked
  if (e.shiftKey && this.checked) {
    // Iterate through all checkboxes
    checkboxes.forEach((checkbox) => {
      // Toggle the inBetween flag when the current or last checked checkbox is encountered
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }

      // If inBetween is true, check the checkboxes in between
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // Update the lastChecked variable with the current checkbox
  lastChecked = this;
}

// Add the click event listener to each checkbox
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
