function mediaFactory(artMediaData) {
  // Retrieve data
  const { photographerId, title, image, video, likes, price } = artMediaData;

  // Media cards
  function getMediaCardDOM() {
    // Create DOM elements & define value
    const article = document.createElement("article");
    article.className = "mediaBox";

    const anchor = document.createElement("a");
    // if image ? do this : do this if not
    /* 
    const mediaUrl = image
      ? `assets/images/${photographerId}/${image}`
      : `assets/images/${photographerId}/${video}`;
    anchor.href = `javascript:openLightbox('${mediaUrl}')`; 
    */
    //anchor.href = "#";
    anchor.addEventListener("click", (event) => {
      event.preventDefault(); // Prevents return to top page (default function)
      openLightbox();
    });
    anchor.alt = title;
    console.log(title);

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
    likeBox.className = "likeBox";

    const mediaLikes = document.createElement("p");
    mediaLikes.textContent = likes;
    mediaLikes.className = "mediaLikes";

    const likeHeart = document.createElement("img");
    likeHeart.src = "assets/images/likeHeart.png";
    likeHeart.alt = "likes";
    likeHeart.className = "likeHeart";
    // Like +1 fonction when clicked
    likeHeart.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents propagation of the parent element
      artMediaData.likes++;
      mediaLikes.textContent = artMediaData.likes;
    });

    // Footer section | Price
    const footer = document.createElement("div");
    footer.className = "footer";
    footer.textContent = "297 081";

    const heartIcon = document.createElement("i");
    heartIcon.className = "fa-solid fa-heart";

    const priceElement = document.createElement("p");
    priceElement.textContent = price + "€ / jour"; // price not correct, recheck

    footer.appendChild(heartIcon);
    footer.appendChild(priceElement);
    document.body.appendChild(footer);

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
