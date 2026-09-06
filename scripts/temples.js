const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? 'X' : '≡';
});
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;
