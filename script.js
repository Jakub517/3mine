window.addEventListener('DOMContentLoaded', function() {
    var zoomContainer = document.querySelector('.zoom-container');
    zoomContainer.classList.add('zoom-animation');
  });

  
  
  // Získání všech tlačítek
var buttons = document.getElementsByClassName("button");

// Přidání události mouseover a mouseout na každé tlačítko
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

