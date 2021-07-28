
  var myKey = JSON.parse(myKey),
    key = myKey[0].key;

  $.ajax({
    url: 'https://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,starRating&show-elements=all&api-key=' + key,
    type: 'GET',
    data: 'json',
    success: function(data) {
      console.log(data);
      console.log(data.response.results);
      for (var i = 0; i < data.response.results.length; i++) {
        document.querySelector('.container').innerHTML +=
        '<div class="col-4">' +
          '<div class="card">' +
            '<div class="card-body">' +
              '<img src="' + data.response.results[i].fields.thumbnail + '" style="width:100%;">' +
              '<h5 class="card-title" style="padding-top:20px;">' + data.response.results[i].fields.headline + '</h5>' +
              '<p class="card-text">' + data.response.results[i].fields.trailText + '</p>' +
              '<p class="card-text" text-align:right;"> ♥ ' + data.response.results[i].fields.starRating + '</p>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      // for loop ends here but at what cost
    },
    error: function(){
      console.log('error');
    }
  });
