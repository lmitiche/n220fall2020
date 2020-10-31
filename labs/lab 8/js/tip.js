
let txtSubtotal = document.getElementById("txtSubtotal");

function calcTip(){
    let tipAmount = Number(txtSubtotal.value) * 0.1;
    let totalAmount = Number(txtSubtotal.value) + tipAmount;
    console.log("tip $"+ tipAmount + "total $" + totalAmount);

}


