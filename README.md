# PIXI.JS Controller

![License Badge](https://img.shields.io/github/license/Novout/pixi-controller) ![Version Badge](https://img.shields.io/npm/v/pixi-controller) ![Bundle Badge](https://img.shields.io/bundlephobia/min/pixi-controller)

Set of controls for Pixi.js to facilitate general handling of external events.

- [pixi-controller](https://github.com/Novout/pixi-controller) is based on [pixi.js-mouse](https://www.npmjs.com/package/pixi.js-mouse) and [pixi.js-keyboard](https://www.npmjs.com/package/pixi.js-keyboard)
- [Documentation is here](https://novout.github.io/pixi-controller/)

## Install

```shell
npm install pixi.js pixi-controller

or

yarn add pixi.js pixi-controller
```

## Simple Example

```js
import * as PIXI from 'pixi.js';
import Controller, { BUTTON, PLAYER } from 'pixi-controller';

const app = new PIXI.Application();
document.body.appendChild(app.view);

app.loader.add('example', 'example.jpg').load((loader, resources) => {
    const example = new PIXI.Sprite(resources.example.texture);

    app.stage.addChild(example);

    Controller.Mouse.prevent(BUTTON.RIGHT);

    app.ticker.add(() => {
      if(Controller.Mouse.isButtonDown(BUTTON.LEFT)) {
        console.log('left')
      }

      if(Controller.Mouse.isButtonDown(BUTTON.RIGHT)) {
        console.log('right')
      }
      
      if (Controller.Keyboard.isKeyDown(...PLAYER.LEFT))
        example.x -= 1;
      if (Controller.Keyboard.isKeyDown(...PLAYER.RIGHT))
        example.x += 1;
      if (Controller.Keyboard.isKeyDown(...PLAYER.UP))
        example.y -= 1;
      if (Controller.Keyboard.isKeyDown(...PLAYER.DOWN))
        example.y += 1;

      Controller.update();
    });
});
```

## Credits

[-nom-](https://github.com/c-ridgway) for creation pixi.js-mouse and pixi.js-keyboard
