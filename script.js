const startCard = document.getElementById('startCard');
const blink = document.getElementById('blink');
const scene = document.getElementById('scene');

/* INTRO → SCENE */
startCard.onclick = () => {
  startCard.style.display = 'none';

  blink.style.opacity = 1;
  setTimeout(() => blink.style.opacity = 0, 200);
  setTimeout(() => blink.style.opacity = 1, 400);

  setTimeout(() => {
    blink.style.opacity = 0;
    document.body.classList.remove('intro-bg');
    scene.style.display = 'block';
  }, 650);
};

/* CHAT + CHOICE */
const buttons = document.querySelectorAll('.choices button');
const chatbox = document.getElementById('chatbox');
const chatText = document.getElementById('chatText');
const choices = document.getElementById('choices');

buttons.forEach(btn => {
  btn.onclick = () => {
    choices.style.display = 'none';
    chatbox.style.display = 'block';
    typeText(btn.dataset.text);
  };
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
  }, 55);
             }
