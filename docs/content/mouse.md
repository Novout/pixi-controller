# Mouse

## .Button = {LEFT: 0, MIDDLE: 1, RIGHT: 2, FOURTH: 3, FIFTH: 4}

Bind for specific button.

## .isButtonDown()

.isButtonDown(Controller.Mouse.isButtonDown(Mouse.Button.LEFT) )

Checks if the key is held.

## .isButtonPressed()

.isButtonPressed(Controller.Mouse.isButtonDown(Mouse.Button.LEFT) )

Checks if the key was pressed, holding will not trigger this more than once.

## .isButtonReleased()

.isButtonReleased(Controller.Mouse.isButtonDown(Mouse.Button.LEFT))

Checks whether the key was just released.

## .update()

Ensure to use this for correct event handling at the end of the game loop.

## .clear()

Clear internal events

## .reset()

Insert events on a new canvas, deleting older events

```js
import Controller from 'pixi.js-controller';

const app = new PIXI.Application();

// ...

app.destroy(true);
const newApp = new PIXI.Application();

Controller.reset();
```

## .events.on('pressed', null, (buttonCode, event, mouseX, mouseY) => { console.log(buttonCode); })

Callback when any key is pressed.

## .events.on('released', null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMove) => { console.log(buttonCode); })

Callback when any key is released.

## .events.on('down', null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMoveY) => { console.log(buttonCode); })

Callback when any key is down.

## .events.on('pressed_' + Mouse.Button.LEFT, null, (buttonCode, event, mouseX, mouseY) => { console.log(buttonCode); })

Callback when a particular key is pressed.

## .events.on('released_' + Mouse.Button.LEFT, null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMove) => { console.log(buttonCode); })

Callback when a particular key is released.

## .events.on('down_' + Mouse.Button.LEFT, null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMove) => { console.log(buttonCode); })

Callback when a particular key is down.
