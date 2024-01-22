var jumpSound = new Audio('sound-effect.mp3');

// HTML-element met het id-attribuut "dino,rock,score" 
const dino = document.getElementById("dino2");
const rock = document.getElementById("rock2");
const score = document.getElementById("score2");

// Functie voor de spronganimatie van de dinosaurus
function jump() {
  dino.classList.add("jump-animation2");
  setTimeout(() =>
    dino.classList.remove("jump-animation2"), 500);
    audio.play()
    
    
  }


// Luister naar het toetsenbord 'keypress'-evenement

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation2')) {
    jump();
    ;


  }
})


  // Haal de huidige bovenste positie van de dinosaurus op

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino2)
    .getPropertyValue('top'));

  // Haal de huidige linkse positie van de rots op
  const rockLeft = parseInt(window.getComputedStyle(rock2)
    .getPropertyValue('left'));

  // Verhoog de score met één
  score.innerText++;

  // Controleer of de rots buiten het scherm is
  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  // Controleer of de rots de dinosaurus raakt
  if (rockLeft < 30 && rockLeft > 0 && dinoTop > 220) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");

 // Herlaad de pagina
    location.reload();
  }
}, 50);





