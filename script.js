var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

function generateFaces(){
  for(var i = 0; i < numberOfFaces; i++){
    img = document.createElement("IMAGE");
    img.src = "smile.png";
    img.style.top = Math.floor(Math.random() * 401) + "px";
    img.style.left = Math.floor(Math.random() * 401) + "px";
    theLeftSide.appendChild(img);
  }
}
generateFaces();
