/* ICON NỀN */
const space = document.querySelector('.space');
const icons = ['💗','🌸','✨','💖','🌷','💫','💞'];

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = 14 + Math.random() * 20 + 'px';
  span.style.animationDuration = 10 + Math.random() * 15 + 's';
  space.appendChild(span);
}

/* CLICK INTRO */
const startCard = document.getElementById('startCard');

startCard.addEventListener('click', () => {
  startCard.style.animation = 'none';
  startCard.style.transition = 'all 0.6s ease';
  startCard.style.transform = 'translate(-50%, -50%) scale(0.8)';
  startCard.style.opacity = '0';

  setTimeout(() => {
    startCard.style.display = 'none';
    console.log('START GAME');
  }, 600);
});
