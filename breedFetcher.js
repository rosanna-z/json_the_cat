const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  // if we receive an error
  if (error) {
    console.log(error);
    return;
  }

  // to convert the JSON string into an actual object
  const data = JSON.parse(body);

  /* console.log(typeof data);
  data is now an object, more specifically an array
  */

  // if no cats are found, nothing in the array!
  if (data.length === 0) {
    console.log('cat not found!');
    return;
  }

  console.log(data[0].description);

});

