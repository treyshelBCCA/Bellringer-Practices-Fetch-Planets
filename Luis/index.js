const planetSelect = document.getElementsByTagName('h1')[0];
const planet = document.getElementsByTagName('h3')[0];
const planetDiv = document.createElement('div');


var counter = 0
async function getPlanets() {
    const response = await fetch('/planets/planets.json');
    if(response.status !== 200){
        throw new Error('could not find planet');
    }
    const data = response.json();
    return data
};

planetSelect.addEventListener('click', ()=> {getPlanets()
.then((data) => {
    planetDiv.innerHTML=
    `<p>Name: ${data[counter].name}</p>
    <p>Diameter: ${data[counter].diameter}</p>
    <p>Star: ${data[counter].star}</p>
    <p>Distance: ${data[counter].distance}</p>
    <p>Moons: ${data[counter].moons}</p>
    <p><img src='${data[counter].image}' alt='image not found' width='310' height='300'></p>`
    
    
})
.catch(err => console.log('rejected:',err.message))
planet.appendChild(planetDiv)
counter += 1
if(counter >= 5){ counter = 0};
});