const space = document.querySelector('.space');
const icons = ['💗','🌸','✨','💖','🌷','💫'];

for(let i = 0; i < 25; i++){
  const span = document.createElement('span');
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = 14 + Math.random() * 20 + 'px';
  span.style.animationDuration = 10 + Math.random() * 15 + 's';
  space.appendChild(span);
    }
