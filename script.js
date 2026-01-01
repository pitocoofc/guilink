const profiles = {
  kelvyn: {
    name: "Kelvyn",
    bio: "Dev criativo • jogos • sistemas",
    photo: "https://cdn.discordapp.com/avatars/ID/AVATAR.png",
    instagram: "https://instagram.com/",
    github: "https://github.com/pitocoofc",
    site: "https://pitocoofc.github.io"
  },

  ghost: {
    name: "ghost!",
    bio: "Animador • Roblox • criatividade",
    photo: "https://cdn.discordapp.com/avatars/ID/AVATAR.png",
    instagram: "https://instagram.com/",
    github: "https://github.com/",
    site: "#"
  }
};

const path = window.location.pathname.split("/").filter(Boolean);
const user = path[path.length - 1];

const p = profiles[user];

if (p) {
  document.getElementById("name").textContent = p.name;
  document.getElementById("bio").textContent = p.bio;
  document.getElementById("photo").src = p.photo;

  document.getElementById("instagram").href = p.instagram;
  document.getElementById("github").href = p.github;
  document.getElementById("site").href = p.site;
}
