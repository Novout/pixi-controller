# Mouse

## .Button

.Button = {LEFT: 0, MIDDLE: 1, RIGHT: 2, FOURTH: 3, FIFTH: 4}

Bind for specific button.

## .isButtonDown(Button.Code)

Checks if the key is held.

## .isButtonPressed(Button.Code)

Checks if the key was pressed, holding will not trigger this more than once.

## .isButtonReleased(Button.Code)

Checks whether the key was just released.

```js
app.ticker.add(() => {
  if(Controller.Mouse.isButtonDown(Controller.Mouse.Button.LEFT)) {
    console.log('left')
  }

  if(Controller.Mouse.isButtonDown(1)) /* Controller.Mouse.Button.RIGHT */ {
    console.log('right')
  }

  Controller.update();
});
```

## .update()

Ensure to use this for correct event handling at the end of the game loop.

```js
app.ticker.add(() => {
  // all logic...

  Controller.update();

  // or

  Controller.Mouse.update();
});
```

## .clear()

Clear internal events

## .reset()

Insert events on a new canvas, deleting older events

```js
import * as PIXI from 'pixi.js';
import Controller from 'pixi-controller';

const app = new PIXI.Application();

// ...

app.destroy(true);
const newApp = new PIXI.Application();

Controller.reset();
```

## .prevent()

Prevent mouse events in canvas/webgl context.

## .events.on(['pressed', 'released', 'down'], null, (buttonCode, event, mouseX, mouseY)

Callback when any key is pressed/released/down.

## .events.on(['pressed_', 'released_', 'down_'], null, (buttonCode, event, mouseX, mouseY) => { console.log(buttonCode); })

Callback when a particular key is pressed/released/down.

```js
import Controller from 'pixi.js-controller';

const args = ['pressed', 'released', 'down'];

args.forEach(arg => {
  Controller.Mouse.events.on(arg, null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMoveY) => {
    console.log('hello!');
  });
})
```
