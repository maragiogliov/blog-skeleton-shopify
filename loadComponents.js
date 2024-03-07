// Function to dynamically load a component into a specified element ID and execute a callback function if provided
function loadComponent(componentUrl, elementId, callback) {
  fetch(componentUrl)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (typeof callback === "function") {
        callback();
      }
    })
    .catch(error => {
      console.error('Failed to load the component:', error);
    });
}

// Function to initialize the dark mode toggle functionality
function initializeDarkModeToggle() {
  const modeSwitcher = document.getElementById('modeSwitcher');
  if (modeSwitcher) {
    modeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  } else {
    console.error('Dark mode switcher not found');
  }
}

// Load the header component and initialize any related functionality
loadComponent('header.html', 'header-placeholder', initializeDarkModeToggle);

// Example: Load the footer component without additional functionality
// loadComponent('footer.html', 'footer-placeholder');
