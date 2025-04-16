import { GameObject } from "../../gameobject.js";
import { gridCells, isSpaceFree, isSpaceInteractible } from "../../helpers/grid.js";
import { moveTowards } from "../../helpers/moveTowards.js";
import { DOWN, LEFT, RIGHT, UP, Input } from "../../input.js";
import { interactibles, walls } from "../../levels/overworld.js";
import { resources } from "../../resource.js";
import { Sprite } from "../../sprite.js";
import { Vector2 } from "../../vector2.js";
import { STAND_DOWN, STAND_LEFT, STAND_RIGHT, STAND_UP, WALK_DOWN, WALK_LEFT, WALK_RIGHT, WALK_UP } from "./playerAnimations.js";

export class Player extends GameObject {
    constructor ( x, y) {
        super({
            position: new Vector2(x,y)
        });

        // DRAW SHADOW
        const shadow = new Sprite({
            resource: resources.images.shadow,
            frameSize: new Vector2(16,16)
        })
        this.addChild(shadow);

        // DRAW PLAYER
        this.body = new Sprite({
            resource: resources.images.player,
            frameSize: new Vector2(16, 16),
            hFrames: 16,
            frame: 0,
            position: new Vector2(0,0),
        })

        this.addChild(this.body);

        this.facingDirection = DOWN;
        this.destinationPosition = this.position.duplicate();
        this.activeKey = new Input();
    }

    step(delta, root){
        const distance = moveTowards(this, this.destinationPosition, 0.75)
        const hasArrived = distance <= 1;


        if (hasArrived)
        {
            this.tryMove(root);
        }

        if (this.body.animation) { 
            this.body.animation.step(delta);
            this.body.frame = this.body.animation.frame; // Update player frame
        }
    }

    tryMove(root) 
    {
        const { input } = root;

        if(!input.direction){
    
            if (this.facingDirection === DOWN) { this.body.animation = STAND_DOWN; }
            if (this.facingDirection === UP) { this.body.animation = STAND_UP; }
            if (this.facingDirection === LEFT) { this.body.animation = STAND_LEFT; }
            if (this.facingDirection === RIGHT) { this.body.animation = STAND_RIGHT; }
        return
        }
        this.facingDirection = input.direction ?? this.facingDirection;
    
    
        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;
        const gridSize = 16;
    
        if(input.direction === DOWN)
        {
            nextY += gridSize;
            this.body.animation = WALK_DOWN;
        }
        if(input.direction === UP)
        {
            nextY -= gridSize;
            this.body.animation = WALK_UP;
        }
        if(input.direction === LEFT)
        {
            nextX -= gridSize;
            this.body.animation = WALK_LEFT;
        }
        if(input.direction === RIGHT)
        { 
            nextX += gridSize;
            this.body.animation = WALK_RIGHT;
        }
    
        if(isSpaceInteractible(interactibles, nextX, nextY))
            {
                console.log(nextX,nextY, "is interactible!")
            }
        if(isSpaceFree(walls, nextX, nextY))
        {
            this.destinationPosition.x = nextX;
            this.destinationPosition.y = nextY;
        }

    
    }
}