var DEACTIVATE_TIMER = 1; // in seconds
var state = LOW;
var current_time = 0;

function setup() {
	setState(state);
}

function mouseEvent(pressed, x, y, firstPress) {
	setState(HIGH);
}

function loop() {
	if ( state == HIGH ) {
		current_time--;
		if ( current_time <= 0 )
			setState(LOW);
	}
	delay(1000);
}

function setState(newState) {
	state = newState;
	if (state === LOW) {
		digitalWrite(0, LOW);
	} else {
		digitalWrite(0, HIGH);
		current_time = DEACTIVATE_TIMER;
	}
	setDeviceProperty(getName(), "state", state);
}

