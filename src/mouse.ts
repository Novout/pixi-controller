import Events from 'nom-events';
export class Mouse {
  private canvasElement: HTMLCanvasElement;
  private posLocalY = 0;
  private posLocalX = 0;
  private posGlobalX = 0;
  private posGlobalY = 0;
  private buttonStates: Map<() => MouseEvent, any>;
  private events: any;
  private _prevent: Record<string, boolean | any> = {
    value: false,
    code: [],
  };
  private mouseMoveListener = (event: MouseEvent) => {
    const buttonCode = event.button;
    this.preventMiddle(buttonCode, event);

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
  };
  private mouseDownListener = (event: any) => {
    const buttonCode = event.button;
    this.preventMiddle(buttonCode, event);

    if (!this.buttonStates.get(buttonCode)) {
      event.posLocalX = this.getPosLocalX();
      event.posLocalY = this.getPosLocalY();
      this.buttonStates.set(buttonCode, event);
      this.events.call('pressed', buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
      this.events.call('pressed_' + buttonCode, buttonCode, event, this.getPosLocalX(), this.getPosLocalY());
    }
  };
  private mouseUpListener = (event: any) => {
    const buttonCode = event.button;
    this.preventMiddle(buttonCode, event);

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
  };
  private mouseMenuContext = (event: MouseEvent) => {
    this.preventMiddle(event.button, event);
  };

  constructor(canvas: HTMLCanvasElement) {
    this.buttonStates = new Map();
    this.events = new Events();
    this.canvasElement = canvas;

    if (!this.canvasElement) throw new Error('pixi-controller: error for search <canvas /> tag.');

    this.canvasElement.addEventListener('mousemove', this.mouseMoveListener);

    this.canvasElement.addEventListener('mousedown', this.mouseDownListener);

    this.canvasElement.addEventListener('mouseup', this.mouseUpListener);

    this.canvasElement.addEventListener('contextmenu', this.mouseMenuContext);
  }

  public getMousePos(event: any) {
    const rect = this.canvasElement.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  public getPosGlobalX(): number {
    return this.posGlobalX;
  }

  public getPosGlobalY(): number {
    return this.posGlobalY;
  }

  public getPosLocalX(): number {
    return this.posLocalX;
  }

  public getPosLocalY(): number {
    return this.posLocalY;
  }

  public getPosX(): number {
    return this.getPosLocalX();
  }

  public getPosY(): number {
    return this.getPosLocalY();
  }

  public clear(): void {
    this.buttonStates.clear();
  }

  public reset(_canvas?: HTMLCanvasElement): void {
    _canvas ? (this.canvasElement = _canvas) : (this.canvasElement = document.getElementsByTagName('canvas')[0]);
    this.clear();
    this.events = new Events();

    this.canvasElement.removeEventListener('mousemove', this.mouseMoveListener);

    this.canvasElement.removeEventListener('mousedown', this.mouseDownListener);

    this.canvasElement.removeEventListener('mouseup', this.mouseUpListener);

    this.canvasElement.removeEventListener('contextmenu', this.mouseMenuContext);

    this.canvasElement.addEventListener('mousemove', this.mouseMoveListener);

    this.canvasElement.addEventListener('mousedown', this.mouseDownListener);

    this.canvasElement.addEventListener('mouseup', this.mouseUpListener);

    this.canvasElement.addEventListener('contextmenu', this.mouseMenuContext);
  }

  public update(): void {
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

  public isButtonDown(...args: Array<any>): boolean {
    let result = false;
    for (const buttonCode of args) {
      const key = this.buttonStates.get(buttonCode);
      if (key && !key.wasReleased) result = true;
    }

    return result;
  }

  public isButtonUp(...args: Array<any>): boolean {
    return !this.isButtonDown(args);
  }

  public isButtonPressed(...args: Array<any>): boolean {
    let result = false;

    if (args.length == 0) return false;

    for (const buttonCode of args) {
      const event = this.buttonStates.get(buttonCode);
      if (event && !event.wasReleased && !event.alreadyPressed) result = true;
    }

    return result;
  }

  public isButtonReleased(...args: Array<any>): boolean {
    let result = false;

    if (args.length == 0) return false;

    for (const buttonCode of args) {
      const event = this.buttonStates.get(buttonCode);
      if (event && event.wasReleased) result = true;
    }

    return result;
  }

  public prevent(...args: Array<number>): void {
    this._prevent.value = true;
    args.forEach((arg: number) => {
      this._prevent.code.push(arg);
    });
  }

  public preventRemove() {
    this._prevent.value = false;
    this._prevent.code = [];
  }

  private preventMiddle(button: number, event: MouseEvent): void {
    this._prevent.code.forEach((cd: number) => {
      if (this._prevent.value && button === cd) {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }
}
