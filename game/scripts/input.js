export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export class Input {
  constructor() {
    this.heldDirection = [];
    this.interactKey = false;
    this.exitKey = false;

    document.addEventListener("keydown", (key) => {
      if (key.code === "ArrowUp" || key.code === "KeyW") {
        this.onMoveKeyPressed(UP);
      }
      if (key.code === "ArrowDown" || key.code === "KeyS") {
        this.onMoveKeyPressed(DOWN);
      }
      if (key.code === "ArrowRight" || key.code === "KeyD") {
        this.onMoveKeyPressed(RIGHT);
      }
      if (key.code === "ArrowLeft" || key.code === "KeyA") {
        this.onMoveKeyPressed(LEFT);
      }
      if (key.code === "Space") {
        this.interactButtonPressed();
      }
      if (key.code === "Escape") {
        this.exitButtonPressed();
      }
    });

    document.addEventListener("keyup", (key) => {
      if (key.code === "ArrowUp" || key.code === "KeyW") {
        this.onMoveKeyReleased(UP);
      }
      if (key.code === "ArrowDown" || key.code === "KeyS") {
        this.onMoveKeyReleased(DOWN);
      }
      if (key.code === "ArrowRight" || key.code === "KeyD") {
        this.onMoveKeyReleased(RIGHT);
      }
      if (key.code === "ArrowLeft" || key.code === "KeyA") {
        this.onMoveKeyReleased(LEFT);
      }

      if (key.code === "Space") {
        this.interactButtonRelease();
      }
      if (key.code === "Escape") {
        this.exitButtonRelease();
      }
    });
  }

  get direction() {
    return this.heldDirection[0];
  }

  onMoveKeyPressed(direction) {
    if (this.heldDirection.indexOf(direction) === -1) {
      this.heldDirection.unshift(direction);
    }
  }
  onMoveKeyReleased(direction) {
    const index = this.heldDirection.indexOf(direction);
    if (index === -1) {
      return;
    }

    this.heldDirection.splice(index, 1);
  }
  interactButtonPressed() {
    this.interactKey = true;
  }
  interactButtonRelease() {
    this.interactKey = false;
  }
  exitButtonPressed() {
    this.exitKey = true;
  }
  exitButtonRelease() {
    this.exitKey = false;
  }
}
