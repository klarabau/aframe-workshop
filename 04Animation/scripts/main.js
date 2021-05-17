

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
}

setInterval(spin, 16); //equivalent to 60 fps



// changing individual properties with code and using setInterval
// var rotationSpeed = 0.01;
// var myOtherBox = document.getElementById('myOtherBox');

// function spin(){
// 	rotationSpeed = 0.05;
// 	myOtherBox.object3D.rotation.x -= rotationSpeed;
// 	rotationSpeed = 0.01;
// 	myOtherBox.object3D.rotation.y -= rotationSpeed;
// 	rotationSpeed = 0.005;
// 	myOtherBox.object3D.rotation.z -= rotationSpeed;
// }

// setInterval(spin, 16); //equivalent to 60 fps