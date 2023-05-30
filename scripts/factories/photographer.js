function photographerFactory(data) {
  // Retrieve data from json file (see index.js)
  const { name, id, city, country, tagline, price, portrait } = data;

  // Photographer cards
  function getUserCardDOM() {
    // Create DOM elements & define value
    const article = document.createElement("article");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "./photographer.html?id=" + `${id}`);
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", "assets/photographers/" + `${portrait}`);
    imageElement.setAttribute("alt", `${name}'s picture`);
    const nameElement = document.createElement("h2");
    nameElement.textContent = name;
    const locationElement = document.createElement("h3");
    locationElement.textContent = city + ", " + country;
    const taglineElement = document.createElement("h4");
    taglineElement.textContent = tagline;
    const priceElement = document.createElement("p");
    priceElement.textContent = `${price} €/jour`;

    // Attach elements to anchor with appendChild function
    anchor.appendChild(imageElement);
    anchor.appendChild(nameElement);
    anchor.appendChild(locationElement);
    anchor.appendChild(taglineElement);
    anchor.appendChild(priceElement);
    // Attach anchor to article | each article directs to link
    article.appendChild(anchor);

    return article;
  }

  return { getUserCardDOM };
}
