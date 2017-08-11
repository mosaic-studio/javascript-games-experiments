var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

RIGHT = 1;
LEFT = 2;
ARROW_MARGIN = 10;
BALL_RADIUS   = 23;
LEDGE_LEFT   = 280;
LEDGE_TOP    = 55;
LEDGE_WIDTH  = 50;
LEDGE_HEIGHT = 12;

GRAVITY_FORCE = 9.81;  // 9.81 m/s / s

lastTime = 0;
fps = 60;
arrow = LEFT;


ball = new Sprite('ball',
    {
        paint: function (sprite, context) {
            context.save();
            context.beginPath();
            context.arc(sprite.left + sprite.width/2, sprite.top + sprite.height/2,
                BALL_RADIUS, 0, Math.PI*2, false);
            context.clip();

            context.shadowColor = 'rgba(0,0,255,0.7)';
            context.shadowOffsetX = -4;
            context.shadowOffsetY = -4;
            context.shadowBlur = 8;

            context.lineWidth = 2;
            context.strokeStyle = 'rgba(100,100,195,0.8)';
            context.stroke();

            context.beginPath();
            context.arc(sprite.left + sprite.width/2, sprite.top + sprite.height/2,
                BALL_RADIUS/2, 0, Math.PI*2, false);
            context.clip();

            context.shadowColor = 'rgba(255,255,0,1.0)';
            context.shadowOffsetX = -4;
            context.shadowOffsetY = -4;
            context.shadowBlur = 8;
            context.stroke();

            context.restore();
        }
    },

    [  ]
);

ball.paint(context);
