await Canvas();
  
let tank = new Sprite();
tank.img = 'Images/Tank.png';
  
crosshair = new Sprite();
crosshair.img = 'Images/Crosshair.png';
crosshair.follow(mouse);
