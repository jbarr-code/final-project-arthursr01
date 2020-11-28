var startBtn = document.getElementById("startButton");

class Player{
  constructor(pos1, pos2, bikeColorChoice) {
      this.bikeColorChoice = color || '#fff';
      this.pos1 = pos1;
      this.pos2 = pos2;
      this.dead = false;
      this.direction = '';
      this.key = "";


      this.constructor.counter = (this.constructor.counter || 0) + 1;
      this.playerId = this.constructor.counter;

      Player.allInstances.push(this);
  };
};

Player.allInstances = [];
//should get the properties of the choosen bike
let p1 = new Player();
let p2 = new Player();
let p3 = new Player();
let p4 = new Player();

function openMenu() {
  var pickBike = document.getElementById("Menu");
  if (pickBike.style.display === "none") {
    pickBike.style.display = "block";
    startBtn.style.visibility = "hidden";
    window.addEventListener("DOMContentLoaded", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.2;
      audio.play();
    });
  } else {
    pickBike.style.display = "none"
  }

  let p1 = new Player(unit * 10, unit * 6, "#75A4FF");
}

function myFunction() {
    var c = document.getElementById("tronCanvas");
    
  }



  function launchGame(){
      var blueBike = document.getElementById("blue");


    
  }
  function setKey(key, player, up, right, down, left) {
    switch (key) {
      case up:
        if (player.direction !== "DOWN") {
          player.key = "UP";
        }
        break;
      case right:
        if (player.direction !== "LEFT") {
          player.key = "RIGHT";
        }
        break;
      case down:
        if (player.direction !== "UP") {
          player.key = "DOWN";
        }
        break;
      case left:
        if (player.direction !== "RIGHT") {
          player.key = "LEFT";
        }
        break;
      default:
        break;
    }
  }

  function handleKeyPress(event) {
    let key = event.keyCode;
  
    if (key === 37 || key === 38 || key === 39 || key === 40) {
      event.preventDefault();
    }
  
    setKey(key, p1, 38, 39, 40, 37);
    setKey(key, p2, 87, 68, 83, 65); 
  }

document.addEventListener('keydown', handleKeyPress);

