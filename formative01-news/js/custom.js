
  var myKey = JSON.parse(myKey),
    key = myKey[0].key,
    searchBtn = document.querySelector('#searchBtn'),
    newsContainer = document.querySelector('.container'),
    aboutContainer = document.querySelector('.abt-section'),
    abtLink = document.querySelector('.abt-link'),
    countrySelect = document.querySelector('#country'),
    categorySelect = document.querySelector('#category'),
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
          '<div class="col-lg-4 col-md-6 col-sm-12">' +
            '<div class="card">' +
              '<div class="card-body">' +
                '<img src="' + data.response.results[i].fields.thumbnail + '" style="width:100%;">' +
                '<h5 class="card-title" style="padding-top:20px;">' + data.response.results[i].fields.headline + '</h5>' +
                '<p class="card-text">' + data.response.results[i].fields.trailText + '</p>' +
                '<p class="card-text bg" style="text-align:right;  font-style: italic;">' + data.response.results[i].fields.byline + '</p>' +
                '<a href="' + data.response.results[i].webUrl+ '" class="stretched-link" target="_blank"></a>' +
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
          '<div class="col-lg-4 col-md-6 col-sm-12">' +
            '<div class="card">' +
              '<div class="card-body">' +
                '<img src="' + data.response.results[i].fields.thumbnail + '" style="width:100%;">' +
                '<h5 class="card-title" style="padding-top:20px;">' + data.response.results[i].fields.headline + '</h5>' +
                '<p class="card-text">' + data.response.results[i].fields.trailText + '</p>' +
                '<p class="card-text bg" style="text-align:right;  font-style: italic;">' + data.response.results[i].fields.byline + '</p>' +
                '<a href="' + data.response.results[i].webUrl+ '" class="stretched-link" target="_blank"></a>' +
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
    // ajax ends
  }
  // updatedom ends

  function updateSearch() {
    var userQuery = document.querySelector('.search-bar').value,
      userCountry = document.querySelector('#country').value,
      userCategory = document.querySelector('#category').value,
      addQuery,
      addCountry,
      addCategory;

    while (aboutContainer.firstChild) {
      aboutContainer.removeChild(aboutContainer.lastChild);
    }

    if (!userQuery) {
      addQuery = '';
    } else {
      addQuery = userQuery;
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

    queryUrl = 'https://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,byline&show-elements=all&q=' + addQuery + addCountry + addCategory + '&api-key=' + key;

    console.log(queryUrl);
    updateDom();
  }

    searchBtn.addEventListener('click', updateSearch, false);
    countrySelect.addEventListener('change', updateSearch, false);
    categorySelect.addEventListener('change', updateSearch, false);

    abtLink.addEventListener('click', () => {
      while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.lastChild);
      }

      aboutContainer.innerHTML += '<div class="about-me row d-flex justify-content-center">' +
        '<div class="card">' +
          '<div class="card-body">' +
            '<div class="row">' +
              '<div class="col-lg-5 col-sm-12">' +
                '<img src="img/ninja.jpg" class="about-img" alt="the dev">' +
              '</div>' +
              '<div class="col-lg-7 col-sm-12">' +
                '<h3 class="card-title">About Me</h3>' +
                '<p class="card-text">Hi, I\'m Mo, the dev behind this little project. I\'m a Web UX Student at Yoobee Colleges in Wellington, raised in the mountains of New Zealand\'s South Island. I like learning, cats and rainy days viewed from indoors. This project was a formative for module 3 of my course that involved getting requests from a News API- The Guardian, for this project in particular. It filters the most relevant results based on your search terms and/or filters. Due to the nature of the free API, results won\'t always be extremely relevant depending on your search and combination of filters, however it does its best to pick out the closest stories!</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    }, false);
