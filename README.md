## Fetching Data

_Copy and paste my "trey" folder and change the folder name to yours for when you push so I can see all of the solutions under this one repository without wiping the others' solutions. DO NOT MANIPULATE THE PLANETS FOLDER OR JSON FILE_

Your job is to use the dummy data provided in the planets `planets` directory.

- `planets/planets.json` contains an array of the users in the system.

Add the code to fetch this dummy data inside the load event listener.

- Use an event to change the planet information we see and put the DOM manipulation to inside a click handler.
- Dynamically change which planet's info we're displaying each time the header is clicked.
  - To do this, declare a counter variable, index that changes each time a click event takes place. Use the value of index as the position in the planets array to use in a template literal.
  - Since we want to cap the value of index so that it does not exceed the length of the planets array, use a modulo to control how large index can get.
- Click on the Planet header to make the name and image appear.

Run the html from your live server. You won't see much on the page yet. Open your developer tools and examine both the Console tab for the response value, as well as the Network tab for the request status.

Hints and tips:

- Use the .json() method on your response to see more of the data in the console: What data type do you see printed?
- Peek at the response returned in the request by adding a 'console.log()' inside of the function.
