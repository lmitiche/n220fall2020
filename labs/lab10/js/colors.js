var objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

for (var i = 0; i< objects.length; i ++){
    var newDv = document.createElement("div");
    newDv.style.height = objects[i].height;
    newDv.style.width = objects[i].height;
    newDv.style.backgroundColor = objects[i].color;

    document.body.appendChild(newDv);
}