/* ICON TRÔI */
const icons = ['💗','✨','🌸','💖','💫'];
const iconBox = document.getElementById('icons');

for (let i = 0; i < 25; i++) {
  const span = document.createElement('span');
  span.className = 'icon';
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = 14 + Math.random() * 18 + 'px';
  span.style.animationDuration = 15 + Math.random() * 20 + 's';
  iconBox.appendChild(span);
}

/* ELEMENTS */
const intro = document.getElementById('intro');
const blink = document.getElementById('blink');
const game = document.getElementById('game');
const chat = document.getElementById('chat');
const chatText = document.getElementById('chatText');
const buttons = document.querySelectorAll('#choices button');

/* START */
intro.onclick = () => {
  blink.style.opacity = 1;

  setTimeout(() => blink.style.opacity = 0, 300);
  setTimeout(() => blink.style.opacity = 1, 550);
  setTimeout(() => blink.style.opacity = 0, 800);

  setTimeout(() => {
    intro.style.display = 'none';
    iconBox.remove();
    game.style.display = 'block';
  }, 900);
};

/* CHAT TYPE */
buttons.forEach(btn => {
  btn.onclick = () => {
    chat.style.display = 'block';
    chatText.textContent = '';
    let text = btn.dataset.text;
    let i = 0;

    const typing = setInterval(() => {
      chatText.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(typing);
        setTimeout(() => chat.style.display = 'none', 1200);
      }
    }, 60);
  };
});
  const typing = setInterval(() => {
    chatText.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);
      setTimeout(() => {
        chatbox.style.display = 'none';
      }, 1200);
    }
  }, 55);
             }
