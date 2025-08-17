/**
 * Finds all elements with a 'data-icon-name' attribute on the page
 * and loads the specified SVG file into each one.
 * Assumes all icon files are located in an 'icons/' directory.
 */
function loadIcons() {
  // Find all elements that are designated as icon placeholders.
  const iconPlaceholders = document.querySelectorAll('[data-icon-name]');

  iconPlaceholders.forEach(placeholder => {
    const iconName = placeholder.dataset.iconName;
    const iconPath = `assets/icons/${iconName}`;

    fetch(iconPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok for ${iconName}`);
        }
        return response.text();
      })
      .then(svgText => {
        placeholder.innerHTML = svgText;
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
        placeholder.innerHTML = ''; 
      });
  });
}

document.addEventListener('DOMContentLoaded', loadIcons);
