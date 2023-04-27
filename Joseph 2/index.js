let currentIndex = 0
let allPlanetData = []

document.getElementsByTagName('h3')[0].onclick = () => {
    fetch("../planets/planets.json").then(function (response) {
        return response.json()
    }).then((data) => {
        allPlanetData = data
        definePlanet(data)
    })
}


function definePlanet() {
    document.getElementById('destination').innerHTML = ''
    let planetData = allPlanetData[currentIndex]

    let newPlanet = document.createElement('div')
    newPlanet.innerHTML = `
        <h1 style='font-size: 0.8em; cursor: pointer; user-select: none' onclick="moveIndex()">${planetData.name} </h1>

        <h1 style='font-size: 0.8em'> Diameter: ${planetData.diameter} </h1>
        <h1 style='font-size: 0.8em'> Star: ${planetData.star} </h1>
        <h1 style='font-size: 0.8em'> Moons: ${planetData.moons} </h1>
        <div style="width: 80px; height: 80px; background-size: cover; background-image: url('${planetData.image}')"> </div>
    `

    document.getElementById('destination').append(newPlanet)
}

function moveIndex() {
    let fullLength = allPlanetData.length - 1
    if (currentIndex == fullLength) {
        currentIndex = 0
    } else {
        currentIndex += 1
    }
    definePlanet()
}