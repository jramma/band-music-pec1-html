var currentIndex = 1;

function currentImage(n) {
  var i;
  var images = document.getElementsByClassName("imageClass");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[n - 1].style.display = "block";
  dots[n - 1].className += " active";
}

// Display the initial image
currentImage(currentIndex);

// Change to the next image every 3 seconds
setInterval(function () {
  currentIndex++;
  if (currentIndex > document.getElementsByClassName("imageClass").length) {
    currentIndex = 1;
  }
  currentImage(currentIndex);
}, 4000);
