let planets;
let index = 0;

window.addEventListener('load', () => {
  fetch('../planets/planets.json')
    .then(response => response.json())
    .then(data => {
      planets = data;
      console.log(planets);
      const planetHeader = document.createElement('h2');
      planetHeader.classList.add('planet-header');
      planetHeader.textContent = 'Planet';
      const planetName = document.querySelector('.planet-name');
      const planetImage = document.querySelector('.planet-image');

      const pageHeader = document.querySelector('.page-header');
      pageHeader.appendChild(planetHeader);

      planetHeader.addEventListener('click', () => {
        const planet = planets[index % planets.length];
        planetName.textContent = planet.name;
        planetImage.src = planet.image;
        index++;
        resizeImage();
      });

      const planetButton = document.createElement('button');
      planetButton.classList.add('planet-button');
      planetButton.textContent = 'Next Planet';
      pageHeader.appendChild(planetButton);

      planetButton.addEventListener('click', () => {
        const planet = planets[index % planets.length];
        planetName.textContent = planet.name;
        planetImage.src = planet.image;
        index++;
        resizeImage();
      });

    })
    .catch(error => console.error(error));
});

function resizeImage() {
  const planetImage = document.querySelector('.planet-image');
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  const imageWidth = planetImage.width;
  const imageHeight = planetImage.height;

  const scaleFactor = Math.min(maxWidth / imageWidth, maxHeight / imageHeight);

  planetImage.style.maxWidth = `${scaleFactor * imageWidth}px`;
  planetImage.style.maxHeight = `${scaleFactor * imageHeight}px`;
}

// Get the window width and height
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Set the max width and height of the image
const maxWidth = windowWidth * 0.8;
const maxHeight = windowHeight * 0.8;

// Set the image source and add a limit to its size
const planetImage = document.querySelector('.planet-image');
planetImage.src = planet.image;
planetImage.onload = () => {
  // Get the natural width and height of the image
  const naturalWidth = planetImage.naturalWidth;
  const naturalHeight = planetImage.naturalHeight;

  // Calculate the aspect ratio of the image
  const aspectRatio = naturalWidth / naturalHeight;

  // Set the image width and height based on the aspect ratio and limits
  let imageWidth, imageHeight;
  if (naturalWidth > naturalHeight) {
    imageWidth = Math.min(naturalWidth, maxWidth);
    imageHeight = imageWidth / aspectRatio;
  } else {
    imageHeight = Math.min(naturalHeight, maxHeight);
    imageWidth = imageHeight * aspectRatio;
  }

  // Set the image dimensions
  planetImage.width = imageWidth;
  planetImage.height = imageHeight;
};

window.addEventListener('resize', resizeImage);
