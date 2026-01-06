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
  const typing = setInterval(() => {
    chatText.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);

      setTimeout(() => {
        chatbox.style.display = 'none';
        showPhone(); // 👉 ĐIỆN THOẠI XUẤT HIỆN
      }, 1200);
    }
  }, 55);
}

/* ===== PHONE ===== */
const phone = document.getElementById('phone');

function showPhone() {
  phone.style.display = 'block';
}

/* ===== NHẬP TUỔI ===== */
function submitAge() {
  const age = document.getElementById('ageInput').value;
  if (!age) return;

  localStorage.setItem('playerAge', age);
  localStorage.setItem('playerName', 'Moka');
  localStorage.setItem('playerGender', 'Nữ');

  phone.style.display = 'none';
  showProfile();
}

/* ===== PROFILE ===== */
const profile = document.getElementById('profile');

function showProfile() {
  document.getElementById('pName').innerText =
    localStorage.getItem('playerName');
  document.getElementById('pAge').innerText =
    localStorage.getItem('playerAge');
  document.getElementById('pGender').innerText =
    localStorage.getItem('playerGender');

  profile.style.display = 'block';
}

/* ===== AVATAR ===== */
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');

avatarInput.onchange = () => {
  const file = avatarInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    avatarPreview.src = reader.result;
    avatarPreview.style.display = 'block';
  };
  reader.readAsDataURL(file);
};
