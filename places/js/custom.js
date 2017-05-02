var images = document.querySelectorAll('img');

// set images to gray and hide captions
function initialize() {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.add('grayscale');
  }

  document.getElementById('back1').classList.add('hideCaption');
  document.getElementById('back2').classList.add('hideCaption');
  document.getElementById('back3').classList.add('hideCaption');
  document.getElementById('back4').classList.add('hideCaption');
  document.getElementById('back5').classList.add('hideCaption');
  document.getElementById('back6').classList.add('hideCaption');
  document.getElementById('back7').classList.add('hideCaption');
  document.getElementById('back8').classList.add('hideCaption');
}


// toggle grayscale
var color = function(index) {
  images[index].classList.toggle('grayscale');
}


// window load
window.addEventListener('load', initialize);


// caption
$('img').each(function(index, value) {
  // when image is clicked
  $(this).on('click', function() {
    // get variable name of target element
    var i = index + 1;
    var name = '#back' + i;
    $(name).slideDown('slow');  //display

    // hide
    $(name).on('click', function() {
        $(this).slideUp('slow');
    });
  });
}); 


// mouseover
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', color.bind(this, i));
}


// mouseout
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseout', color.bind(this, i));
}