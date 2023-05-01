async function displayMedia(mediaData) {
  const mediaSection = document.querySelector(".photographerMedia");
  const mediaArray = [];

  mediaData.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userMediaCardDOM = mediaModel.getMediaCardDOM();

    /* LightBox section */
    userMediaCardDOM.addEventListener("click", () => {
      const lightBox = document.createElement("div");
      lightBox.classList.add("lightbox");

      const lightBoxMedia = document.createElement("img");
      lightBoxMedia.src = `assets/images/${media.photographerId}/${media.image}`;

      const lightBoxRightArrow = document.createElement("i");
      lightBoxRightArrow.classList.add("fa-solid", "fa-chevron-right");

      let mediaIndex = 0;
      lightBoxRightArrow.addEventListener("click", () => {
        mediaIndex++;
        if (mediaIndex >= mediaArray.length) {
          mediaIndex = 0;
        }
        lightBoxMedia.src = `assets/images/${mediaArray[mediaIndex].photographerId}/${mediaArray[mediaIndex].image}`;
      });

      const lightBoxLeftArrow = document.createElement("i");
      lightBoxLeftArrow.classList.add("fa-solid", "fa-chevron-left");

      lightBoxLeftArrow.addEventListener("click", () => {
        mediaIndex--;
        if (mediaIndex >= mediaArray.length) {
          mediaIndex = 0;
        }
        lightBoxMedia.src = `assets/images/${mediaArray[mediaIndex].photographerId}/${mediaArray[mediaIndex].image}`;
      });

      const lightBoxTitle = document.createElement("p");
      lightBoxTitle.textContent = media.title;
      lightBoxTitle.classList.add("lightBoxTitle");

      lightBoxMedia.alt = media.title;
      lightBoxMedia.classList.add("lightboxMedia");
      console.log(lightBoxMedia);
      console.log(lightBoxMedia.src);

      const lightBoxClose = document.createElement("span");
      lightBoxClose.classList.add("lightbox-close");
      lightBoxClose.textContent = "x";
      lightBoxClose.addEventListener("click", () => {
        lightBox.remove();
      });

      lightBox.appendChild(lightBoxTitle);
      lightBox.appendChild(lightBoxMedia);
      lightBox.appendChild(lightBoxClose);
      lightBox.appendChild(lightBoxRightArrow);
      lightBox.appendChild(lightBoxLeftArrow);

      document.body.appendChild(lightBox);
    });

    mediaArray.push(media);
    mediaSection.appendChild(userMediaCardDOM);
  });
}

function displayMediaCards(mediaData) {
  for (let i = 0; i < mediaData.length; i++) {
    const media = mediaData[i];
    displayMedia(media);
  }
}
