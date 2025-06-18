
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const navbarMenu = document.getElementById(toggleButton.getAttribute('data-collapse-toggle'));

    toggleButton.addEventListener('click', () => {
      navbarMenu.classList.toggle('hidden');
    });
  });

