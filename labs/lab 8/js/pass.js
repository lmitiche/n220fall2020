let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvResult = document.getElementById("dvResults");
dvResult.innerHTML = "Insert Password"

function checkInput(){
    if( txtUsername.value == "Username" && txtPassword.value == "Password"){
       dvResult.innerHTML = "Success"
    } else{
        dvResult.innerHTML = "Wrong Information"
    }
}