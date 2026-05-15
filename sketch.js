// await Canvas();
  
// let tank = new Sprite();
// tank.img = 'Images/Tank.png';
  
// crosshair = new Sprite();
// crosshair.img = 'Images/Crosshair.png';
// crosshair.follow(mouse);

await Canvas(80, 128);
world.gravity.y = 10;

let ball = new Sprite(0, -50, 50);

let floor = new Sprite(0, 50, 80, 5, STA);
