const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = menu.textContent === '≡' ? 'X' : '≡';
});

document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
