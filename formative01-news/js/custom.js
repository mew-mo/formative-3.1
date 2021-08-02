
  var myKey = JSON.parse(myKey),
    key = myKey[0].key,
    searchBtn = document.querySelector('#searchBtn'),
    newsContainer = document.querySelector('.container'),
    queryUrl = 'https://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,byline&show-elements=all&api-key=' + key;

    $.ajax({
      url: queryUrl,
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
                '<p class="card-text" style="text-align:right;  font-style: italic;">' + data.response.results[i].fields.byline + '</p>' +
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
    // ajax ENDS


  function updateDom() {

    while (newsContainer.firstChild) {
      newsContainer.removeChild(newsContainer.lastChild);
    }

    console.log(queryUrl);
    $.ajax({
      url: queryUrl,
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
                '<p class="card-text" style="text-align:right;  font-style: italic;">' + data.response.results[i].fields.byline + '</p>' +
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
    // ajax ends
  }
  // updatedom ends


  //  UP NEXT,
  //  SO LIKE we take the user's search query and put it in a variable that passes through the url link thingy dingy in the ajax. this makes it dynamic -- UPDATE IT SO IT CHANGES every time the user types soemthing and clicks enter, create new request to the server i guess??? this is logical i guess??? i think? :3

  function updateSearch() {
    var userQuery = document.querySelector('.search-bar').value,
      userCountry = document.querySelector('#country').value,
      userCategory = document.querySelector('#category').value,
      addQuery,
      addCountry,
      addCategory;

    if (!userQuery) {
      addQuery = '';
    } else {
      addQuery = '&q=' + userQuery;
    }

    if (!userCountry) {
      addCountry = '';
    } else {
      addCountry = ',' + userCountry;
    }

    if (!userCategory) {
      addCategory = '';
    } else {
      addCategory = ',' + userCategory;
    }

    queryUrl = 'https://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,byline&show-elements=all' + addQuery + addCountry + addCategory + '&api-key=' + key;

    console.log(queryUrl);
    updateDom();
  }

    searchBtn.addEventListener('click', updateSearch, false);
