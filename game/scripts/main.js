import { GameLoop } from './gameLoop.js';
import { gridCells, isSpaceFree } from './helpers/grid.js';
import { moveTowards } from './helpers/moveTowards.js';
import { DOWN, UP, LEFT, RIGHT, Input } from './input.js';
import { resources } from './resource.js'
import { Sprite } from './sprite.js';
import { Vector2 } from './vector2.js';
import { walls } from './levels/overworld.js'
import { STAND_DOWN, STAND_LEFT, STAND_RIGHT, STAND_UP, WALK_DOWN, WALK_LEFT, WALK_RIGHT, WALK_UP } from './objects/player/playerAnimations.js';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const input = new Input();

const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320, 180)
})

const player = new Sprite({
    resource: resources.images.player,
    frameSize: new Vector2(16, 16),
    hFrames: 16,
    frame: 0,
    position: new Vector2(gridCells(6),gridCells(5)),
})

const shadow = new Sprite({
    resource: resources.images.shadow,
    frameSize: new Vector2(16,16)
})

const playerDestinationPosition = player.position.duplicate();

const draw = () => 
{
    
    groundSprite.drawImage(ctx, 0, 0);
    shadow.drawImage(ctx, player.position.x, player.position.y+2);
    player.drawImage(ctx, player.position.x, player.position.y);
}

const update = (delta) => 
{
    const distance = moveTowards(player, playerDestinationPosition, 1)
    const hasArrived = distance <= 1;


    if (hasArrived)
    {
        tryMove();
    }

    if (player.animation) {
        player.animation.step(delta);
        player.frame = player.animation.frame; // Update player frame
    }
}

let lastDirection;

const tryMove = () => 
{
     console.log(lastDirection);
    if(!input.direction){

        if (lastDirection === DOWN){
            player.animation = STAND_DOWN;
        }
        if (lastDirection === UP){
            player.animation = STAND_UP;
        }
        if (lastDirection === LEFT){
            player.animation = STAND_LEFT;
        }
        if (lastDirection === RIGHT){
            player.animation = STAND_RIGHT;
        }
    return
    }
    lastDirection = input.direction;


    let nextX = playerDestinationPosition.x;
    let nextY = playerDestinationPosition.y;
    const gridSize = 16;

    if(input.direction === DOWN)
    {
        nextY += gridSize;
        player.animation = WALK_DOWN;
    }
    if(input.direction === UP)
    {
        nextY -= gridSize;
        player.animation = WALK_UP;
    }
    if(input.direction === LEFT)
    {
        nextX -= gridSize;
        player.animation = WALK_LEFT;
    }
    if(input.direction === RIGHT)
    { 
        nextX += gridSize;
        player.animation = WALK_RIGHT;
    }

    if(isSpaceFree(walls, nextX, nextY))
    {
        playerDestinationPosition.x = nextX;
        playerDestinationPosition.y = nextY;
    }


}


const gameLoop = new GameLoop(update, draw);
gameLoop.start();
