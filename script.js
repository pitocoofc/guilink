const profiles = {
  kelvyn: {
    name: "Kelvyn",
    bio: "Dev criativo • jogos • sistemas",
    photo: "https://cdn.discordapp.com/avatars/ID/AVATAR.png",

    buttons: {
      instagram: {
        enabled: true,
        url: "https://instagram.com/"
      },
      github: {
        enabled: false,
        url: ""
      },
      site: {
        enabled: true,
        url: "https://pitocoofc.github.io"
      }
    }
  }
};

const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const p = profiles[user];

const linksContainer = document.getElementById("links");

if (!p) {
  document.body.innerHTML = "<p style='color:white'>Perfil não encontrado</p>";
} else {
  document.getElementById("name").textContent = p.name;
  document.getElementById("bio").textContent = p.bio;
  document.getElementById("photo").src = p.photo;

  // limpa os botões
  linksContainer.innerHTML = "";

  for (const key in p.buttons) {
    const btn = p.buttons[key];
    if (btn.enabled) {
      const a = document.createElement("a");
      a.href = btn.url;
      a.target = "_blank";
      a.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      linksContainer.appendChild(a);
    }
  }
}
