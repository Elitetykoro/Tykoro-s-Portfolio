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