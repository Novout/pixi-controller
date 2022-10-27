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

    if (!this.Mouse || !this.Keyboard) throw new Error('Controller cannot be instantiable before the loader.');
    this.Mouse.reset(_canvas);
  }

  public getContext(): HTMLCanvasElement {
    return this.Canvas;
  }

  public prevent(): void {
    this.Canvas.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    this.Canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  }
}
