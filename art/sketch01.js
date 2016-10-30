function setup() {
	createCanvas(1500,1000);
}

function draw() {
	if (mouseIsPressed) {
		background(0);
	} else{
		fill(255)
	}
	ellipse(mouseX, mouseY, 80, 80);
}