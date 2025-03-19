import { SpriteAnimation } from '../../animations.js';

const makeWalkingFrames = (rootFrame = 0) => {
    return new SpriteAnimation({
        duration: 400,
        frames: [
            { time: 0, frame: rootFrame },
            { time: 100, frame: rootFrame + 1 },
            { time: 200, frame: rootFrame + 2 },
            { time: 300, frame: rootFrame + 3 }
        ]
    });
};


const makeStandingFrames = (rootFrame = 0) => {
    return new SpriteAnimation( {
        duration: 400,
        frames: [
            {
                time: 0,
                frame: rootFrame
            }
        ]
    })
}

export const WALK_DOWN = makeWalkingFrames(0);
export const WALK_UP = makeWalkingFrames(4);
export const WALK_RIGHT = makeWalkingFrames(8);
export const WALK_LEFT = makeWalkingFrames(12);

export const STAND_DOWN = makeStandingFrames(0);
export const STAND_UP = makeStandingFrames(4);
export const STAND_RIGHT = makeStandingFrames(8);
export const STAND_LEFT = makeStandingFrames(12);