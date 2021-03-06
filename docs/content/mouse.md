# Mouse

## .isButtonDown(BUTTON.Code)

Checks if the key is held.

## .isButtonPressed(BUTTON.Code)

Checks if the key was pressed, holding will not trigger this more than once.

## .isButtonReleased(BUTTON.Code)

Checks whether the key was just released.

```js
app.ticker.add(() => {
  if(Controller.Mouse.isButtonDown(BUTTON.LEFT)) {
    console.log('left')
  }

  if(Controller.Mouse.isButtonDown(2)) /* BUTTON.RIGHT */ {
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

## .prevent(args)

args: Array with button codes

Prevent mouse events in canvas/webgl context.

```js
// ...
import Controller, { BUTTON } from 'pixi-controller';
// ...

app.loader.load((loader, resources) => {

    Controller.Mouse.prevent(BUTTON.RIGHT);

    app.ticker.add(() => {
      Controller.update();
    });
});
```

## .preventRemove()

Remove prevent events

## .events.on(['pressed', 'released', 'down'], null, (buttonCode, event, mouseX, mouseY)

Callback when any key is pressed/released/down.

## .events.on(['pressed_', 'released_', 'down_'], null, (buttonCode, event, mouseX, mouseY) => { console.log(buttonCode); })

Callback when a particular key is pressed/released/down.

```js
import Controller from 'pixi-controller';

const args = ['pressed', 'released', 'down'];

args.forEach(arg => {
  Controller.Mouse.events.on(arg, null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMoveY) => {
    console.log('hello!');
  });
})
```
