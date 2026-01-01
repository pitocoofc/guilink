<script>
const profiles = {
  kelvyn: {
    name: "Kelvyn",
    photo: "https://cdn.discordapp.com/avatars/ID/HASH.png",

    links: {
      Instagram: {
        enabled: true,
        url: "https://instagram.com/"
      },
      GitHub: {
        enabled: false
      },
      Site: {
        enabled: true,
        url: "https://pitocoofc.github.io"
      }
    }
  }
};

const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const profile = profiles[user];

if (!profile) {
  document.body.innerHTML = "Perfil não encontrado";
} else {
  // Nome
  document.getElementById("username").textContent = profile.name;

  // Foto (como background)
  const photo = document.getElementById("profilePhoto");
  photo.style.backgroundImage = `url(${profile.photo})`;
  photo.style.backgroundSize = "cover";
  photo.style.backgroundPosition = "center";

  // Links
  const linksDiv = document.getElementById("links");

  for (const name in profile.links) {
    const link = profile.links[name];
    if (link.enabled) {
      const div = document.createElement("div");
      div.className = "link-card";
      div.textContent = name;
      div.onclick = () => window.open(link.url, "_blank");
      linksDiv.appendChild(div);
    }
  }
}
</script>
