
// changing individual properties with code and using setInterval
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

var switchSpeed = false;




function spin(){

	
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;

	if(rotationSpeed >= 0.1){
		switchSpeed = true;
	} 
	if(rotationSpeed <= 0.001){
		switchSpeed = false;
	}

	if (switchSpeed == true){
		rotationSpeed -= 0.001;
		myOtherBox.object3D.position.y -= 0.05;
	} else {
		rotationSpeed += 0.001;
		myOtherBox.object3D.position.y += 0.05;
	}

	
}

setInterval(spin, 16); //equivalent to 60 fps