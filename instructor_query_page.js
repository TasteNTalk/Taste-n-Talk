// JavaScript code for handling form functionality
document.addEventListener("DOMContentLoaded", () => {
    // Reference to the instructional content dropdown and file input
    const instructionalContentSelect = document.getElementById("instructional_content");
    const fileInput = document.getElementById("if_yes");
  
    // Show or hide the file input based on the selected value
    instructionalContentSelect.addEventListener("change", () => {
      if (instructionalContentSelect.value === "Yes") {
        fileInput.classList.remove("hidden");
      } else {
        fileInput.classList.add("hidden");
      }
    });
  
    // Handle form submission
    const form = document.getElementById("instructor-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Collect form data
      const formData = new FormData(form);
      
      // Check if file input is required but not provided
      if (
        instructionalContentSelect.value === "Yes" &&
        !fileInput.files.length
      ) {
        alert("Please upload a file as an example of your instructional content.");
        return;
      }

      // Provide feedback to the user
      alert("Form submitted successfully! Thank you for your responses.");
  
      // Optionally, reset the form
      form.reset();
      fileInput.classList.add("hidden"); // Hide file input after reset
    });
  });
   