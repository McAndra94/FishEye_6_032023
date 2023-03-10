//const u = new URLSearchParams(window.location.search);
//const photographerId = u.get("id");

// Retrieve id from url
const photographeId = new URLSearchParams(window.location.search).get("id");

window.onload = function () {
  fetch("/data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      // Photographers data
      const photographer = data.photographers.find(
        (item) => item.id == photographeId
      );
      console.log(photographeId); // id (photographers)
      // Media data
      const photographerMedia = data.media.find(
        (items) => items.photographerId == photographeId
      );
      console.log(photographerMedia); // photographer media
      if (!photographer) {
        window.location.href = "index.html";
      }
      displayPhotographer(photographer);
      console.log(photographer); // photographer info
      if (!photographer.id === photographerMedia.photographerId) {
      }
      displayMedia(photographerMedia);
    });
};

async function displayData(photographers) {
  const photographerHeader = document.querySelector(".photograph-header");
  console.log(photographerHeader);
}

function displayPhotographer(photographer) {
  document.getElementById("photographerName").textContent = photographer.name;
  document.getElementById(
    "photographerLocation"
  ).textContent = `${photographer.city}, ${photographer.country}`;

  document.getElementById("photographerTagline").textContent =
    photographer.tagline;
  document.getElementById(
    "photographerImg"
  ).src = `assets/photographers/${photographer.portrait}`;
  document.getElementById("photographerImg").alt = `${photographer.name}`;
}

// Media
async function displayData(media) {
  const photographerMedia = document.querySelector("#photographerMedia");
  console.log(photographerMedia);
}

function displayMedia(photographerMedia) {
  document.querySelector(
    ".mediaImg"
  ).src = `assets/images/${photographerMedia.photographerId}/${photographerMedia.image}`;
  document.querySelector(".mediaImg").alt = `${photographerMedia.title}`;

  document.getElementById("mediaTitle").textContent = photographerMedia.title;
  document.getElementById("mediaLikes").textContent = photographerMedia.likes;

  document.getElementById("likeHeart").src = "assets/images/likeHeart.png";
  document.getElementById("likeHeart").alt = "likes";
}
media.forEach(photographerMedia);
