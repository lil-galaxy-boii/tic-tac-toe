// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var clickedCircle1 = 0
var currentShape = "circle"
function leftLeftShape() {
var canvas= document.getElementById  ("game-board")
if (currentShape == "circle") {
var circle = document.createElementNS (namespace,"circle")
circle.setAttribute ("cx",45)
circle.setAttribute ("cy",47)
circle.setAttribute ("r",20)
circle.setAttribute ("fill","red")
canvas.appendChild(circle)
clickedCircle1 = 1
currentShape = "skinnyRect"
} else {
  var clickedRect1 = 0
 var skinnyRect = document.createElementNS (namespace, "rect")
  skinnyRect.setAttribute ("x",23)
  skinnyRect.setAttribute ("y",25)
  skinnyRect.setAttribute ("width",45)
  skinnyRect.setAttribute ("height",45)
  skinnyRect.setAttribute ("fill","orange")
  canvas.appendChild(skinnyRect)
  currentShape = "circle"
  clickedRect1 = 1
  }
}
var clickedCircle2 = 0
var currentShape = "smallmoon"
function midLeftShape() {
var canvas= document.getElementById  ("game-board")
if (currentShape == "smallmoon") {
var smallmoon = document.createElementNS (namespace,"circle")
smallmoon.setAttribute ("cx",145)
smallmoon.setAttribute ("cy",47)
smallmoon.setAttribute ("r",20)
smallmoon.setAttribute ("fill","red")
canvas.appendChild(smallmoon)
clickedCircle2 = 1
currentShape = "orangebox"
} else {
  clickedRect2 = 0
 var orangebox = document.createElementNS (namespace, "rect")
  orangebox.setAttribute ("x",123)
  orangebox.setAttribute ("y",25)
  orangebox.setAttribute ("width",45)
  orangebox.setAttribute ("height",45)
  orangebox.setAttribute ("fill","orange")
  canvas.appendChild(orangebox)
  currentShape = "smallmoon"
  clickedRect2 = 1
  }
}
var clickedCircle3 = 0
var currentShape = "smallCherry"
function rightLeftShape() {
var canvas= document.getElementById  ("game-board")
if (currentShape == "smallCherry") {
var smallCherry = document.createElementNS (namespace,"circle")
smallCherry.setAttribute ("cx",245)
smallCherry.setAttribute ("cy",47)
smallCherry.setAttribute ("r",20)
smallCherry.setAttribute ("fill","red")
canvas.appendChild(smallCherry)
clickedCircle3 = 1
currentShape = "boxFruit"
} else {
  clickedRect3 = 0
 var boxFruit = document.createElementNS (namespace, "rect")
  boxFruit.setAttribute ("x",223)
  boxFruit.setAttribute ("y",25)
  boxFruit.setAttribute ("width",45)
  boxFruit.setAttribute ("height",45)
  boxFruit.setAttribute ("fill","orange")
  canvas.appendChild(boxFruit)
  currentShape = "smallCherry"
  clickedRect3 = 1
  }
}
