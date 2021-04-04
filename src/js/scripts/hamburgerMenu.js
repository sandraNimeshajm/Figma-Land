const hamburgerMenu = () => {

  const hamburgerMenuBtn = document.querySelector('.js-menu');
  const headerContent = document.querySelector('.js-header__content');
  const overlay = document.querySelector('.overlay');

  hamburgerMenuBtn.addEventListener('click', () => {
    headerContent.classList.toggle('active');
    hamburgerMenuBtn.classList.toggle('active');
    overlay.classList.toggle('hidden');
  });

  overlay.addEventListener('click', () => {
    headerContent.classList.toggle('active');
    hamburgerMenuBtn.classList.toggle('active');
    overlay.classList.toggle('hidden');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !headerContent.classList.contains('hidden')) {
      headerContent.classList.toggle('active');
      hamburgerMenuBtn.classList.toggle('active');
      overlay.classList.toggle('hidden');
    }
  });
}

export default hamburgerMenu;