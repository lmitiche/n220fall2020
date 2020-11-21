function badWord() {

    var wordInput = document.getElementById("wordInput").value;
    

    var arr = wordInput.split(" ");

    var badWords = ["clear", "water", "tires"];

    var foundBadWords = arr.filter(any => badWords.includes(any));

   
    document.getElementById("wordAmount").innerHTML = foundBadWords.length;
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(" , ");
    
    
    
  }
