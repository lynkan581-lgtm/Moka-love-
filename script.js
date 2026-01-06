/* ICON NỀN */
const space = document.querySelector('.space');
const icons = ['💗','✨','🌸','💖'];

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = 14 + Math.random() * 20 + 'px';
  span.style.animationDuration = 10 + Math.random() * 15 + 's';
  space.appendChild(span);
}

/* CHUYỂN SCENE */
const startCard = document.getElementById('startCard');
const blink = document.getElementById('blink');
const scene = document.getElementById('scene');

startCard.addEventListener('click', () => {
  startCard.style.display = 'none';
  space.style.display = 'none';

  blink.style.opacity = 1;
  setTimeout(() => blink.style.opacity = 0, 200);
  setTimeout(() => blink.style.opacity = 1, 400);

  setTimeout(() => {
    blink.style.opacity = 0;
    scene.style.display = 'block';
  }, 650);
});

/* CHAT GÕ CHỮ */
const buttons = document.querySelectorAll('.choices button');
const chatbox = document.getElementById('chatbox');
const chatText = document.getElementById('chatText');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.choices').style.display = 'none';
    chatbox.style.display = 'block';
    typeText(btn.dataset.text);
  });
});

function typeText(text) {
  chatText.innerText = '';
  let i = 0;

  const typing = setInterval(() => {
    chatText.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);
      setTimeout(() => {
        chatbox.style.display = 'none';
      }, 1200);
    }
  }, 60);
             }
