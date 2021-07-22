(function() {

  var allImgs = document.querySelectorAll('.img-scroll img'),
    upArrow = document.querySelector('.up-arrow'),
    downArrow = document.querySelector('.down-arrow'),
    imgNo = 3;

  upArrow.addEventListener('click', up, false);
  downArrow.addEventListener('click', down, false);

  function up() {
    allImgs[imgNo].style.opacity = '0';
    imgNo -= 1;

    if (imgNo < 0) {
      imgNo = 3;
      for (var i = 0; i < allImgs.length; i++) {
        allImgs[i].style.opacity = '1';
      }
    }
  }
  // up ends

  function down() {

    if (imgNo > 3) {
      imgNo = 0;
    }

    if (imgNo == 3) {
      imgNo = 0;
      for (var i = 0; i < allImgs.length; i++) {
        allImgs[i].style.opacity = '0';
      }
      allImgs[imgNo].style.opacity = '1';
    } else {
      allImgs[imgNo+1].style.opacity = '1';
      imgNo += 1;
    }
  }
  // down ends

}());
