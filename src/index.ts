import Mouse from './mouse';
import Keyboard from './keyboard';
export class PIXIController {
  public Mouse: Mouse;
  public Keyboard: Keyboard;

  constructor() {
    this.Mouse = new Mouse();
    this.Keyboard = new Keyboard();
  }

  public update() {
    this.Mouse.update();
    this.Keyboard.update();
  }

  public reset() {
    this.Mouse.reset();
    this.Keyboard.reset();
  }
}

export default new PIXIController();
