// JavaScript code from the original code
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Show footer when scrolled to the bottom
  window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.classList.add('show-footer');
    } else {
      footer.classList.remove('show-footer');
    }
  });

  // Add JavaScript for power button and dropdown menu
  const powerButton = document.createElement('div');
  powerButton.classList.add('power-button');
  powerButton.innerHTML = '&#x1F50A;'; // Unicode for power symbol
  document.body.appendChild(powerButton);

  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown-menu');
  dropdownMenu.innerHTML = `
    <a href="#project-description">Project Description</a>
    <a href="#key-features">Solution</a>
    <a href="#benefits">Benefits</a>
    <a href="#teams">Teams</a>
  `;
  document.body.appendChild(dropdownMenu);

  powerButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show-dropdown');
  });

  // Close dropdown menu when clicking outside of it
  window.addEventListener('click', function(e) {
    if (!powerButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show-dropdown');
    }
  });
});
