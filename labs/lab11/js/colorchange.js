var elements = document.getElementsByClassName('listener');
var i;

for (i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('click', changeColor)  
}

function changeColor() {
    this.style.backgroundColor = this.getAttribute('data-color');
}


let dvSquareOne = document.getElementById("squareOne");
dvSquareOne.style.backgroundColor = "#e0e0da"
dvSquareOne.style.height = "200px";
dvSquareOne.style.width = "200px"; 
dvSquareOne.style.margin = "5px";




document.getElementById('squareTwo').addEventListener('click', changeColor);
let dvSquareTwo = document.getElementById("squareTwo");
dvSquareTwo.style.backgroundColor = "#e0e0da"
dvSquareTwo.style.height = "200px";
dvSquareTwo.style.width = "200px"; 
dvSquareTwo.style.margin = "5px";




document.getElementById('squareThree').addEventListener('click', changeColor);
let dvSquareThree = document.getElementById("squareThree");
dvSquareThree.style.backgroundColor = "#e0e0da"
dvSquareThree.style.height = "200px";
dvSquareThree.style.width = "200px"; 
dvSquareThree.style.margin = "5px";





