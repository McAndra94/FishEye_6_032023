function mediaFactory(artMediaData) {
  // Retrieve data from json file (see index.js)
  const { id, photographerId, title, image } = artMediaData;

  // Photographer cards
  function getMediaCardDOM() {
    // Create DOM elements & define value
    const article = document.createElement("article");
    const anchor = document.createElement("a");
    // anchor.setAttribute("src", place bigger image + `${image}`);

    const imgElement = document.createElement("img");
    imgElement.setAttribute(
      "src",
      "assets/images/" + `${photographerId}/${image}`
    );
    imgElement.setAttribute("alt", `${title}`);
    const titleElement = document.createElement("h2");
    const likesElement = document.createElement("p");

    // Attach elements to anchor with appendChild function
    anchor.appendChild(imgElement);
    anchor.appendChild(titleElement);
    anchor.appendChild(likesElement);
    // Attach anchor to article | each article directs to lightbox
    article.appendChild(anchor);

    return article;
  }

  return { getMediaCardDOM };
}
