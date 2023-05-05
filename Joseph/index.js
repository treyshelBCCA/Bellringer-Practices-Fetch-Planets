let currentIndex = 0

document.getElementsByTagName('h3')[0].onclick = () => { getPlanets() }

function getPlanets() {
    fetch("../planets/planets.json").then(function (response) {
        return response.json()
    }).then((data) => {
        document.getElementById('destination').innerHTML = ''

        data.forEach((planet, index) => {
            if (currentIndex == index) {
                let newPlanetElement = document.createElement('div')

                let planetTitle = document.createElement('h1')
                planetTitle.textContent = planet.name
                planetTitle.style.fontSize = '0.9em'
                planetTitle.style.cursor = 'pointer'
                planetTitle.style.userSelect = 'none'
                planetTitle.onclick = () => {
                    let fullLength = data.length - 1
                    if (currentIndex == fullLength) {
                        currentIndex = 0
                    } else {
                        currentIndex += 1
                    }
                    getPlanets()
                }
                newPlanetElement.append(planetTitle)


                let planetDiameter = document.createElement('h1')
                planetDiameter.textContent = `Diameter: ${planet.diameter}`
                planetDiameter.style.fontSize = '0.9em'
                newPlanetElement.append(planetDiameter)

                let planetStar = document.createElement('h1')
                planetStar.textContent = `Star: ${planet.star}`
                planetStar.style.fontSize = '0.9em'
                newPlanetElement.append(planetStar)

                let planetDistance = document.createElement('h1')
                planetDistance.textContent = `Distance: ${planet.distance}`
                planetDistance.style.fontSize = '0.9em'
                newPlanetElement.append(planetDistance)

                let planetMoons = document.createElement('h1')
                planetMoons.textContent = `Moons: ${planet.moons}`
                planetMoons.style.fontSize = '0.9em'
                newPlanetElement.append(planetMoons)

                let planetImage = document.createElement('div')
                planetImage.style.width = '80px'
                planetImage.style.height = '80px'
                planetImage.style.backgroundSize = 'cover'
                planetImage.style.backgroundImage = `url('${planet.image}')`
                newPlanetElement.append(planetImage)

                document.getElementById('destination').append(newPlanetElement)
            }
        })
    })
}