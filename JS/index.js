var circle = document.getElementById("circle");
var up = document.getElementById("up");
var down = document.getElementById("down");

var rotateValue = circle.style.transform;
var rotateSum;

up.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

down.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}