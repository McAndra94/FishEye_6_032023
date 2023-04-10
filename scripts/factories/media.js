function mediaFactory(artMediaData) {
  // Retrieve data
  const { photographerId, title, image, video, likes } = artMediaData;

  // Media cards
  function getMediaCardDOM() {
    // Create DOM elements & define value
    const article = document.createElement("article");
    article.className = "mediaBox";

    const anchor = document.createElement("a");
    anchor.href = "javascript:openLightbox()"; // Lightbox goes here
    anchor.alt = title;

    let mediaElement;
    if (image) {
      mediaElement = document.createElement("img");
      mediaElement.src = `assets/images/${photographerId}/${image}`;
      mediaElement.alt = title;
      mediaElement.className = "mediaElement";
    } else if (video) {
      mediaElement = document.createElement("video");
      mediaElement.src = `assets/images/${photographerId}/${video}`;
      mediaElement.alt = title;
      mediaElement.controls = true; // Video buttons & controls
      mediaElement.className = "mediaElement";
    } else {
      return null;
    }

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const mediaSubBox = document.createElement("div");
    const likeBox = document.createElement("div");

    const mediaLikes = document.createElement("p");
    mediaLikes.textContent = likes;
    mediaLikes.className = "mediaLikes";
    const likeHeart = document.createElement("img");
    likeHeart.src = "assets/images/likeHeart.png";
    likeHeart.alt = "likes";
    likeHeart.className = "likeHeart";

    // Attach elements to anchor with appendChild function
    anchor.appendChild(mediaElement);
    anchor.appendChild(mediaSubBox);

    // Attach Title & Rest to upper container
    mediaSubBox.appendChild(titleElement);
    mediaSubBox.appendChild(likeBox);

    // Attach Likes & Heart to div container
    likeBox.appendChild(mediaLikes);
    likeBox.appendChild(likeHeart);

    // Attach anchor to article | each article directs to lightbox
    article.appendChild(anchor);

    return article;
  }

  return { getMediaCardDOM };
}
