var logo, logoImage, title, titleImage, jeff, jeffImage;
var bk1Image, bk2Image, bk3Image, bk4Image, bk5Image;
var gameOver, gameOverImage, gameWonImage, winSound, loseSound;
var w1, w2, w3, w4, swImage; //windows
var gun, g1Image, g2Image, g3Image, g4Image, g5Image, r, r1Image, r2Image, r3Image, r4Image, r5Image, pistolShot, shotgunShot, arShot, sniperShot, minigunShot; //guns and retical and gunshot
var gunSound, gunRetical;
var civ1, civ1Image, civ2Image, e1, e1Image, e2Image, h1, h1Image, h2Image, hkiller, hkillerImage; // civ=civilians, e=enemy, h=hostages, hkiller=hostage killer/holder
var civiliang, enemyg, hostageg, hostagekillerg, windowsg; //groups
var score = 0;
var killCount = 0, enemyCount = 0;
var bkmusic, musicbtn, mutebtnImg, unmutebtnImg;
var l1winpos
var gameState = "play"
var level = 1


function preload() {
  logoImage = loadImage("Images/TheRavenousWolfLogo.png");
  titleImage = loadImage("Images/HystericalHeatersTitle.png");
  bk1Image = loadImage("Images/PopArtBlueGrungeBrickWall.jpg");
  bk2Image = loadImage("Images/PopArtRedGrungeBrickWall.png");
  bk3Image = loadImage("Images/PopArtGreenGrungeBrickWall.png");
  bk4Image = loadImage("Images/PopArtYellowGrungeBrickWall.png");
  bk5Image = loadImage("Images/PopArtGreyGrungeBrickWall.png");
  swImage = loadImage("Images/SingularWindow.png")
  g1Image = loadImage("Images/G1.png")
  g2Image = loadImage("Images/G2.png")
  g3Image = loadImage("Images/G3.png")
  g4Image = loadImage("Images/G4.png")
  g5Image = loadImage("Images/G5.png")
  pistolShot = loadSound("Sounds/Pistolshot.mp3")
  shotgunShot = loadSound("Sounds/shotgunshot+reload.mp3.crdownload")
  arShot = loadSound("Sounds/ARshots.mp3")
  sniperShot = loadSound("Sounds/Snipershot.mp3")
  minigunShot = loadSound("Sounds/minigunshots.mp3.crdownload")
  bkmusic = loadSound("Sounds/Powerful-Trap-.mp3")
  r1Image = loadImage("Images/Retical1.png")
  r2Image = loadImage("Images/Retical2.png")
  r3Image = loadImage("Images/Retical3.png")
  r4Image = loadImage("Images/Retical4.png")
  r5Image = loadImage("Images/Retical5.png")
  civ1Image = loadImage("Images/Civ1.png")
  civ2Image = loadImage("Images/Civ2.png")
  e1Image = loadImage("Images/Enemy1.png")
  e2Image = loadImage("Images/Enemy2.png")
  h1Image = loadImage("Images/Hostage1.png")
  h2Image = loadImage("Images/Hostage2.png")
  hkillerImage = loadImage("Images/HostageKiller.png")
  jeffImage = loadImage("Images/ManPointingtotheRight.png")
  gameOverImage = loadImage("Images/GameOverPopArt.jpg")
  gameWonImage = loadImage("Images/YouWin.jpg")
  winSound = loadSound("Sounds/SexySaxophone.mp3")
  loseSound = loadSound("Sounds/windowsshutdown.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // w4= createSprite(width/2,height/2)
  //w4.addImage(windowsImg)
  // w4.scale = 1.7;
  frameRate(30)
  console.log(frameCount)

  bkmusic.play();
  bkmusic.setVolume(0.5);

  musicbtn = createImg("Images/unmutebtn.png");
  musicbtn.position(120, 20)
  musicbtn.size(70, 70)
  musicbtn.mouseClicked(mute);

  //musicbtn.addAnimation("mute",mutebtnImg);
  //musicbtn.addAnimation("unmute",unmutebtnImg);
  //musicbtn.changeAnimation("mute",mutebtnImg);


  civiliang = new Group()
  enemyg = new Group()
  hostageg = new Group()
  hostagekillerg = new Group()
  windowsg = new Group()

  logo = createSprite(55, 55)
  logo.addImage(logoImage)
  logo.scale = 0.20;

  title = createSprite(width / 2, height - 80)
  title.addImage(titleImage)
  title.scale = 1.4;

  jeff = createSprite(width/2-520,height-89)
  jeff.addImage(jeffImage)
  jeff.scale = 0.5;

  gunSound = pistolShot

  gun = createSprite(width / 2, height - 130)
  gun.addImage("l1gImg",g1Image)
  gun.addImage("l2gImg",g2Image)
  gun.addImage("l3gImg",g3Image)
  gun.addImage("l4gImg",g4Image)
  gun.addImage("l5gImg",g5Image)
  gun.scale = 1.8


  spot = createSprite(World.mouseX, World.mouseY)
  spot.addImage("l1rImg",r1Image)
  spot.addImage("l2rImg",r2Image)
  spot.addImage("l3rImg",r3Image)
  spot.addImage("l4rImg",r4Image)
  spot.addImage("l5rImg",r5Image)
  spot.scale = 0.40;

  w1 = createSprite(190, height / 2)
  w1.addImage(swImage)
  w1.scale = 0.75;
  w1.depth = gun.depth
  w1.depth = spot.depth
  windowsg.add(w1)

  w2 = createSprite(width / 2 - 200, height / 2)
  w2.addImage(swImage)
  w2.scale = 0.75;
  w2.depth = spot.depth
  windowsg.add(w2)

  w3 = createSprite(width / 2 + 185, height / 2)
  w3.addImage(swImage)
  w3.scale = 0.75;
  w3.depth = gun.depth
  w3.depth = spot.depth
  windowsg.add(w3)

  w4 = createSprite(width - 205, height / 2)
  w4.addImage(swImage)
  w4.scale = 0.75;
  w4.depth = gun.depth
  w4.depth = spot.depth
  windowsg.add(w4)

  gun.depth = gun.depth + 2
  spot.depth = spot.depth + 1


  l1winpos = [{ x: 190, y: height / 2 }, { x: width / 2 - 200, y: height / 2 }, { x: width / 2 + 185, y: height / 2 }, { x: width - 205, y: height / 2 }]
}

function draw() {

  //console.log(frameCount)
  background(180);

  if (gameState === "play") {
    if (level === 1) {
      image(bk1Image, 0, 0, width, height)
      if (score >= 300) {
        level = 2
        gun.changeImage("l2gImg")
        gun.scale = 1
        spot.changeImage("l2rImg")
        spot.scale = 1
        gunSound = shotgunShot
      }
    }
    if (level == 2) {
      image(bk2Image, 0, 0, width, height)
      if (score >= 600) {
        level = 3
        gun.changeImage("l3gImg")
        gun.scale = 1.8
        spot.changeImage("l3rImg")
        spot.scale = 0.5
        gunSound = arShot
      }
     /* if (score <= 600) {
        level = 2
      }*/
    }
    if (level == 3) {
      image(bk3Image, 0, 0, width, height)
      if (score >= 900) {
        level = 4
        gun.changeImage("l4gImg")
        gun.scale = 0.7
        spot.changeImage("l4rImg")
        spot.scale = 0.3
        gunSound = sniperShot
      }
      /*if (score <= 900) {
        level = 3
      }*/
    }
    if (level == 4) {
      image(bk4Image, 0, 0, width, height)
      if (score >= 1200) {
        level = 5
        gun.changeImage("l5gImg")
        gun.scale = 1.2
        spot.changeImage("l5rImg")
        spot.scale = 1
        gunSound = minigunShot
      }
      /*if (score <= 1200) {
        level = 4
      }*/
    }
    if (level == 5) {
      image(bk5Image, 0, 0, width, height)
      if (score >= 1500) {
        level = 6
        gameState = "win"
      }
    }
    gun.x = mouseX

    spot.x = mouseX;
    spot.y = mouseY;



    var r = Math.round(random(1, 3))
    if (r === 1) {
      spawncivilians()
    } else if (r == 2) {
      spawnenemys()
    }
    else {
      spothostage()
    }

    if (enemyCount - killCount > 5) {
      gameState = "end"
    }
    /*if (keyIsDown("p")) {
      gameState="pause"
    }*/
    drawSprites();

  }
  /*if (gameState === "pause") {
    if (keyIsDown("p")) {
      gameState = "play"
    }
  }*/
  if (gameState === "end") {
    console.log("Game Over")
    image(gameOverImage, 0, 0, width, height)
    bkmusic.setVolume(0)
    loseSound.play()
    loseSound.setVolume(5)
    windowsg.destroyEach()
    civiliang.destroyEach()
    enemyg.destroyEach()
    hostageg.destroyEach()
    hostagekillerg.destroyEach()
    gun.destroy()
    spot.destroy()
    musicbtn.destroy()
  }

  if (gameState === "win") {
    console.log("You Win!!!")
    image(gameWonImage, 0, 0, width, height)
    bkmusic.setVolume(0)
    winSound.play();
    winSound.setVolume(5);
    windowsg.destroyEach()
    civiliang.destroyEach()
    enemyg.destroyEach()
    hostageg.destroyEach()
    hostagekillerg.destroyEach()
    gun.destroy()
    spot.destroy()
    musicbtn.destroy()
  }
  textSize(25);
  fill("black")
  stroke("white")
  strokeWeight(2)
  text("Score: " + score, width - 200, 50)


}

function spawncivilians() {

  if (frameCount % 230 === 0) {
    var pos = random(l1winpos)
    civ1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: civ1.addImage(civ1Image);
        civ1.scale = 0.48;
        break;
      case 2: civ1.addImage(civ2Image);
        civ1.scale = 0.47;
        break;
      default: break;
    }

    civ1.lifetime = 100

    civ1.depth = gun.depth
    gun.depth = gun.depth + 1
    spot.depth = spot.depth + 1

    civiliang.add(civ1)
  }

}

function spawnenemys() {

  if (frameCount % 120 === 0) {
    var pos = random(l1winpos)
    e1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: e1.addImage(e1Image);
        e1.scale = 0.9;
        break;
      case 2: e1.addImage(e2Image);
        e1.scale = 0.9;
        break;
      default: break;
    }
    e1.lifetime = 150

    e1.depth = gun.depth
    gun.depth = gun.depth + 1
    spot.depth = spot.depth + 1

    enemyg.add(e1)
    enemyCount++
  }

}


function spothostage() {

  if (frameCount % 300 === 0) {
    var pos = random(l1winpos)
    h1 = createSprite(pos.x + 35, pos.y + 6)
    hkiller = createSprite(pos.x - 49, pos.y - 20)
    hkiller.addImage(hkillerImage);
    hkiller.scale = 0.5;
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: h1.addImage(h1Image);
        h1.scale = 0.97;
        break;
      case 2: h1.addImage(h2Image);
        h1.scale = 0.91;
        break;
      default: break;
    }

    h1.lifetime = 300
    hkiller.lifetime = 300

    h1.depth = gun.depth
    hkiller.depth = gun.depth
    gun.depth = gun.depth + 1
    spot.depth = spot.depth + 1

    hostageg.add(h1)
    hostagekillerg.add(hkiller)

    enemyCount++
  }

}

function mouseClicked() {

  gunSound.play()
  gunSound.setVolume(2)

  if (enemyg.isTouching(spot)) {
    score = score + 100
    enemyg.destroyEach()
    killCount++
  }

  if (hostagekillerg.isTouching(spot)) {
    score = score + 100
    hostagekillerg.destroyEach()
    hostageg.destroyEach()
    killCount++
  }

  if (civiliang.isTouching(spot)) {
    score = score - 200
    civiliang.destroyEach()
  }

  if (hostageg.isTouching(spot)) {
    score = score - 150
    hostageg.destroyEach()
    hostagekillerg.destroyEach()
  }

}

function mute() {
  if (bkmusic.isPlaying()) {
    bkmusic.stop();
  }
  else {
    bkmusic.play();
  }
}