(function() {

  // console.log('im baby');
  //
  // var student = [
  //   {
  //     id: 325,
  //     name: 'vi'
  //   },
  //   {
  //     id: 811,
  //     name: 'chlo'
  //   }
  // ];
  //
  // for (var i = 0; i < student.length; i++) {
  //   console.log(student[i].id, student[i].name);
  // }
  //
  // console.log(student[0].name + ' loves ' + student[1].name);

  // converting to JSON -----------------------------------------------------------------------
  // var student = [
  //   {
  //     "id": 325,
  //     "name": "vi"
  //   },
  //   {
  //     "id": 117,
  //     "name": "tris"
  //   },
  //   {
  //     "id": 728,
  //     "name": "chlo"
  //   }
  // ]

  // for (var i = 0; i < student.length; i++) {
  //
  //   // having += will make sure it doesnt do that stuuupid override thing that was mega annoying!!
  //   document.querySelector('.container').innerHTML +=
  //   "<div class='col col-lg-6 col-xl-6'>" +
  //     "<div class='card' style='width: 18rem;'>" +
  //       "<div class='card-body'>" +
  //         "<h5 class='card-title'>" + student[i].name + "</h5>" +
  //         "<p class='card-text'>Student No. " + student[i].id + "</p>" +
  //       "</div>" +
  //     "</div>" +
  //   "</div>";
  //
  //   console.log(student[i].id, student[i].name);
  // }

  // using MOCK DATA -----------------------------------------------------------------------

  // var data = JSON.parse(myData);
  // console.log(data);
  //
  // for (var i = 0; i < student.length; i++) {
  //   document.querySelector('.container').innerHTML +=
  //   "<div class='col col-lg-6 col-xl-6'>" +
  //     "<div class='card' style='width: 18rem;'>" +
  //       "<div class='card-body'>" +
  //         "<h5 class='card-title'>" + student[i].name + "</h5>" +
  //         "<p class='card-text'>Student No. " + student[i].id + "</p>" +
  //       "</div>" +
  //     "</div>" +
  //   "</div>";
  //
  //   console.log(student[i].id, student[i].name);
  // }

  // jquery ajax http request -----------------------------------------------------------------------
  // similar to fetch, but it is an older way of doing things. xmlhttprequest does not support CORS.

  // url is the api link
  // get or create or delete. we are GETTING the data
  // if it is successfully retrieved it will be logged
  // this is like then and catch, kind of. lol

  // var dataPls = false;

  $.ajax({
    url: 'https://my.api.mockaroo.com/cardetails.json?key=fd444c00',
    type: 'GET',
    data: 'json',
    success: function(data){
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.querySelector('.container').innerHTML +=
        "<div class='col-4'>" +
        // col-sm-12 col-md-3 col-lg-6 col-xl-6
          "<div class='card' style='width: 18rem;'>" +
            "<div class='card-body'>" +
              "<h5 class='card-title'> No. " + data[i].id + ' - ' + data[i].carModel + "</h5>" +
              "<p class='card-text'>Make: " + data[i].carMake + "</p>" +
              "<p class='card-text'>Year: " + data[i].carYear + "</p>" +
            "</div>" +
          "</div>" +
        "</div>";
      }
      // return data;
    },
    error: function(){
      console.log('error');
    }
  });



}());
