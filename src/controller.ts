import Mouse from './mouse';
import Keyboard from './keyboard';

export class PIXIController {
  // @ts-ignore
  private Canvas: HTMLCanvasElement;
  // @ts-ignore
  public Mouse: Mouse;
  // @ts-ignore
  public Keyboard: Keyboard;

  constructor() {
    setTimeout(() => {
      this.Canvas = document.getElementsByTagName('canvas')[0];
      this.Mouse = new Mouse(this.Canvas);
      this.Keyboard = new Keyboard();
    }, 0);
  }

  public update(): void {
    this.Mouse.update();
    this.Keyboard.update();
  }

  public reset(): void {
    this.Mouse.reset();
    this.Keyboard.reset();
  }

  public setContext(_canvas: HTMLCanvasElement): void {
    this.Canvas = _canvas;
  }

  public getContext(): HTMLCanvasElement {
    return this.Canvas;
  }
}
