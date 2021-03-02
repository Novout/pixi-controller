import Mouse from './mouse';

class PIXIController {
  public MouseController: Mouse;

  constructor() {
    this.MouseController = new Mouse();
  }
}

export default new PIXIController();
