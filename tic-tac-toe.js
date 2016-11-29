// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = player1
var currentShape = "circle"
function leftLeftShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var circle = document.createElementNS (namespace,"circle")
circle.setAttribute ("cx",45)
circle.setAttribute ("cy",47)
circle.setAttribute ("r",20)
circle.setAttribute ("fill","red")
canvas.appendChild(circle)
turn = "player2"
} else {
 var skinnyRect = document.createElementNS (namespace, "rect")
  skinnyRect.setAttribute ("x",23)
  skinnyRect.setAttribute ("y",25)
  skinnyRect.setAttribute ("width",45)
  skinnyRect.setAttribute ("height",45)
  skinnyRect.setAttribute ("fill","orange")
  canvas.appendChild(skinnyRect)
  turn = "player1"
  }
}
var turn = "player1"
var currentShape = "smallmoon"
function midLeftShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var smallmoon = document.createElementNS (namespace,"circle")
smallmoon.setAttribute ("cx",145)
smallmoon.setAttribute ("cy",47)
smallmoon.setAttribute ("r",20)
smallmoon.setAttribute ("fill","red")
canvas.appendChild(smallmoon)
turn = "player2"
} else {
 var orangebox = document.createElementNS (namespace, "rect")
  orangebox.setAttribute ("x",123)
  orangebox.setAttribute ("y",25)
  orangebox.setAttribute ("width",45)
  orangebox.setAttribute ("height",45)
  orangebox.setAttribute ("fill","orange")
  canvas.appendChild(orangebox)
  turn = "player1"
  }
}
var turn = "player1"
var currentShape = "smallCherry"
function rightLeftShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var smallCherry = document.createElementNS (namespace,"circle")
smallCherry.setAttribute ("cx",245)
smallCherry.setAttribute ("cy",47)
smallCherry.setAttribute ("r",20)
smallCherry.setAttribute ("fill","red")
canvas.appendChild(smallCherry)
turn= "player2"
} else {
 var boxFruit = document.createElementNS (namespace, "rect")
  boxFruit.setAttribute ("x",223)
  boxFruit.setAttribute ("y",25)
  boxFruit.setAttribute ("width",45)
  boxFruit.setAttribute ("height",45)
  boxFruit.setAttribute ("fill","orange")
  canvas.appendChild(boxFruit)
turn = "player1"
  }
}
var turn = player1
var currentShape = "orb"
function leftMidShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var orb = document.createElementNS (namespace,"circle")
orb.setAttribute ("cx",45)
orb.setAttribute ("cy",147)
orb.setAttribute ("r",20)
orb.setAttribute ("fill","red")
canvas.appendChild(orb)
turn = "player2"
} else {
 var notSquare = document.createElementNS (namespace, "rect")
  notSquare.setAttribute ("x",23)
  notSquare.setAttribute ("y",125)
  notSquare.setAttribute ("width",45)
  notSquare.setAttribute ("height",45)
  notSquare.setAttribute ("fill","orange")
  canvas.appendChild(notSquare)
  turn = "player1"
  }
}
var turn = "player1"
var currentShape = "smallCherry"
function rightLeftShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var smallCherry = document.createElementNS (namespace,"circle")
smallCherry.setAttribute ("cx",245)
smallCherry.setAttribute ("cy",47)
smallCherry.setAttribute ("r",20)
smallCherry.setAttribute ("fill","red")
canvas.appendChild(smallCherry)
turn= "player2"
} else {
 var boxFruit = document.createElementNS (namespace, "rect")
  boxFruit.setAttribute ("x",223)
  boxFruit.setAttribute ("y",25)
  boxFruit.setAttribute ("width",45)
  boxFruit.setAttribute ("height",45)
  boxFruit.setAttribute ("fill","orange")
  canvas.appendChild(boxFruit)
turn = "player1"
  }
}
var turn = player1
var currentShape = "eyeball"
function rightMidShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var eyeball = document.createElementNS (namespace,"circle")
eyeball.setAttribute ("cx",245)
eyeball.setAttribute ("cy",147)
eyeball.setAttribute ("r",20)
eyeball.setAttribute ("fill","red")
canvas.appendChild(eyeball)
turn = "player2"
} else {
 var toot = document.createElementNS (namespace, "rect")
  toot.setAttribute ("x",223)
  toot.setAttribute ("y",125)
  toot.setAttribute ("width",45)
  toot.setAttribute ("height",45)
  toot.setAttribute ("fill","orange")
  canvas.appendChild(toot)
  turn = "player1"
  }
}
var turn = "player1"
var currentShape = "apple"
function midMidShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var apple = document.createElementNS (namespace,"circle")
apple.setAttribute ("cx",145)
apple.setAttribute ("cy",147)
apple.setAttribute ("r",20)
apple.setAttribute ("fill","red")
canvas.appendChild(apple)
turn= "player2"
} else {
 var chunk = document.createElementNS (namespace, "rect")
  chunk.setAttribute ("x",123)
  chunk.setAttribute ("y",125)
  chunk.setAttribute ("width",45)
  chunk.setAttribute ("height",45)
  chunk.setAttribute ("fill","orange")
  canvas.appendChild(chunk)
turn = "player1"
  }
}
var turn = player1
var currentShape = "help"
function leftBottomShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var help = document.createElementNS (namespace,"circle")
help.setAttribute ("cx",45)
help.setAttribute ("cy",247)
help.setAttribute ("r",20)
help.setAttribute ("fill","red")
canvas.appendChild(help)
turn = "player2"
} else {
 var me = document.createElementNS (namespace, "rect")
  me.setAttribute ("x",23)
  me.setAttribute ("y",225)
  me.setAttribute ("width",45)
  me.setAttribute ("height",45)
  me.setAttribute ("fill","orange")
  canvas.appendChild(me)
  turn = "player1"
  }
}
var turn = player1
var currentShape = "detergent"
function midBottomShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var detergent = document.createElementNS (namespace,"circle")
detergent.setAttribute ("cx",145)
detergent.setAttribute ("cy",247)
detergent.setAttribute ("r",20)
detergent.setAttribute ("fill","red")
canvas.appendChild(detergent)
turn = "player2"
} else {
 var assist = document.createElementNS (namespace, "rect")
  assist.setAttribute ("x",123)
  assist.setAttribute ("y",225)
  assist.setAttribute ("width",45)
  assist.setAttribute ("height",45)
  assist.setAttribute ("fill","orange")
  canvas.appendChild(assist)
  turn = "player1"
  }
}
var turn = player1
var currentShape = "sun"
function rightBottonmShape() {
var canvas= document.getElementById  ("game-board")
if (turn == "player1") {
var sun = document.createElementNS (namespace,"circle")
sun.setAttribute ("cx",245)
sun.setAttribute ("cy",247)
sun.setAttribute ("r",20)
sun.setAttribute ("fill","red")
canvas.appendChild(sun)
turn = "player2"
} else {
 var corn = document.createElementNS (namespace, "rect")
  corn.setAttribute ("x",223)
  corn.setAttribute ("y",225)
  corn.setAttribute ("width",45)
  corn.setAttribute ("height",45)
  corn.setAttribute ("fill","orange")
  canvas.appendChild(corn)
  turn = "player1"
  }
}
