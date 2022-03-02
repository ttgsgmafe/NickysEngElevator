var direction; // (string) up or down
var callFloor; // (int) 1, 2, 3
var currentFloor = 0; //(int) 0, 1, 2
var calledFloor = 0;

var floorCalllUp = false;
var floorCallDwn = false;

var currentSonarPos = 0;
var floorSonarRange = [0, 9, 14];

// Floor Call Button Pressed
// Algo:
// Where is the car based on the current floor? 
// 	Check current floor.
// Which floor call button was pressed?
// 	*First floor can only go up.
// 	*Third floor can only go down.
//	*Middle floor can go up and down.

// Assuming no loop on button press --- should be simple logic here
// we are just insuring direction of the car
switch(currentFloor) {
	case 0:
		if(floorCalllUp) {
			direction = "up";
		}
		break;
	case 1:
		if(floorCalllUp) {
			direction = "up";
		} else if(floorCallDwn) {
			direction = "down";
		}
		break;
	case 2:
		if(floorCallDwn) {
			direction = "down";
		}
		break;
}

// button pressed in the car

if(calledFloor == currentFloor) {
	// ignore action
} else {
	switch(calledFloor) {
		case 0:
			// Drive motor to sonar sensor 0 or floorSonarRange[0]
			break;
		case 1:
			// Drive motor to sonar sensor 9 or floorSonarRange[1]
			break;
		case 2:
			// Drive motor to sonar sensor 14 floorSonarRange[2]
			break;
	}
}
