# Simple Context

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
