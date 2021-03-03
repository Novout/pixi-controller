# Controller

## .Mouse

Access Mouse context

## .Keyboard

Access Keyboard context

## .update()

Ensure to use this for correct event handling at the end of the game loop.

## .reset()

Insert events on a new canvas, deleting older events

## .getContext()

get canvas in controller

## .setContext(canvas)

set new canvas in controller

```js
// Error
import * as PIXI from 'pixi.js';
import Controller from 'pixi-controller';

const app = new PIXI.Application();
document.body.appendChild(app.view);

Controller.setContext(app.view);
console.log(Controller.getContext());

// Correct
import * as PIXI from 'pixi.js';
import Controller from 'pixi-controller';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.load((loader, resources) => {

  Controller.setContext(app.view);
  console.log(Controller.getContext());

  // ...
});
```
