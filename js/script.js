console.log("test");
var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

<<<<<<< HEAD
var theRightSide = document.getElementById("rightSide");

=======
>>>>>>> 39c5cb6e25165b2b7749beb627f30bd5d4e5e4ca
function generateFaces() {
    for (i = 0; i < numberOfFaces; ++ i) {
        elem_img = document.createElement("img");
        elem_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
        elem_img.style.top = Math.floor(Math.random() * 401) + "px";
        elem_img.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(elem_img);
    }
<<<<<<< HEAD
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
=======
>>>>>>> 39c5cb6e25165b2b7749beb627f30bd5d4e5e4ca
}
generateFaces();