// script.js

// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Select the "Enter" button
  const startButton = document.querySelector('.start-button');

  // Add a click event listener to the button
  startButton.addEventListener('click', function(event) {
      // Optional: Add a fade-out effect before redirecting
      document.body.style.transition = "opacity 0.5s ease-out";
      document.body.style.opacity = 0;

      // Redirect to the main content page after 0.5 seconds (the duration of the fade-out effect)
      setTimeout(function() {
          window.location.href = 'main.html';
      }, 500);

      // Prevent the default button behavior (if any)
      event.preventDefault();
  });
});
