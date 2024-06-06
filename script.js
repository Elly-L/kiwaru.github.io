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

  // Function to toggle the mobile menu
  function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    } else {
      navMenu.classList.add('show');
    }
  }

  // Adding event listener for the menu icon
  var menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
  }
});


