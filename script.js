const intro = document.getElementById('intro');
const startCard = document.getElementById('startCard');
const scene = document.getElementById('scene');
const space = document.getElementById('space');
const chatText = document.getElementById('chatText');

const icons = ['💗','✨','🌸','💖','💫','🫧','🐰'];

function spawnIcon() {
  const s = document.createElement('span');
  s.textContent = icons[Math.floor(Math.random()*icons.length)];
  s.style.left = Math.random()*100 + 'vw';
  s.style.animationDuration = 18 + Math.random()*20 + 's';
  space.appendChild(s);
  setTimeout(()=>s.remove(),40000);
}

for(let i=0;i<18;i++) spawnIcon();
setInterval(spawnIcon, 2000);

startCard.onclick = () => {
  intro.style.display = 'none';
  space.remove();
  document.body.classList.remove('intro-bg');

  setTimeout(()=>{
    scene.style.display = 'block';
  },300);
};

function choose(text) {
  chatText.textContent = '';
  let i = 0;
  const typing = setInterval(()=>{
    chatText.textContent += text[i];
    i++;
    if(i >= text.length) clearInterval(typing);
  },60);
    }
