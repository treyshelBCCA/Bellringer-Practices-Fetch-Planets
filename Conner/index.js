fetch("../planets/planets.json").then(function(response) {
   response.json().then(function(myData) { // Response .json() takes the info out of it for data
      const destination = document.getElementById("destination");
      let index = 0;
      destination.addEventListener("click", function(){
         destination.innerHTML = `
            <div>
               <h3>Planet: ${myData[index].name}</h3>
               <h3>Moons: ${myData[index].moons}</h3>
               <img src=${myData[index].image} height=250></img>
           </div>
        `;
                 index = (index + 1) % myData.length;
      });
   });
});