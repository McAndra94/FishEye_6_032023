// Retrieve id from url
const photographeId = new URLSearchParams(window.location.search).get("id");
//
window.onload = function () {
  fetch("/data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      // Photographers data
      const photographer = data.photographers.find(
        (item) => item.id == photographeId
      );
      if (!photographer) {
        window.location.href = "index.html";
      }
      console.log(photographeId);
      // Media data
      const photographerMedia = [];
      data.media.forEach((item) => {
        if (item.photographerId == photographeId) photographerMedia.push(item);
      });
      console.log(photographerMedia.photographerId);

      displayPhotographer(photographer);
      console.log(photographer); // photographer info

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
