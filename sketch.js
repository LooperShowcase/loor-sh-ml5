let player;
let bgImg;
let playerImg;
let obsImg;
let loser;
let obstacles = [];
let worldClassifier;

function preload() {
  bgImg = loadImage("b.g.loor-shaheen.jpg");
  playerImg = loadImage("player.loor-shaheen.png");
  obsImg = loadImage("ob.loor-shaheen.png");
  loser = loadImage("loser.loor-shaheen.jpg");

  let options = {
    probabilityThreshold: 0.85,
  };
  worldClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 400);
  player = new Player();
  worldClassifier.classify(heardword);
}
function heardword(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label == "up") player.jump();
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(loser, 300, 100, 200, 100);
      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " " || key === "8") {
    player.jump();
  }
}
