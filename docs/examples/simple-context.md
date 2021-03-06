# Simple Context

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
