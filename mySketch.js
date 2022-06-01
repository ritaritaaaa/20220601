var colors="cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split('-').map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	blendMode(SCREEN)
	fill(colors[int(frameCount/3)%colors.length])
	ellipse(random(0,width),random(0,height),random(20,100));
}