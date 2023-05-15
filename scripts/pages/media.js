let mediaIndex = 0;
const mediaSection = document.querySelector(".photographerMedia");
const mediaArray = [];

async function displayMedia(mediaData) {
  mediaData.forEach((media, index) => {
    const mediaModel = mediaFactory(media);
    const userMediaCardDOM = mediaModel.getMediaCardDOM();

    console.log(media.likes, "pages");

    /* LightBox section */
    userMediaCardDOM.addEventListener("click", () => {
      mediaIndex = index;

      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          navMedia(-1);
        } else if (e.key === "ArrowRight") {
          navMedia(1);
        }
      });
      function navMedia(direction) {
        mediaIndex += direction;
        if (mediaIndex < 0) {
          mediaIndex = mediaArray.length - 1;
        } else if (mediaIndex >= mediaArray.length) {
          mediaIndex = 0;
        }
        const currentMedia = mediaArray[mediaIndex];
        if (currentMedia.image) {
          lightBoxImage.style.display = "block";
          lightBoxVideo.style.display = "none";
          lightBoxImage.src = `assets/images/${currentMedia.photographerId}/${currentMedia.image}`;
          lightBoxImage.alt = currentMedia.title;
        } else if (currentMedia.video) {
          lightBoxVideo.style.display = "block";
          lightBoxImage.style.display = "none";
          lightBoxVideo.src = `assets/images/${currentMedia.photographerId}/${currentMedia.video}`;
          lightBoxVideo.alt = currentMedia.title;
        }
        lightBoxTitle.textContent = currentMedia.title;
        lightBox.focus();
      }

      const lightBox = document.querySelector(".lightBox");
      const lightBoxImage = lightBox.querySelector(".lightBoxImg");
      const lightBoxVideo = lightBox.querySelector(".lightBoxVideo");
      const lightBoxTitle = lightBox.querySelector(".lightBoxTitle");

      const lightboxClose = lightBox.querySelector(".fa-times");
      lightboxClose.addEventListener("click", () => {
        lightBox.style.display = "none";
      });
      lightboxClose.focus();

      console.log(`assets/images/${media.photographerId}/${media.image}`);
      console.log(`assets/images/${media.photographerId}/${media.video}`);

      if (media.image) {
        lightBoxImage.style.display = "block";
        lightBoxVideo.style.display = "none";
        lightBoxImage.src = `assets/images/${media.photographerId}/${media.image}`;
        lightBoxImage.alt = media.title;
      } else if (media.video) {
        lightBoxVideo.style.display = "block";
        lightBoxImage.style.display = "none";
        lightBoxVideo.src = `assets/images/${media.photographerId}/${media.video}`;
        lightBoxVideo.alt = media.title;
      }
      lightBoxTitle.textContent = media.title;
      lightBox.style.display = "block"; // Show lightBox

      const lightBoxNext = lightBox.querySelector(".fa-chevron-right");
      lightBoxNext.addEventListener("click", () => {
        mediaIndex++;
        if (mediaIndex >= mediaArray.length) {
          mediaIndex = 0;
        }
        const nextMedia = mediaArray[mediaIndex];
        if (nextMedia.image) {
          lightBoxImage.style.display = "block";
          lightBoxVideo.style.display = "none";
          lightBoxImage.src = `assets/images/${nextMedia.photographerId}/${nextMedia.image}`;
          lightBoxImage.alt = nextMedia.title;
        } else if (nextMedia.video) {
          lightBoxVideo.style.display = "block";
          lightBoxImage.style.display = "none";
          lightBoxVideo.src = `assets/images/${nextMedia.photographerId}/${nextMedia.video}`;
          lightBoxVideo.alt = nextMedia.title;
        }

        lightBoxTitle.textContent = nextMedia.title;
        lightBox.focus();
      });

      const lightBoxPrev = lightBox.querySelector(".fa-chevron-left");
      lightBoxPrev.addEventListener("click", () => {
        mediaIndex--;
        if (mediaIndex < 0) {
          mediaIndex = mediaArray.length - 1;
        }
        const prevMedia = mediaArray[mediaIndex];
        if (prevMedia.image) {
          lightBoxImage.style.display = "block";
          lightBoxVideo.style.display = "none";
          lightBoxImage.src = `assets/images/${prevMedia.photographerId}/${prevMedia.image}`;
          lightBoxImage.alt = prevMedia.title;
        } else if (prevMedia.video) {
          lightBoxVideo.style.display = "block";
          lightBoxImage.style.display = "none";
          lightBoxVideo.src = `assets/images/${prevMedia.photographerId}/${prevMedia.video}`;
          lightBoxVideo.alt = prevMedia.title;
        }

        lightBoxTitle.textContent = prevMedia.title;
        lightBox.focus();
      });
    });
    mediaArray.push(media);
    mediaSection.appendChild(userMediaCardDOM);
  });
}

console.log("pages");

// Add the mediaData array to mediaArray before sorting
function displayMediaCards(mediaData) {
  for (let i = 0; i < mediaData.length; i++) {
    // const media = mediaData[i];
    // mediaArray.push(media);
  }
  // sortByPopularity(mediaArray);
}
