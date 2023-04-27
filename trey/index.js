fetch("../planets/planets.json").then(function(response) {
   response.json().then(function(json) {
      const destination = document.getElementById("destination");
      let index = 0;
      destination.addEventListener("click", function(){
         destination.innerHTML = `
            <div>
               <h3>Planet ${json[index].name}</h3>
               <img src=${json[index].image} height=250></img>
           </div>
        `;
                 index = (index + 1) % json.length;
      });
   });
});