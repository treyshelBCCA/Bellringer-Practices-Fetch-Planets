// INSERT DATA ONTO HTML
const planetContainer = document.getElementById('destination');
const planetHeader = document.querySelector('h3');
function renderPlanet(planet) {
    planetHeader.innerText = planet.name;
    let img = `<img src="${planet.image}" alt="" style="width: 200px; height: auto;">`;
    planetContainer.insertAdjacentHTML("beforeend", img);
};

// FETCH DATA (CALLBACK TO renderPlanet)
function fetchPlanet(counter) {
    fetch("../planets/planets.json")
    .then(function (response) {
      return response.json();
    })
    .then(planets => {
        renderPlanet(planets[counter]);
    })
};

// BUTTON FUNCTIONS (CALLBACK TO fetchPlanet)
let counter = 0;
const header = document.querySelector("h1");
header.addEventListener("click", () => {
    // discards previous image before continuing
    let img = document.getElementsByTagName('img')[0];
    if(img) {
        destination.removeChild(img);
    }

    // main button functionality
    counter ++;

    if(!(counter % 6)) {counter = 0;};

    fetchPlanet(counter);
});