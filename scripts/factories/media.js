let totalLikes = 0;
let likesFooter = document.querySelector(".likesFooter");

function mediaFactory(artMediaData) {
  // Retrieve data
  const { photographerId, title, image, video, likes } = artMediaData;

  // Media cards
  function getMediaCardDOM() {
    // Create DOM elements & define value
    const article = document.createElement("article");
    article.className = "mediaBox";

    const anchor = document.createElement("a");
    anchor.alt = `Media's title: ${title}`;

    let mediaElement;
    if (image) {
      mediaElement = document.createElement("img");
      mediaElement.src = `assets/medias/${photographerId}/${image}`;
      mediaElement.alt = `Media's title: ${title}`;
      mediaElement.className = "mediaElement";
    } else if (video) {
      mediaElement = document.createElement("video");
      mediaElement.src = `assets/medias/${photographerId}/${video}`;
      mediaElement.alt = `Media's title: ${title}`;
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
    likeHeart.src = "/assets/medias/likeHeart.png";
    likeHeart.alt = "likes";
    likeHeart.className = "likeHeart";
    let liked = false; // Liked is initially set to false

    likeHeart.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents propagation of the parent element
      if (!liked) {
        // Like +1 if clicked
        artMediaData.likes++;
        totalLikes++;
        liked = true;
      } else {
        // Like -1 if clicked again
        artMediaData.likes--;
        totalLikes--;
        liked = false;
      }
      mediaLikes.textContent = artMediaData.likes;
      likesFooter.textContent = totalLikes;
    });

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

  // Addition assignment : Add the 2 values and assign the result to totalLikes
  totalLikes += likes;
  // Fixed footer section next to Heart icon
  likesFooter.textContent = totalLikes;

  return { getMediaCardDOM };
}

// Sort By Popularity (likes) | method for numbers
const sortLikesElement = document.querySelector(".sortLikes");
sortLikesElement.addEventListener("click", function () {
  sortByPopularity(mediaArray);
});
function sortByPopularity(popularity) {
  totalLikes = 0; // reset to 0 to avoid doubles
  const sortedMediaPopu = popularity.sort((a, b) => b.likes - a.likes);
  mediaSection.innerHTML = "";
  displayMedia(sortedMediaPopu);
}

// Sort By Date | new to old
const sortDateElement = document.querySelector(".sortDate");
sortDateElement.addEventListener("click", function () {
  sortByDate(mediaArray);
});
function sortByDate(date) {
  totalLikes = 0;
  const sortedMediaDate = date.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  mediaSection.innerHTML = "";
  displayMedia(sortedMediaDate);
}

// Sort By Title (A to Z) | method for string to sort alphabetically
const sortTitleElement = document.querySelector(".sortTitle");
sortTitleElement.addEventListener("click", function () {
  sortByTitle(mediaArray);
});
function sortByTitle(title) {
  totalLikes = 0;
  const sortedMediaTitle = title.sort((a, b) => a.title.localeCompare(b.title));
  mediaSection.innerHTML = "";
  displayMedia(sortedMediaTitle);
}
