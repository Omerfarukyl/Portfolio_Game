var jumpSound = new Audio('sound-effect.mp3');


const dino = document.getElementById("dino3");
const rock = document.getElementById("rock3");
const score = document.getElementById("score3");

function jump() {
  dino.classList.add("jump-animation3");
  setTimeout(() =>
    dino.classList.remove("jump-animation3"), 500);
    audio.play()

}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation3')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino3)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock3)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 80 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
