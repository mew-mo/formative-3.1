
var jsonDir = "./js/MOCK_DATA.json";

fetch(jsonDir)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {

    $('#result').append(
      "<div class='col-md-2 the-guys'>" +
          "<img src=" + data[i].avatar + ">" +
            // "<h5 class='card-title'>" + data[i].first_name + ' ' + data[i].last_name + "</h5>" +
        "</div>" +
      "</div>"
    );

    $('.modals').append(
      "<div class='modal' tabindex='-1' role='dialog'>" +
      "<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
          "<div class='modal-header'>" +
            "<h5 class='modal-title'>Modal title</h5>" +
            "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
              "<span aria-hidden='true'>&times;</span>" +
            "</button>" +
          "</div>" +
          "<div class='modal-body'>" +
            "<p>Modal body text goes here.</p>" +
          "</div>" +
          "<div class='modal-footer'>" +
            "<button type='button' class='btn btn-primary'>Save changes</button>" +
            "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>"
    )


    }
  // for loop ends

      // "<h5 class='modal-title'>" + data[i].first_name + " " + data[i].last_name + "</h5>" +
})
.catch(error => {
  console.log('oh noooo error!!');
});
