cx = 0
cy = 0
function drawCharacter() {
    writeCharToXY("x","#000000",cx,cy)
    writeCharToXY("_","#000000",cx+1,cy)
    writeCharToXY("x","#000000",cx+2,cy)
}

function moveCharacter(direction) {
  if (direction == "up") {
    cy -= 1
    writeCharToXY(" ","#000000",cx,cy+1)
    writeCharToXY(" ","#000000",cx+1,cy+1)
    writeCharToXY(" ","#000000",cx+2,cy+1)
  }
  if (direction == "down") {
    cy += 1
    writeCharToXY(" ","#000000",cx,cy-1)
    writeCharToXY(" ","#000000",cx+1,cy-1)
    writeCharToXY(" ","#000000",cx+2,cy-1)
  }
  if (direction == "left") {
    cx -= 1
    writeCharToXY(" ","#000000",cx+3,cy)
  }
  if (direction == "right") {
    cx += 1
    writeCharToXY(" ","#000000",cx-1,cy)
  }
  drawCharacter()
}

document.onkeydown = function(e){
    if (e.key == "ArrowDown") {moveCharacter("down")}
    if (e.key == "ArrowUp") {moveCharacter("up")}
    if (e.key == "ArrowLeft") {moveCharacter("left")}
    if (e.key == "ArrowRight") {moveCharacter("right")}
}
