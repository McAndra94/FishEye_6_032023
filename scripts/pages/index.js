async function getPhotographers() {
  //debugger;
  // Locate et retrieve json data file
  const response = await fetch("data/photographers.json");
  const data = await response.json();

  return data.photographers;
}
// Display data in section attached to stated class
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
