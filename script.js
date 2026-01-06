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
/* 📱 PHONE FLOW */
const phoneRing = document.getElementById('phoneRing');
const phoneScreen = document.getElementById('phoneScreen');
const toast = document.getElementById('toast');

function showToast(text) {
  toast.innerText = text;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 1600);
}

/* SAU KHI CHAT XONG → PHONE RING */
function afterChat() {
  phoneRing.style.display = 'block';

  setTimeout(() => {
    phoneRing.style.display = 'none';
    phoneScreen.style.display = 'flex';
  }, 1800);
}

/* GHI ĐÈ typeText KẾT THÚC */
const oldTypeText = typeText;
typeText = function(text) {
  oldTypeText(text);
  setTimeout(afterChat, 1800);
};

/* SAVE NAME */
function saveName() {
  const name = document.getElementById('playerName').value;
  if (!name) return;

  localStorage.setItem('playerName', name);
  showToast(`Đã nhập tên "${name}" thành công!`);

  nextStep('stepName', 'stepGender');
}

/* SAVE GENDER */
function saveGender(gender) {
  localStorage.setItem('playerGender', gender);
  nextStep('stepGender', 'stepAge');
}

/* SAVE AGE */
function saveAge() {
  const age = document.getElementById('playerAge').value;
  if (!age) return;

  localStorage.setItem('playerAge', age);
  showToast('Hoàn tất!');

  setTimeout(() => {
    phoneScreen.style.transform = 'scale(1.2)';
  }, 500);
}

function nextStep(hide, show) {
  document.getElementById(hide).classList.remove('active');
  document.getElementById(show).classList.add('active');
}
