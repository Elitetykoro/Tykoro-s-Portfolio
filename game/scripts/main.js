import { GameLoop } from "./gameLoop.js";
import { gridCells } from "./helpers/grid.js";
import { Input } from "./input.js";
import { resources } from "./resource.js";
import { Sprite } from "./sprite.js";
import { Vector2 } from "./vector2.js";
import { GameObject } from "./gameobject.js";
import { Player } from "./objects/player/player.js";

// grab canvas
const gameCanvas = document.querySelector("#game-canvas");
const gameContext = gameCanvas.getContext("2d");

// Muziek dingen
const audio1 = document.getElementById("1Music");
const audio2 = document.getElementById("2Music");
const audio3 = document.getElementById("3Music");
const audio4 = document.getElementById("4Music");
const audio5 = document.getElementById("5Music");
const audio6 = document.getElementById("6Music");
const audio7 = document.getElementById("7Music");
// audio1.play();

audio1.addEventListener('ended', () => {
  audio2.play();
})
audio2.addEventListener('ended', () => {
  audio3.play();
})
audio3.addEventListener('ended', () => {
  audio4.play();
})
audio5.addEventListener('ended', () => {
  audio6.play();
})
audio6.addEventListener('ended', () => {
  audio7.play();
})
audio7.addEventListener('ended', () => {
  audio1.play();
})
// ik wil het hier niet over hebben

// make a main scene instance
const mainScene = new GameObject({
  position: new Vector2(0, 0),
});

// Draw the ground and add it to the main scene
const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});
mainScene.addChild(groundSprite);

// Draw the player and add it to the main scene
const player = new Player(gridCells(6), gridCells(5));
mainScene.addChild(player);

// add input to the scene
mainScene.input = new Input();

const aboutmePage = new Sprite({
    resource: resources.images.aboutme,
    frameSize: new Vector2(150, 150),
  });

const contactPage = new Sprite({
  resource: resources.images.contact,
  frameSize: new Vector2(150,150),
})

// Make an update loop and draw loop
const update = (delta) => {
  mainScene.stepEntry(delta, mainScene);

  // check in front of the play when pressing interact key
  if (mainScene.input.interactKey) {
    if (player.interactingWith[0]) {
      whenInteract(aboutmePage);
      console.log("Computer ");
    }
    if (player.interactingWith[1]) {
      whenInteract(contactPage);
      console.log("ThrashCan ");
    }
    if (player.interactingWith[2]) {
      whenInteract(aboutmePage);
      console.log("Arcade ");
    }
    if (player.interactingWith[3]) {
      whenInteract(aboutmePage);
      console.log("P1 ");
    }
    if (player.interactingWith[4]) {
      whenInteract(aboutmePage);
      console.log("P2 ");
    }
    if (player.interactingWith[5]) {
      whenInteract(aboutmePage);
      console.log("P3 ");
    }
  }
  if (mainScene.input.exitKey){
    exitInteract();
    console.log("Exit ");
  }
};

function whenInteract(object){
  player.canMove = false;
  mainScene.addChild(object)
}

function exitInteract(){
  player.canMove = true;
  mainScene.removeChild(aboutmePage);
  mainScene.removeChild(contactPage);
}

const draw = () => {
  mainScene.draw(gameContext, 0, 0);
};

// START GAME!!!
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
