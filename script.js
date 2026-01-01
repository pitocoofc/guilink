
const profiles = {
  kelvyn: {
    name: "Kelvyn",
    bio: "Dev criativo • jogos • sistemas experimentais",
    photo: "https://cdn.discordapp.com/avatars/ID/AVATAR.png",
    instagram: "https://instagram.com/seuinsta"
  },

  ghost: {
    name: "ghost!",
    bio: "Animador • Roblox • criatividade espontânea",
    photo: "https://cdn.discordapp.com/avatars/ID/AVATAR.png",
    instagram: "https://instagram.com/ghost"
  }
};

const params = new URLSearchParams(window.location.search);
const user = params.get("user");

if (profiles[user]) {
  const p = profiles[user];
  document.getElementById("name").textContent = p.name;
  document.getElementById("bio").textContent = p.bio;
  document.getElementById("photo").src = p.photo;
  document.getElementById("instagram").href = p.instagram;
} else {
  document.getElementById("profile").innerHTML =
    "<p>Perfil não encontrado</p>";
}
