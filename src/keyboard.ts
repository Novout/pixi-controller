import Events from 'nom-events';

export default class Keyboard {
  private keyStates: Map<() => KeyboardEvent, any>;
  private events: any;
  private keyDownListener = (event: any) => {
    if (!this.keyStates.get(event.code)) {
      this.keyStates.set(event.code, event);
      this.events.call('pressed', event.code, event);
      this.events.call('pressed_' + event.code, event.code, event);
    }
  };
  private keyUpListener = (event: any) => {
    event = this.keyStates.get(event.code);
    if (event) {
      event.wasReleased = true;
      this.events.call('released', event.code, event);
      this.events.call('released_' + event.code, event.code, event);
    }
  };

  constructor() {
    this.keyStates = new Map();
    this.events = new Events();
    this.set();
  }

  public clear() {
    this.keyStates.clear();
  }

  public update() {
    this.keyStates.forEach((value, keyCode) => {
      const event = this.keyStates.get(keyCode);

      event.alreadyPressed = true;

      if (event.wasReleased) {
        this.keyStates.delete(keyCode);
      }

      this.events.call('down', keyCode, event);
      this.events.call('down_' + keyCode, keyCode, event);
    });
  }

  public isKeyDown(...args: Array<any>) {
    let result = false;
    for (const keyCode of args) {
      const event = this.keyStates.get(keyCode);
      if (event && !event.wasReleased) result = true;
    }

    return result;
  }

  public isKeyUp(...args: Array<any>) {
    return !this.isKeyDown(args);
  }

  public isKeyPressed(...args: Array<any>) {
    let result = false;

    if (args.length == 0) return false;

    for (const keyCode of args) {
      const event = this.keyStates.get(keyCode);
      if (event && !event.wasReleased && !event.alreadyPressed) result = true;
    }

    return result;
  }

  public isKeyReleased(...args: Array<any>) {
    let result = false;

    if (args.length == 0) return false;

    for (const keyCode of args) {
      const event = this.keyStates.get(keyCode);
      if (event && event.wasReleased) result = true;
    }

    return result;
  }

  private set() {
    window.addEventListener('keydown', this.keyDownListener, false);
    window.addEventListener('keyup', this.keyUpListener, false);
  }

  public reset() {
    this.clear();
  }
}
