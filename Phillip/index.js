const planetsArray = []
var index = 0
const info = document.getElementById('destination')
const header = document.querySelector('h1')

window.addEventListener('load', fetchData)

function fetchData() {
fetch("../planets/planets.json").then((response) => response.json())
    .then(function(data) {
        for (let i of data)
            planetsArray.push(i);
        console.log(planetsArray.length === 6)
    })
    
}

header.addEventListener('click', changeInfo)

var imageTag = document.createElement('img')
    
    info.insertAdjacentElement("afterend",imageTag)

async function changeInfo() {
    info.textContent = ''
    for (let x of planetsArray[index].name) {
        
        await new Promise(resolve => setTimeout(() => {
            info.textContent += x
            resolve()
        }, 100))
    
    }
    
    imageTag.src = planetsArray[index].image
    imageTag.style.width = '40em'
    
    index = (index + 1) % planetsArray.length
}