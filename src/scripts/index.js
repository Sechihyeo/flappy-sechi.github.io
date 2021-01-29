const canvas = document.getElementById("canvas")
let ctx

if (!canvas.getContext) { canvas.remove() }

let Y, Yv, scene, TukimX, TukimY, scoreGiven, score
const main = new Image()
const tukim_high = new Image()
const tukim_mid = new Image()
const tukim_bottom = new Image()


init()

function init(){
  main.src = 'src/sprites/main.png'
  tukim_high.src = 'src/sprites/tukim_high.png'
  tukim_mid.src = "src/sprites/tukim_mid.png"
  tukim_bottom.src = "src/sprites/tukim_bottom.png"

  scene = 1

  

  gameStart()
  setInterval(loop, 20)

  let cool = false
  document.addEventListener('click', function() { Yv = -10 })
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
      if (cool) return
      Yv = -10
      cool = true
    }
  })
  document.addEventListener('keyup', function(event) { if(event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) return cool = false })
}

function gameStart(){
  TukimX = [360, 560, 760]
  TukimY = [Math.floor(Math.random()*290), Math.floor(Math.random()*290), Math.floor(Math.random()*290)]
  Y = 0
  Yv = 0
  scoreGiven = false
  score = 0
}


function loop(){
  switch (scene) {
    case 1: {
      scene1()
      break
    }
    case 2: {
      scene2()
      break
    }
  }
}


function drawTukim(posX, posY, type){
  switch(type){
    case 1: {
      ctx.drawImage(tukim_high, posX, posY, 50, 50)
      for(i = 0; i < 8; i++){
        ctx.drawImage(tukim_mid, posX, posY + (i+1) * 50, 50, 50)
      }
      break
    }
    case 0: {
      ctx.drawImage(tukim_bottom, posX, posY, 50, 50)
      for(i = 0; i < 8; i++){
        ctx.drawImage(tukim_mid, posX, posY + (i+1) * -50, 50, 50)
      }
      break
    }
  }
}
function Tukim(posX, posY){
  drawTukim(posX, posY, 0)
  drawTukim(posX, posY+185, 1)
}

function scene1(){
  ctx = canvas.getContext('2d')

  ctx.imageSmoothingEnabled = false
  
  //logic
  Y += Yv
  Yv += 1

  if (Y >= 490 || Y < 0) { scene = 2 }

  for (tukim_logic = 0; tukim_logic < 3; tukim_logic++){
    if (TukimX[tukim_logic] < -250){
      TukimX[tukim_logic] = 360
      TukimY[tukim_logic] = Math.floor(Math.random()*290)
      scoreGiven = false
    }
    else {TukimX[tukim_logic] -= 2}
  }
  for (tukim_collision = 0; tukim_collision < 3; tukim_collision++){
    if (TukimX[tukim_collision] - 50 < 60 && TukimX[tukim_collision] + 50 > 60){
      if (Y < TukimY[tukim_collision] + 50 || Y > TukimY[tukim_collision] + 135){
        scene = 2
        Yv = 0
      }
      else{
        if (score == 1 && tukim_collision == 1) {score = 2}
        if (!scoreGiven){
          score ++
          scoreGiven = true
        }
        
      }
    }
  }

  //draw
  
  ctx.clearRect(0, 0, 360, 540)
  ctx.drawImage(main, 60, Y, 50, 50)

  for (tukim_draw = 0; tukim_draw < 3; tukim_draw++) {
    Tukim(TukimX[tukim_draw], TukimY[tukim_draw])
  }
  
  ctx.font = "30px Arial"
  ctx.fillText(score, 170, 100)
}

function scene2(){
  ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false

  ctx.clearRect(0, 0, 360, 540)

  for (tukim_draw = 0; tukim_draw < 3; tukim_draw++) {
    Tukim(TukimX[tukim_draw], TukimY[tukim_draw])
  }
  
  ctx.fillStyle = "rgb(0,255,255)"
  ctx.fillRect(140, 240, 100, 40)

  ctx.fillStyle = "rgb(0,0,0)"
  ctx.font = "30px Arial"
  ctx.fillText("U ded", 150, 270)
}
