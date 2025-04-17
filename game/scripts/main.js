import { GameLoop } from './gameLoop.js';
import { gridCells } from './helpers/grid.js';
import { DOWN, Input } from './input.js';
import { resources } from './resource.js'
import { Sprite } from './sprite.js';
import { Vector2 } from './vector2.js';
import { GameObject } from './gameobject.js';
import { Player } from './objects/player/player.js';

// grab canvas 
const gameCanvas = document.querySelector("#game-canvas");
const gameContext = gameCanvas.getContext("2d");

// make a main scene instance
const mainScene = new GameObject({
    position: new Vector2(0,0),
});

// Draw the ground and add it to the main scene
const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320, 180)
})
mainScene.addChild(groundSprite);


// Draw the player and add it to the main scene
const player = new Player(gridCells(6),gridCells(5))
mainScene.addChild(player);


// add input to the scene
mainScene.input = new Input();



// Make an update loop and draw loop
const update = (delta) => 
{
    mainScene.stepEntry(delta, mainScene)

    // check in front of the play when pressing interact key
    if(mainScene.input.interactKey)
    {
        player.checkInFront();
    }

    // what is in front of the player
}

const draw = () => 
    {
        mainScene.draw(gameContext, 0, 0);
    }

// START GAME!!!
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
