//Call async function
getPlanets().catch(function (error) {
    console.error('Something went wrong.');
    console.error(error);
});

//create function that gets data
async function getPlanets() {
    const data =  (await fetch("../planets/planets.json"));
    const obj = await data.json();
    //grab h1 and h3
    const header = document.querySelector("h1");
    const planet = document.querySelector("h3");

    //create event listener for clickable header
    header.addEventListener("click", clickEvent);
    //declare preset variables so they show correctly on screen (counter, current planet name, create image and set it with current planet)
    let i = 0;
    planet.textContent = "Planet " + obj[i].name;
    let img = document.createElement("img");
    img.style.width = "400px"

    img.src = obj[i].image;
    document.body.appendChild(img)
    //click event that changes planet and photo based on index number
    function clickEvent(){
        if (i <= obj.length) {i++;
            planet.textContent = "Planet " + obj[i].name;
            img.src = obj[i].image;
            
        }};
};








