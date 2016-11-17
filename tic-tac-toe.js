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
