let dvCard = document.getElementById("card");

dvCard.innerHTML = "Spades"
dvCard.style.backgroundColor = "#db3d12"
dvCard.style.height = "300px";
dvCard.style.width = "200px"; 

function flipCard() {
    let flip = Math.random();
    let side = "Hearts";
    if (flip > .5) side = "Spades";
    dvCard.innerHTML = side;
    
    if (side == "Spades"){
        dvCard.style.backgroundColor = "#db3d12";
    } else {
        dvCard.style.backgroundColor = "#1262db";
    }
    
}