function myFunction(clicked) {
    if (clicked=="Los Angeles Lakers")
        document.getElementById("answer").innerHTML = "Correct: "+clicked; 
    else
    document.getElementById("answer").innerHTML = "Incorrect. The right answer is: Los Anegeles Lakers"; 
}        