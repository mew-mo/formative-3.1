(function() {

  var jsonDir = "./js/data.json";

  // fetch creating a promise. put the url you want in the parenthesis, or the internal directory
  fetch(jsonDir)
  .then(response => {
    // response is a property of the fetch function, it works the same way as the promise resolving (succeeding)
    return response.json();
    // .json is part of fetch, fetches the response which is part of the directory and converts it into the json file. telling it to inspect the file
  })
  .then(data => {
    // do wht you want here with the data
    console.log(data);
  })
  .catch(error => {
    console.log('uh ohhh error!!!');
  })


}());
