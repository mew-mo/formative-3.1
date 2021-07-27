// (function() {


  var myKey = JSON.parse(myKey);
  console.log(myKey[0].key);
  var key = myKey[0].key;

  $.ajax({
    // url: 'https://api.unsplash.com/photos?page=1&client_id='+key,
    // url: 'https://api.unsplash.com/photos/random?count=10&page=1&client_id='+key,
    url: 'https://api.unsplash.com/users/harleydavidson/?client_id='+key,
    type: 'GET',
    data: 'json',
    success: function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.querySelector('.container').innerHTML +=
        '<div class="col-4">' +
          '<div class="card" style="width: 18rem; border: 10px solid ' + data[i].color + ';">' +
            '<div class="card-body">' +
              '<img src="' + data[i].urls.small + '" alt="" style="width:100%;">' +
              '<h5 class="card-title" style="padding-top:20px;border-bottom: 5px '+ data[i].color + ' solid; padding-bottom:15px;"> By ' + data[i].user.first_name + ' ' + data[i].user.last_name + ' @' + data[i].user.username + '</h5>' +
              '<p class="card-text">' + data[i].alt_description + '</p>' +
              '<p class="card-text" style="color:'+ data[i].color + '; text-align:right;"> ♥ ' + data[i].likes + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      // for loop ends
    },
    error: function(){
      console.log('error');
    }
  });

// }());
