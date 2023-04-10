async function displayMedia(mediaData) {
  const mediaSection = document.querySelector(".photographerMedia");

  mediaData.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const userMediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(userMediaCardDOM);
  });
}

async function displayMediaCards(mediaData) {
  for (let i = 0; i < mediaData.length; i++) {
    const media = mediaData[i];
    displayMediaCards(media);
  }
}
