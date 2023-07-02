window.addEventListener('DOMContentLoaded', function() {
  var zoomContainer = document.querySelector('.zoom-container');
  zoomContainer.classList.add('zoom-animation');
});



var buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("mouseover", function() {
  this.querySelector("img").style.transform = "scale(1.2)";
});

buttons[i].addEventListener("mouseout", function() {
  this.querySelector("img").style.transform = "scale(1)";
});

buttons[i].addEventListener("click", function() {
  var link = this.querySelector("a").getAttribute("href");
  window.location.href = link;
});
}

const toggleButton = document.getElementsByClassName('odkazove-tlacitko')[0]
const navbarLinks = document.getElementsByClassName('navigace-link')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})