import Events from 'nom-events';

interface MouseButton {
  LEFT: number;
  MIDDLE: number;
  RIGHT: number;
  FOURTH: number;
  FIFTH: number;
}

export default class Mouse {
  private canvasElement: HTMLCanvasElement;
  private Button: MouseButton;
  private posLocalY: any;
  private posLocalX: any;
  private posGlobalX: any;
  private posGlobalY: any;
  private buttonStates: Map<any, any>;
  private events: any;

  constructor() {
    this.Button = { LEFT: 0, MIDDLE: 1, RIGHT: 2, FOURTH: 3, FIFTH: 4 };
    this.canvasElement = document.getElementsByTagName('canvas')[0];

    if (!this.canvasElement) throw new Error('<canvas /> element not exist!');

    this.buttonStates = new Map();
    this.events = new Events();

    this.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
      if (this.posLocalX != event.clientX || this.posLocalY != event.clientY) {
        this.events.call('move', event.clientX, this.posLocalY);
        this.events.call('moveLocal', event.clientX, this.posLocalY);
        this.posLocalX = event.clientX;
        this.posLocalY = event.clientY;
      }

      if (this.posGlobalX != event.screenX || this.posGlobalY != event.screenY) {
        this.events.call('moveGlobal', event.screenX, event.screenY);
        this.posGlobalX = event.screenX;
        this.posGlobalY = event.screenY;
      }
    });

    this.canvasElement.addEventListener('mousedown', (event: any) => {
      const buttonCode = event.button;
      if (!this.buttonStates.get(buttonCode)) {
        event.posLocalX = this.getPosLocalX();
        event.posLocalY = this.getPosLocalY();
        this.buttonStates.set(buttonCode, event);
        this.events.call('pressed', buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
        this.events.call('pressed_' + buttonCode, buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
      }
    });

    this.canvasElement.addEventListener('mouseup', (event: any) => {
      const buttonCode = event.button;
      event = this.buttonStates.get(buttonCode);
      if (event) {
        event.wasReleased = true;
        this.events.call(
          'released',
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
        this.events.call(
          'released_' + buttonCode,
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
      }
    });
  }

  public getMouseButton = (): MouseButton => {
    return this.Button;
  };

  public getMousePos(event: any) {
    const rect = this.canvasElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  public getPosGlobalX() {
    return this.posGlobalX;
  }

  public getPosGlobalY() {
    return this.posGlobalY;
  }

  public getPosLocalX() {
    return this.posLocalX;
  }

  public getPosLocalY() {
    return this.posLocalY;
  }

  public getPosX() {
    return this.getPosLocalX();
  }

  public getPosY() {
    return this.getPosLocalY();
  }

  public clear() {
    this.canvasElement = document.getElementsByTagName('canvas')[0];
    this.buttonStates.clear();
    this.events = new Events();

    this.canvasElement.removeEventListener('mousemove', (event: any) => {
      if (this.posLocalX != event.clientX || this.posLocalY != event.clientY) {
        this.events.call('move', event.clientX, this.posLocalY);
        this.events.call('moveLocal', event.clientX, this.posLocalY);
        this.posLocalX = event.clientX;
        this.posLocalY = event.clientY;
      }

      if (this.posGlobalX != event.screenX || this.posGlobalY != event.screenY) {
        this.events.call('moveGlobal', event.screenX, event.screenY);
        this.posGlobalX = event.screenX;
        this.posGlobalY = event.screenY;
      }
    });

    this.canvasElement.removeEventListener('mousedown', (event: any) => {
      const buttonCode = event.button;
      if (!this.buttonStates.get(buttonCode)) {
        event.posLocalX = this.getPosLocalX();
        event.posLocalY = this.getPosLocalY();
        this.buttonStates.set(buttonCode, event);
        this.events.call('pressed', buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
        this.events.call('pressed_' + buttonCode, buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
      }
    });

    this.canvasElement.removeEventListener('mouseup', (event: any) => {
      const buttonCode = event.button;
      event = this.buttonStates.get(buttonCode);
      if (event) {
        event.wasReleased = true;
        this.events.call(
          'released',
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
        this.events.call(
          'released_' + buttonCode,
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
      }
    });

    this.canvasElement.addEventListener('mousemove', (event) => {
      if (this.posLocalX != event.clientX || this.posLocalY != event.clientY) {
        this.events.call('move', event.clientX, this.posLocalY);
        this.events.call('moveLocal', event.clientX, this.posLocalY);
        this.posLocalX = event.clientX;
        this.posLocalY = event.clientY;
      }

      if (this.posGlobalX != event.screenX || this.posGlobalY != event.screenY) {
        this.events.call('moveGlobal', event.screenX, event.screenY);
        this.posGlobalX = event.screenX;
        this.posGlobalY = event.screenY;
      }
    });

    this.canvasElement.addEventListener('mousedown', (event: any) => {
      const buttonCode = event.button;
      if (!this.buttonStates.get(buttonCode)) {
        event.posLocalX = this.getPosLocalX();
        event.posLocalY = this.getPosLocalY();
        this.buttonStates.set(buttonCode, event);
        this.events.call('pressed', buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
        this.events.call('pressed_' + buttonCode, buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
      }
    });

    this.canvasElement.addEventListener('mouseup', (event: any) => {
      const buttonCode = event.button;
      event = this.buttonStates.get(buttonCode);
      if (event) {
        event.wasReleased = true;
        this.events.call(
          'released',
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
        this.events.call(
          'released_' + buttonCode,
          buttonCode,
          event,
          this.getPosLocalX(),
          this.getPosLocalY(),
          event.posLocalX,
          event.posLocalY,
          this.getPosLocalX() - event.posLocalX,
          this.getPosLocalY() - event.posLocalY,
        );
      }
    });
  }

  public update() {
    this.buttonStates.forEach((value, buttonCode) => {
      const event = this.buttonStates.get(buttonCode);

      event.alreadyPressed = true;
      if (event.wasReleased) this.buttonStates.delete(buttonCode);

      this.events.call(
        'down',
        buttonCode,
        event,
        this.getPosLocalX(),
        this.getPosLocalY(),
        event.posLocalX,
        event.posLocalY,
        this.getPosLocalX() - event.posLocalX,
        this.getPosLocalY() - event.posLocalY,
      );
      this.events.call(
        'down_' + buttonCode,
        buttonCode,
        event,
        this.getPosLocalX(),
        this.getPosLocalY(),
        event.posLocalX,
        event.posLocalY,
        this.getPosLocalX() - event.posLocalX,
        this.getPosLocalY() - event.posLocalY,
      );
    });
  }

  public isButtonDown(...args: Array<any>) {
    let result = false;
    for (const buttonCode of args) {
      const key = this.buttonStates.get(buttonCode);
      if (key && !key.wasReleased) result = true;
    }

    return result;
  }

  public isButtonUp(...args: Array<any>) {
    return !this.isButtonDown(args);
  }

  public isButtonPressed(...args: Array<any>) {
    let result = false;

    if (args.length == 0) return false;

    for (const buttonCode of args) {
      const event = this.buttonStates.get(buttonCode);
      if (event && !event.wasReleased && !event.alreadyPressed) result = true;
    }

    return result;
  }

  public isButtonReleased(...args: Array<any>) {
    let result = false;

    if (args.length == 0) return false;

    for (const buttonCode of args) {
      const event = this.buttonStates.get(buttonCode);
      if (event && event.wasReleased) result = true;
    }

    return result;
  }
}
