

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;

	myOtherBox.object3D.rotation.y -= rotationSpeed;

	myOtherBox.object3D.rotation.z -= rotationSpeed;


	if (rotationSpeed <= 0.01){
		while (rotationSpeed < 0.09){
			rotationSpeed += 0.01;
		}
	}

	if (rotationSpeed >= 0.09){
		while (rotationSpeed > 0.01){
			rotationSpeed -= 0.01;
		}
	} 
}

setInterval(spin, 16); //equivalent to 60 fps