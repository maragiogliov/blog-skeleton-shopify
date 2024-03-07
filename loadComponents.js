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

function applyTheme() {
  // Check for saved theme preference in local storage
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }
}

function initializeDarkModeToggle() {
  applyTheme(); // Apply saved theme immediately upon initialization

  const modeSwitcher = document.getElementById('modeSwitcher');
  if (modeSwitcher) {
    modeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      // Save the new theme state to local storage
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  } else {
    console.error('Dark mode switcher not found');
  }
}


// Load the header component and initialize any related functionality
loadComponent('header.html', 'header-placeholder', initializeDarkModeToggle);

// Example: Load the footer component without additional functionality
// loadComponent('footer.html', 'footer-placeholder');
