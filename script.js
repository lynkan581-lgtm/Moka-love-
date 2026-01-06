const startCard = document.getElementById("startCard");
const blink = document.getElementById("blink");
const scene = document.getElementById("scene");
const phone = document.getElementById("phone");
const profile = document.getElementById("profile");

startCard.onclick = () => {
  startCard.style.display = "none";
  blink.style.opacity = 1;

  setTimeout(() => {
    blink.style.opacity = 0;
    scene.style.display = "block";
  }, 600);
};

function submitAge() {
  const age = document.getElementById("ageInput").value;
  if (!age) return;

  localStorage.setItem("playerAge", age);
  localStorage.setItem("playerName", "Moka");
  localStorage.setItem("playerGender", "Nữ");

  phone.style.display = "none";
  showProfile();
}

function showProfile() {
  document.getElementById("pName").innerText =
    localStorage.getItem("playerName");
  document.getElementById("pAge").innerText =
    localStorage.getItem("playerAge");
  document.getElementById("pGender").innerText =
    localStorage.getItem("playerGender");

  profile.style.display = "block";
}

/* AVATAR */
const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");

avatarInput.onchange = () => {
  const file = avatarInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    avatarPreview.src = reader.result;
    avatarPreview.style.display = "block";
  };
  reader.readAsDataURL(file);
};
