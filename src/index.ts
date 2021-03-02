import Mouse from './mouse';

class PIXIController {
  public Mouse: Mouse;

  constructor() {
    this.Mouse = new Mouse();
  }

  public update() {
    this.Mouse.update();
  }
}

export default new PIXIController();
