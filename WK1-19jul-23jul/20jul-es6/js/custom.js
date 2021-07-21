(function() {

// normie regular function w argument(es5)
function hey(name) {
  console.log('hey wassup ' + name);
}
hey('egg');

// arrow function w argument (es6)
var heyo = (name) => {
  console.log('hey in es6 ' + name);
}
heyo('cool guy');

// ----------------------------------------------------
// JQUERY VER ARROW FUNC

// use jquery to grab the name from the input
// $('.btn').click(function() {
//   var enteredName = $('#nameInput').val();
//     if (enteredName) {
//       console.log('hi there ' + enteredName + '!');
//     } else {
//       console.log('please type in a username.');
//     }
// });


// ----------------------------------------------------
// VANILLA VER ARROW FUNC

var submitBtn = document.querySelector('.btn'),
  user = document.querySelector('#nameInput');

submitBtn.addEventListener('click', () => {
  var userName = user.value;
  if (userName) {
    console.log('hi there ' + userName + '!');
  } else {
    console.log('please type in a username.');
  }
}, false);


// ----------------------------------------------------
// PROMISE

// this is a basic promise

// ipu is i promise u. its a song. var name could be myPromise instead but i didnt want to
// cant use arrow functs to declare promises
var ipu = new Promise(function(resolve, reject) {
  resolve('the promise was successful!');
});

ipu.then((data) =>
  // parses the data returned via resolve
  console.log(data)
  // the log will literally return the resolve message
);

// ----------------------------------------------------
// BASIC PROMISE USING CATCH
// catch is when it doesn't work . the reject rather than resolve

var ipu2 = new Promise(function(resolve, reject) {
  var x = 2;
  if (x > 1) {
    resolve('the promise was successful! x is ' + x);
  } else {
    reject('Error: var x is equal to ' + x);
  }
});

ipu2.then((data) => console.log(data))
.then((data) => console.log('running another then'))
.then((data) => console.log('omg its another then'))
.catch((data) => console.log(data));
// this is actually one line, so the semicolon has to be on the last one and no other ones

// ----------------------------------------------------
// MY PROMISE TIME... calculator

var numOne = document.querySelector('#numInputOne'),
  numTwo = document.querySelector('#numInputTwo'),
  calcBtn = document.querySelector('#calculate');

  calcBtn.addEventListener('click', () => {
    var numPromise = new Promise(function(resolve, reject) {
      var one = numOne.value,
        two = numTwo.value,
        finalCalc = one/two;

      if (!one || !two) {
        reject('please enter numbers.');
      } else if (two == 0) {
        reject('you cannot divide by 0');
      }

      resolve(one + ' divided by ' + two + ' equals ' + finalCalc);
    });

    numPromise.then((data) => console.log(data))
    .catch((data) => console.log(data));

  }, false);


}());
// iife ENDS
