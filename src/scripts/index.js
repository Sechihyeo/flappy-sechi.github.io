const canvas = document.getElementById("canvas")
let ctx

//if (canvas.getContext) { ctx = canvas.getContext('2d') } else { canvas.remove() }

let Y, Yv, scene
const main, tukim_high, tukim_mid, tukim_bottom = new Image()

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
      draw1()
      break
    }
    case 2: {
      draw2()
      break
    }
  }
}

function draw1(){
  ctx = canvas.getContext('2d')

  ctx.imageSmoothingEnabled = false
  
  //logic
  Y += Yv
  Yv += 1

  if (Y >= 490 || Y < 0) scene = 2
  //draw
  
  ctx.clearRect(0, 0, 360, 540)
  ctx.drawImage(main, 60, Y, 50, 50)
  
}

function draw2(){
  ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.clearRect(0, 0, 360, 540)
  ctx.font = "30px Arial"
  ctx.fillText("U ded", 150, 270)
}
