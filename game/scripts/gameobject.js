import { Vector2 } from "./vector2.js";

export class GameObject {
    constructor({ position, drawOffset }){
        this.position = position ?? new Vector2(0,0);
        this.drawOffset = drawOffset ?? new Vector2(0,0);
        this.children = [];
    }

    stepEntry(delta, root){
        this.children.forEach((child) => child.stepEntry(delta,root));

        this.step(delta,root);
    }

    step(_delta){

    }

    draw(ctx, x, y){
        const drawPosX = x + this.position.x + this.drawOffset.x;
        const drawPosY = y + this.position.y + this.drawOffset.y;

        this.drawImage(ctx,drawPosX, drawPosY);

        this.children.forEach((child) => child.draw(ctx,drawPosX,drawPosY))
    }

    drawImage(ctx, drawPosX, drawPosY){

    }

    addChild(gameObect) {
        this.children.push(gameObect);
    }

    removeChild(gameObject) {
        this.children = this.children.filter (g => {
            return gameObject !== g;
        })
    }
}