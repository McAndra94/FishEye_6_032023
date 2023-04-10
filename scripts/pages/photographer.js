// Retrieve id from url
const photographeId = new URLSearchParams(window.location.search).get("id");
//
window.onload = function () {
  fetch("data/photographers.json")
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

      displayPhotographer(photographer);
      console.log(photographer); // photographer info

      // Media data
      const photographerMedia = [];
      data.media.forEach((item) => {
        console.log("Check 1 2 3");

        if (item.photographerId == photographeId) {
          return photographerMedia.push(item);
        }
      });

      displayMedia(photographerMedia);
      console.log(photographerMedia.length);
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
