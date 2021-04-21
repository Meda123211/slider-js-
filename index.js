var slider = document.getElementById("box");
//contain image in array
var image = ["two", "four", "five", "download"];
var i = image.length;
//function for next slide

function nextImage() {
  if (i < image.length) {
    console.log("yes");
    i += 1;
  } else {
    i = 1;
    console.log("no");
  }
  slider.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
nextImage();

function prevImage() {
  if (i < image.length + 1 && i > 1) {
    i -= 1;
  } else {
    i = image.length;
  }
  slider.innerHTML = "<img src=" + image[i - 1] + ".jpg>";
}
nextImage();
