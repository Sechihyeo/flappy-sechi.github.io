const canvas = document.getElementById("canvas")
let ctx

if (!canvas.getContext) { canvas.remove() }

let Y, Yv, scene

let TukimX = [360, 560, 760]
let TukimY = [Math.floor(Math.random()*110), Math.floor(Math.random()*110), Math.floor(Math.random()*110)]

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

  Y = 0
  Yv = 0

  scene = 1
  
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
  drawTukim(posX, posY+170, 1)
}

function scene1(){
  ctx = canvas.getContext('2d')

  ctx.imageSmoothingEnabled = false
  
  //logic
  Y += Yv
  Yv += 1

  if (Y >= 490 || Y < 0) scene = 2
  //draw
  
  ctx.clearRect(0, 0, 360, 540)
  ctx.drawImage(main, 60, Y, 50, 50)

  Tukim(0,100)
  

}

function scene2(){
  ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.clearRect(0, 0, 360, 540)
  ctx.font = "30px Arial"
  ctx.fillText("U ded", 150, 270)
}
