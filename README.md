# PIXI.JS Controller

Set of controls for Pixi.js to facilitate general handling of external events.

- [pixi-controller](https://github.com/Novout/pixi-controller) is based on [pixi.js-mouse](https://www.npmjs.com/package/pixi.js-mouse) and [pixi.js-keyboard](https://www.npmjs.com/package/pixi.js-keyboard)
- Standard format is `ESModules` and the `AMD` format is available at `index.amd.js`
- [Documentation is here](https://novout.github.io/pixi-controller/)

## Install

```shell
npm install pixi.js pixi-controller

or

yarn add pixi.js pixi-controller
```

## Basic Example

```js
import * as PIXI from 'pixi.js';
import Controller from 'pixi-controller';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader.add('example', 'example.jpg').load((loader, resources) => {
    const example = new PIXI.Sprite(resources.example.texture);

    app.stage.addChild(example);

    app.ticker.add(() => {
      if(Controller.Mouse.isButtonDown(Controller.Mouse.Button.LEFT)) {
        console.log('left')
      }

      if(Controller.Mouse.isButtonDown(Controller.Mouse.Button.RIGHT)) {
        console.log('right')
      }
      
      if (Controller.Keyboard.isKeyDown('ArrowLeft', 'KeyA'))
        example.x -= 1;
      if (Controller.Keyboard.isKeyDown('ArrowRight', 'KeyD'))
        example.x += 1;
      if (Controller.Keyboard.isKeyDown('ArrowUp', 'KeyW'))
        example.y -= 1;
      if (Controller.Keyboard.isKeyDown('ArrowDown', 'KeyS'))
        example.y += 1;

      Controller.update();
    });
});
```

## TODO

- [x] Pixi.js-mouse and Pixi.js-keyboard Implement
- [ ] Control Event Listeners
- [ ] Internal Observables

## Credits

[-non-](https://www.npmjs.com/~-nom-) for creation pixi.js-mouse and pixi.js-keyboard
