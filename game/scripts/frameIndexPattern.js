export class FramIndexPattern {
    constructor (animationConfig) {
        this.currentTime = 0;
        this.animationConfig = animationConfig;
        this.duration = animationConfig.duration ?? 400;
    }

    get frame() {
        const {frames} = this.animationConfig;
        for (let i = frames.length - 1; i >= 0; i--) {
            return frames[i].frame;
        }

        throw "Time is before keyFrame";
    }


    step(delta){
        this.currentTime += delta;
        if ( this.currentTime >= this.duration){
            this.currentTime = 0;
        }
    }
}