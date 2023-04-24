async function displayMedia(mediaData) {
  const mediaSection = document.querySelector(".photographerMedia");

  mediaData.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userMediaCardDOM = mediaModel.getMediaCardDOM();
    /* LightBox section */
    console.log(media.image);

    userMediaCardDOM.addEventListener("click", () => {
      const lightBox = document.createElement("div");
      lightBox.classList.add("lightbox");
      console.log(media.photographerId);
      console.log(media.image);
      console.log(media.video);
      console.log("media page");

      // Media title in lightbox (put under image/video)
      const lightBoxTitle = document.createElement("p");
      lightBoxTitle.textContent = media.title;

      const lightBoxMedia =
        media.type === "image"
          ? document.createElement("img")
          : document.createElement("video");
      if (media.type === "image") {
        lightBoxMedia.src = `/assets/images/${media.photographerId}/${media.image}`;
        console.log(media.photographerId);
        console.log(media.image);
      } else if (media.type === "video") {
        lightBoxMedia.src = `/assets/images/${media.photographerId}/${media.video}`;
        lightBoxMedia.controls = true; // Video buttons & controls
      }

      lightBoxMedia.alt = media.title;
      lightBoxMedia.className = "lightboxMedia";
      console.log(lightBoxMedia);
      console.log(lightBoxMedia.src); // Error: <empty string>

      const lightBoxClose = document.createElement("span");
      lightBoxClose.classList.add("lightbox-close");
      lightBoxClose.textContent = "x";
      lightBoxClose.addEventListener("click", () => {
        lightBox.remove();
      });

      lightBox.appendChild(lightBoxTitle);
      lightBox.appendChild(lightBoxMedia);
      lightBox.appendChild(lightBoxClose);
      document.body.appendChild(lightBox);
    });

    mediaSection.appendChild(userMediaCardDOM);
  });
}

function displayMediaCards(mediaData) {
  for (let i = 0; i < mediaData.length; i++) {
    const media = mediaData[i];
    displayMedia(media);
  }
}

const footerText = document.getElementsByClassName("footerText");
footerText.textContent = `${price} €/jour`;
