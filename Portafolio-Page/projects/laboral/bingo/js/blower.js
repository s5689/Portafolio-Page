const BALLS_COUNT = 75;
const BALL_RADIUS = 10;
const CANVAS_WIDTH = 540;
const CANVAS_HEIGHT = 540;

class blower {
  constructor() {
    this.count = null;

    this.balls = [];
    this.ballState = [];
    this.Engine = null;
    this.Render = null;
    this.World = null;
    this.Bodies = null;
    this.Body = null;
    this.Runner = null;
    this.runner = null;
    this.Events = null;
    this.engine = null;

    this.ballImagePaths = null;
  }

  static async init() {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Runner = Matter.Runner,
      Events = Matter.Events;

    const engine = Engine.create();
    const runner = Runner.run(engine);

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        wireframes: false,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        background: "transparent",
      },
    });

    const balls = [];
    const ballState = [];
    const ballImagePaths = [
      null,
      "assets/1.png",
      "assets/2.png",
      "assets/3.png",
      "assets/4.png",
      "assets/5.png",
      "assets/6.png",
      "assets/7.png",
      "assets/8.png",
      "assets/9.png",
      "assets/10.png",
      "assets/11.png",
      "assets/12.png",
      "assets/13.png",
      "assets/14.png",
      "assets/15.png",
      "assets/16.png",
      "assets/17.png",
      "assets/18.png",
      "assets/19.png",
      "assets/20.png",
      "assets/21.png",
      "assets/22.png",
      "assets/23.png",
      "assets/24.png",
      "assets/25.png",
      "assets/26.png",
      "assets/27.png",
      "assets/28.png",
      "assets/29.png",
      "assets/30.png",
      "assets/31.png",
      "assets/32.png",
      "assets/33.png",
      "assets/34.png",
      "assets/35.png",
      "assets/36.png",
      "assets/37.png",
      "assets/38.png",
      "assets/39.png",
      "assets/40.png",
      "assets/41.png",
      "assets/42.png",
      "assets/43.png",
      "assets/44.png",
      "assets/45.png",
      "assets/46.png",
      "assets/47.png",
      "assets/48.png",
      "assets/49.png",
      "assets/50.png",
      "assets/51.png",
      "assets/52.png",
      "assets/53.png",
      "assets/54.png",
      "assets/55.png",
      "assets/56.png",
      "assets/57.png",
      "assets/58.png",
      "assets/59.png",
      "assets/60.png",
      "assets/61.png",
      "assets/62.png",
      "assets/63.png",
      "assets/64.png",
      "assets/65.png",
      "assets/66.png",
      "assets/67.png",
      "assets/68.png",
      "assets/69.png",
      "assets/70.png",
      "assets/71.png",
      "assets/72.png",
      "assets/73.png",
      "assets/74.png",
      "assets/75.png",
    ];

    const createBall = (i) => {
      const ball = Bodies.circle(
        render.canvas.width / 2 - BALL_RADIUS,
        render.canvas.height / 2 - 2 * BALL_RADIUS,
        BALL_RADIUS,
        {
          restitution: 1.03,
          render: {
            sprite: {
              texture: ballImagePaths[i],
            },
          },
        }
      );

      balls.push(ball);
      ballState.push({ id: i, air: true });

      return ball;
    };

    const onRenderTick = () => {
      balls.forEach((ball) => {
        const foundState = ballState.find((value) => value.id === ball.id);

        if (foundState.air) {
          if (ball.position.y >= render.canvas.height - 100) {
            Body.applyForce(
              ball,
              { x: ball.position.x, y: ball.position.y },
              { x: 0.003, y: -0.003 }
            );
          }
          if (ball.position.y < 120) {
            Body.applyForce(
              ball,
              { x: ball.position.x, y: ball.position.y },
              { x: -0.003, y: 0.003 }
            );
          }

          if (ball.position.x < 80) {
            Body.applyForce(
              ball,
              { x: ball.position.x, y: ball.position.y },
              { x: 0.003, y: -0.003 }
            );
          }

          if (ball.position.x > render.canvas.width - 80) {
            Body.applyForce(
              ball,
              { x: ball.position.x, y: ball.position.y },
              { x: -0.003, y: 0.003 }
            );
          }
        }
      });
    };

    // Add the balls to the scene
    for (let i = 1; i <= BALLS_COUNT; i++) {
      World.add(engine.world, createBall(i));
    }

    // Run the engine
    Runner.run(engine);
    Render.run(render);

    /**
     * Build the circle bounds - BEGIN
     * */

    const addBody = (...bodies) => {
      World.add(engine.world, ...bodies);
    };

    const addRect = ({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) => {
      const body = Bodies.rectangle(x, y, w, h, options);
      addBody(body);
      return body;
    };

    const sW = CANVAS_WIDTH;
    const sH = CANVAS_WIDTH;
    const m = Math.min(sW, sH);
    const rat = (1 / 4.5) * 2;
    const r = m * rat;
    const pegCount = 64;
    const TAU = Math.PI * 2;
    const debugging = false;

    for (let i = 0; i < pegCount; i++) {
      const segment = TAU / pegCount;
      const angle2 = (i / pegCount) * TAU + segment / 2;
      const x2 = Math.cos(angle2);
      const y2 = Math.sin(angle2);
      const cx2 = x2 * r + sW / 2;
      const cy2 = y2 * r + sH / 2;

      // Generar contenedor de esferas, dejando espacio para la salida.
      if (i < 42 || i > 52)
        addRect({
          x: cx2,
          y: cy2,
          w: (100 / 1000) * m,
          h: (3000 / 8000) * m,
          options: {
            angle: angle2,
            isStatic: true,
            density: 1,
            render: {
              fillStyle: "transparent",
              strokeStyle: "white",
              lineWidth: debugging ? 1 : 0,
            },
          },
        });
      else {
        addRect({
          x: 189,
          y: -60,
          w: (100 / 1000) * m,
          h: (3000 / 8000) * m,
          options: {
            isStatic: true,
            density: 1,
            render: {
              fillStyle: "transparent",
              strokeStyle: "white",
              lineWidth: debugging ? 1 : 0,
            },
          },
        });

        addRect({
          x: 328,
          y: -60,
          w: (100 / 1000) * m,
          h: (3000 / 8000) * m,
          options: {
            isStatic: true,
            density: 1,
            render: {
              fillStyle: "transparent",
              strokeStyle: "white",
              lineWidth: debugging ? 1 : 0,
            },
          },
        });
      }
    }
    // Build the circle bounds - END

    // Start the blowing with X seconds delay
    setTimeout(() => {
      Events.on(runner, "tick", onRenderTick);
    }, 500);

    // Globalizar
    this.balls = balls;
    this.ballState = ballState;
    this.Engine = Engine;
    this.Render = Render;
    this.World = World;
    this.Bodies = Bodies;
    this.Body = Body;
    this.Runner = Runner;
    this.runner = runner;
    this.Events = Events;
    this.engine = engine;
    this.ballImagePaths = ballImagePaths;
    this.count = 0;
  }

  static async fly(e) {
    // Buscar Esfera e Id en el array
    let id = null;

    this.balls.map((value, k) => {
      if (value.id === e) id = k;
    });

    const ball = this.balls[id];

    // Desactivar Fisicas de aire para la esfera.
    const foundState = this.ballState.find((value) => value.id === e);
    foundState.air = false;

    // Invertir gravedad de la esfera seleccionada.
    this.Events.on(this.runner, "beforeUpdate", () => {
      const gravity = this.engine.world.gravity;
      const x = ball.position.x;
      const y = ball.position.y;
      let _x = 0;
      let _y = 14;

      ball.friction = 0.04;
      ball.frictionAir = 0.06;

      if (x < 150) _x = 0.006;
      if (x < 210) _x = 0.003;
      if (x < 250) _x = 0.001;
      if (x < 255) _x = 0.0005;
      if (x > 265) _x = -0.0005;
      if (x > 270) _x = -0.001;
      if (x > 310) _x = -0.003;
      if (x > 370) _x = -0.006;
      if (y < 82) _y = 6;

      this.Body.applyForce(ball, ball.position, {
        x: _x,
        y: -gravity.y * gravity.scale * ball.mass * _y,
      });
    });

    await sleep(900);

    // Eliminar Evento
    this.Events.off(this.runner, "beforeUpdate");

    /*
      ||                             ||
      ||-----------------------------||
      ||                             ||
      ||  Eliminar Esfera del array  ||
      ||              ↓              ||
      ||-----------------------------||
      ||                             ||
      ||                             ||
      ||                             ||
      ||                             ||
      ||                             ||
    */

    // Eliminar esfera del Canvas & Array
    this.World.remove(this.engine.world, this.balls[id]);

    const filterBall = this.balls.filter((value) => value.id !== e);
    this.balls = filterBall;

    // Efecto de entrada/Salida/Css
    if (this.count > 6) {
      $(".tube img").eq(0).fadeOut(200);
      await sleep(200);
      $(".tube img").eq(0).remove();
    } else this.count++;

    $(".tube").append(`<img class="newBall" src="${this.ballImagePaths[e]}" draggable='false' />`);
    await sleep(20);

    $(".newBall").attr("class", "into");
    await sleep(650);

    async function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }

  static stop() {
    this.ballState.forEach((value) => (value.air = false));
  }
}
