// Tab function

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function that makes pictures slide (manually)
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  } 

  if (n < 1) {
    slideIndex = slides.length
    }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// Function that makes pictures slide (automatically)

function click() {
    plusSlides(1);
}
setInterval(click, 5000);




// Carousel function : first try

/*
function nextImage(n) {
    var numimages;
    numimages = document.getElementsByClassName("image");
    console.log(numimages.length);

    for (i = 0; i < numimages.length; i++)
        if (numimages[i] = document.getElementById("displayed")) {
            numimages[i].style = "display:none";
            numimages[i].id = "";
            console.log(numimages[i]);


            numimages[i+n*1].style = "";            
            numimages[i+n*1].id = "displayed";
            console.log(numimages[i+1]);
            break
        }
}
*/

