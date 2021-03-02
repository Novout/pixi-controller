# Keyboard

## isKeyDown('KeyW')

Checks if the key is held.

## .isKeyPressed('KeyW')

Checks if the key was pressed, holding will not trigger this more than once.

## .isKeyReleased('KeyW')

Checks whether the key was just released.

## .update()

Ensure to use this for correct event handling at the end of the game loop.

## .clear()

Clear internal events

## .reset()

Insert events on a new canvas, deleting older events

```js
import Controller from 'pixi-controller';

const app = new PIXI.Application();

// ...

app.destroy(true);
const newApp = new PIXI.Application();

Controller.reset();
```

## .events.on('pressed', null, (keyCode, event) => { console.log(keyCode); })

Callback when any key is pressed.

## .events.on('released', null, (keyCode, event) => { console.log(keyCode); })

Callback when any key is released.

## .events.on('down', null, (keyCode, event) => { console.log(keyCode); })

Callback when any key is down.

## .events.on('pressed_KeyW', null, (keyCode, event) => { console.log(keyCode); })

Callback when a particular key is pressed.

## .events.on('released_KeyW', null, (keyCode, event) => { console.log(keyCode); })

Callback when a particular key is released.

## .events.on('down_KeyW', null, (keyCode, event) => { console.log(keyCode); })

Callback when a particular key is down.
