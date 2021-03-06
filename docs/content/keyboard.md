# Keyboard

[Discovery keys here](https://keycode.info/)

## isKeyDown('Key')

Checks if the key is held.

## .isKeyPressed('Key')

Checks if the key was pressed, holding will not trigger this more than once.

## .isKeyReleased('Key')

Checks whether the key was just released.

```js
app.loader.add('example', 'example.jpg').load((loader, resources) => {
    // This creates a texture from a 'example.png' image
    const example = new PIXI.Sprite(resources.example.texture);

    // Setup the position of the example
    example.x = app.renderer.width / 2;
    example.y = app.renderer.height / 2;

    // Rotate around the center
    example.anchor.x = 0.5;
    example.anchor.y = 0.5;

    app.stage.addChild(example);

    app.ticker.add(() => { 
      if (Controller.Keyboard.isKeyDown('ArrowLeft', 'KeyA'))
        example.x -= 1;
      if (Controller.Keyboard.isKeyDown('ArrowRight', 'KeyD'))
        example.x += 1;
      if (Controller.Keyboard.isKeyDown('ArrowUp', 'KeyW'))
        example.y -= 1;
      if (Controller.Keyboard.isKeyDown('ArrowDown', 'KeyS'))
        example.y += 1;

      Controller.Keyboard.update();
    });
});
```

## .update()

Ensure to use this for correct event handling at the end of the game loop.

```js
app.ticker.add(() => {
  // all logic...

  Controller.update();

  // or

  Controller.Keyboard.update();
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

## .events.on(['pressed', 'released', 'down'], null, callback)

Callback when any key in condition.

## .events.on(['pressed_{Key}', 'released_{Key}', 'down_{Key}'], null, callback)

Callback when a particular key in condition.

```js
import Controller from 'pixi-controller';

const args = ['pressed', 'released', 'down', 'pressed_KeyI', 'released_KeyI', 'down_KeyI'];

args.forEach(arg => {
  Controller.Keyboard.events.on(arg, null, (buttonCode, event, mouseX, mouseY, mouseOriginX, mouseOriginY, mouseMoveX, mouseMoveY) => {
    console.log('hello!');
  });
})
```
