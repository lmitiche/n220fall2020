//Variables defined to hold card array data

var memoryArr = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var memoryValues = [];
var memoryCardIds = [];
var tiles_flipped = 0;

//Shuffles the card values

Array.prototype.memory_shuffle = function(){

var i = this.length, j, temp;

    while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;

}

}

//Function created to flip card and find matches

function flipCard(cardTile, val){debugger;

if(cardTile.innerHTML == "" && memoryValues.length < 2){

cardTile.innerHTML = val;

if(memoryValues.length == 0){

memoryValues.push(val);

memoryCardIds.push(cardTile.id);

} else if(memoryValues.length == 1){

memoryValues.push(val);

memoryCardIds.push(cardTile.id);

if(memoryValues[0] == memoryValues[1]){

tiles_flipped += 2;

memoryValues = [];

memoryCardIds = [];

// If statement checking whether board has been cleared

if(tiles_flipped == memoryArr.length){

alert("Winner!");

}

} else {

function flip2Back(){

// Cards are flipped back over

var tileOne = document.getElementById(memoryCardIds[0]);

var tileTwo = document.getElementById(memoryCardIds[1]);

tileOne.innerHTML = "";

tileTwo.innerHTML = "";

memoryValues = [];

memoryCardIds = [];

}

// Both selected cards are kept face up and visible before hiding
setTimeout(flip2Back, 700);

}
    }
        }
            }


function LoadElements(){

    memoryArr.memory_shuffle();
    var card = document.querySelectorAll(".card");

//loops through cards

    for(var i = 0; i < card.length; i++) {
    card[i].setAttribute("id", "card_" + i + "_" + memoryArr[i]);
}

}


document.addEventListener('DOMContentLoaded', function() {
document.body.addEventListener('click', function ( event ) {

    if(event.srcElement.className == 'card' ) { 
    var idElement = event.srcElement.id.split("_");

    flipCard(event.srcElement, idElement[2]);

};

});

});