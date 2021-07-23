// (function() {
//
//   var jsonDir = "./js/data.json";
//   var fetchBtn = document.querySelector('.btn');
//   var theData = false;
//   var container = document.querySelector('.container-fluid');
//   // var cardTitles = document.querySelectorAll('.card-title');
//   // var cardTXT = document.querySelectorAll('.card-text');
//
//   // fetch creating a promise. put the url you want in the parenthesis, or the internal directory
//   fetch(jsonDir)
//   .then(response => {
//     // response is a property of the fetch function, it works the same way as the promise resolving (succeeding)
//     return response.json();
//     // .json is part of fetch, fetches the response which is part of the directory and converts it into the json file. telling it to inspect the file
//   })
//   .then(data => {
//     // do wht you want here with the data
//     console.log(data);
//     theData = data;
//     showData();
//   })
//   .catch(error => {
//     console.log('uh ohhh error!!!');
//   })
//
//   function showData() {
//     // for (var i = 0; i < theData.length; i++) {
//     //   cardTitles[i].innerHTML = 'COOL GUY ' + theData[i].name;
//     //   cardTXT[i].innerHTML = 'name: ' + theData[i].name + '<br>' + ' age: ' + theData[i].age + '<br>' +  ' car: ' + theData[i].car + ' ';
//     // }
//
//   }
//   // funct ends
//
// }());

//  --------------------------------------------------------

var jsonDir = "./js/data.json";

fetch(jsonDir)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    $('#result').append(
      "<div class='col-3'>" +
        "<div class='card' style='width: 18rem;'>" +
          "<div class='card-body'>" +
            "<h5 class='card-title'>" + "COOL GUY " + data[i].name + "</h5>" +
            "<p class='card-text'> age: " + data[i].age + "</p>" +
            "<p class='card-text'> car: " + data[i].car + "</p>" +
        "</div>" +
      "</div>"
    );
    // $("#result").append("Name " + data[i].name + "<br>");
    // $("#result").append("Age " + data[i].age + "<br>");
    // $("#result").append("Car " + data[i].car + "<br>");
  }
  // for loop ends
})
.catch(error => {
  console.log('oh noooo error!!');
});
