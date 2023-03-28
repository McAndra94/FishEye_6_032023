// Locate & Retrieve Media data
fetch("/data/photographers.json")
  .then((response) => response.json())
  .then((mediaData) => {
    const media = mediaData.media;
    console.log(media);

    // media.find((p) => p.id === media.photographerId);

    media.forEach((item) => {
      const imgElement = document.createElement("img");
      imgElement.src = `assets/images/${photographeId}/${media.image}`;
      document.body.appendChild(imgElement);
    });
  });

async function displayData(media) {
  const photographerMedia = document.querySelector(".photographerMedia");
  console.log(photographerMedia);
  //
}

function displayMedia(mediaData) {
  mediaData.forEach((media) => {
    if (media.photographerId == photographeId) {
      document.querySelector(
        ".mediaImg"
      ).src = `assets/images/${photographeId}/${media.image}`;
      document.querySelector(".mediaImg").alt = `${media.title}`;

      document.getElementById("mediaTitle").textContent = media.title;
      document.getElementById("mediaLikes").textContent = media.likes;

      document.getElementById("likeHeart").src = "assets/images/likeHeart.png";
      document.getElementById("likeHeart").alt = "likes";
    }
    //
    console.log(media); // Id media
    displayMedia(mediaData);
  });
}
