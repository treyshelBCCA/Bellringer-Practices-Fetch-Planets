let h1 = document.querySelector("h1");
let h3 = document.getElementsByTagName("h3")[0];
let destination = document.querySelector("#destination");

console.log(h3);
function renderPlanet(planets) {
    h3.innerText = planets.name;
    let img = `<img src="${planets.image}" alt="" style="display: none">`
    destination.insertAdjacentHTML("beforeend", img);
}


function getPlanetData(count) {
    fetch("../planets/planets.json")
    .then(function(response) {
        if(!response.ok) {
            throw new Error("Somethings wrong, first fetch!")
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        renderPlanet(data[count]);
    })
}

h3.addEventListener('click', () => {
    let img = document.getElementsByTagName('img')[0];
    if(img) {
        img.style.display = (img.style.display == "none" ? "block": "none");
    }
})
let counter = 0;
h1.addEventListener("click", () => {
    let img = document.getElementsByTagName('img')[0];
    if(img) {
        destination.removeChild(img);
    }
    getPlanetData(counter);
    counter += 1;
    if(!(counter % 6)) {
        counter = 0;
    }
    

});