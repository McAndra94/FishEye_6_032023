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
      console.log(photographer.price);

      // Footer section | Total likes & Price

      const likesFooter = document.querySelector(".likesFooter");
      likesFooter.textContent = photographer.totalLikes;

      const priceFooter = document.querySelector(".priceFooter");
      priceFooter.textContent = photographer.price + "€ / jour";

      // Media data
      const photographerMedia = [];
      data.media.forEach((item) => {
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

function toggleOptionsList(btn) {
  const optionsList = btn.nextElementSibling;
  if (optionsList.style.display === "") {
    optionsList.style.display = "none";
    btn.classList.remove("s1-closed");
    btn.classList.add("s1-open");
    btn.querySelector(".selectImage").classList.remove("fa-chevron-up");
    btn.querySelector(".selectImage").classList.add("fa-chevron-down");
  } else {
    optionsList.style.display = "";
    btn.classList.remove("s1-open");
    btn.querySelector(".selectImage").classList.remove("fa-chevron-down");
    btn.querySelector(".selectImage").classList.add("fa-chevron-up");
  }
}

function optionClick(optionBtn) {
  const selectBtn = optionBtn.closest(".selectContainer").querySelector(".s1");
  const presentOption = selectBtn.querySelector("span");
  const newOption = optionBtn.textContent;
  presentOption.textContent = newOption;
  selectBtn.click();
}

console.log();
console.log();
console.log("test end photographer");
