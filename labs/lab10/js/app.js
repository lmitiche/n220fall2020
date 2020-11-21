function badWord() {

    var wordInput = document.getElementById("wordInput").value;
  
    //splits words with spaces
    var arr = wordInput.split(" ");
    //the three bad words
    var badWords = ["clear", "water", "tires"];
    //filtering for the bad words
    var foundBadWords = arr.filter(el => badWords.includes(el));

    for (var i = 0; i <arr.length; i++){
        for(var j = 0; j< badWords.length; j++){
            if(arr[i] == badWords[j]) {
                document.getElementById("wordAmount").innerHTML = foundBadWords.length;
            }
        }
    }

    document.getElementById("wordsFound").innerHTML = foundBadWords.join(" , ");
    
    
    
  }
