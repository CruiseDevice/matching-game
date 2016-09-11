console.log("test");
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

var theRightSide = document.getElementById("rightSide");

//this points to the body
var theBody = document.getElementsByTagName("body")[0];

/*function setBackground(){
	document.body.style.backgroundImage = "url('../img/bg21.jpg')";
}*/


function generateFaces() {
    for (i = 0; i < numberOfFaces; ++ i) {
        elem_img = document.createElement("img");
        elem_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
        elem_img.style.top = Math.floor(Math.random() * 401) + "px";
        elem_img.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(elem_img);
    }
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);


    //event handler function to the extra face.
    //a function which will be executed when the user clicks on
    //the last child node in theLeftSide.
    theLeftSide.lastChild.onclick = function nextLevel(event){
    	//this makes sure that the event does not also get applied
    	//to other elements in the web page, such as other faces. That
    	//would trigger the function multiple times,which is not what we 
    	//want.
    	event.stopPropagation();

    	//increases the number stored in numberOfFaces by 5, so that the 
    	//next time the faces are generated there are 5 more than before 
    	//on both sides.
    	numberOfFaces += 5;

    	//a new set of faces is generated. Because of the increase in value
    	//of the increase in value of numberOfFaces there will be 5 more faces
    	//than before on both sides
    	generateFaces();
    };


    //function which will be executed when the user clicks on theBody
    theBody.onclick = function gameOver(){
    	alert("Game Over!");

    	//nothing will happen when the user clicks anywhere in the web
    	//page. 
    	theBody.onclick = null;

    	//nothing will happen when the user clicks on the extra face.
    	theLeftSide.lastChild.onclick = null;
    };

}
generateFaces();

