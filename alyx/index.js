'use strict';


// Fetch of JSON value

fetch('../planets/planets.json').
   // Res is the response and I convert it to an object that javascript can recognize
   then(res => res.json()).
      // Grab the returned array of objects and then use them to modify the page.
      then((rawInfo) => {
         // set index value to 0 for the array.
         let i = 0
         // create an event listener for the header spot using the tag of h1.
         document.querySelector('h1').addEventListener('click', function() {
            // change the inner html value of the div in the ID destination which is where we want the photo to generate.
            document.querySelector('#destination').innerHTML = `
            <div>
               <h3>Click Me: Planet ${rawInfo[i].name}<h3>
               <img src=${rawInfo[i].image} height=400></img>
            </div>`;
            // increase index value by 1.
            i += 1
            // a ternary operator that checks if the i value is greater than or equal to the length of the array. If it is over it changes i to be 0 else it stays the same value.
            i = i >= rawInfo.length ? 0 : i

         })
})