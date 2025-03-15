import { Vector2 } from "./vector2.js";


export class SpriteAnimation {
    constructor({ duration, frames }) {
        this.duration = duration;
        this.frames = frames;
        this.elapsedTime = 0;
        this.currentFrameIndex = 0;
    }

    step(delta) {
        this.elapsedTime += delta;
        if (this.elapsedTime >= this.frames[this.currentFrameIndex].time) {
            this.currentFrameIndex++;
            if (this.currentFrameIndex >= this.frames.length) {
                this.currentFrameIndex = 0; // Loop animation
                this.elapsedTime = 0;
            }
        }
    }

    get frame() {
        return this.frames[this.currentFrameIndex].frame;
    }
}

export class Sprite
{
    constructor
    ({
        resource, // the image
        frameSize, // size of the crop image
        hFrames, // sprite arranged horizontally
        vFrames, // sprite arranged vertically
        frame, // the specific frame you want to show
        scale, // scale of the image
        position, // where from the top left corner
        animation,
    }) 
    {
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16,16);
        this.hFrames = hFrames ?? 1;
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0,0);
        this.animation = animation ?? null;
        this.buildFrameMap();
    }
    buildFrameMap()
    {
        let frameCount = 0;
        for (let v = 0; v < this.vFrames; v++)
        {
            for(let h = 0; h < this.hFrames; h++)
            {
                console.log(h,v);
                this.frameMap.set(frameCount, new Vector2(this.frameSize.x * h,this.frameSize.y * v))
                frameCount++;
                
            }
        }
    }

    step(delta) {
        if (!this.animation) {
            return;
        }
        this.animation.step(delta);
        this.frame = this.animation.frame;
    }

    drawImage(ctx, x, y)
    {
        if(!this.resource.isLoaded)
        {
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;
        const frame = this.frameMap.get(this.frame);
        if(frame)
        {
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        const frameSixeX = this.frameSize.x;
        const frameSixeY = this.frameSize.y;

        ctx.drawImage(
            this.resource.image,
            frameCoordX,
            frameCoordY,
            frameSixeX,
            frameSixeY,
            x,
            y,
            frameSixeX * this.scale,
            frameSixeY * this.scale,
        )
    }
}