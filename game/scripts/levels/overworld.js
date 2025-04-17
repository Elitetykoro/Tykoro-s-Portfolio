export const walls = new Set();

// LEFT WALL
walls.add(`64,16`);
walls.add(`64,32`);
walls.add(`64,48`);
walls.add(`64,64`);
walls.add(`64,80`);
walls.add(`64,96`);
walls.add(`64,112`);
walls.add(`64,128`);

// BOTTOM WALL
walls.add(`80,144`);
walls.add(`96,144`);
walls.add(`112,144`);
walls.add(`128,144`);
walls.add(`144,144`);
walls.add(`160,144`);
walls.add(`176,144`);
walls.add(`192,144`);
walls.add(`208,144`);
walls.add(`224,144`);

// RIGHT WALL
walls.add(`176,64`);
walls.add(`240,80`);
walls.add(`240,96`);
walls.add(`240,112`);
walls.add(`240,128`);

// TOP WALL
walls.add(`80,48`);
walls.add(`96,48`);
walls.add(`112,48`);
walls.add(`128,48`);
walls.add(`144,48`);
walls.add(`160,48`);

walls.add(`192,64`);
walls.add(`208,64`);
walls.add(`224,64`);
walls.add(`240,64`);

export const Computer = new Set();
Computer.add(`80,48`);
Computer.add(`96,48`);

export const Arcade = new Set();
Arcade.add(`160,48`);