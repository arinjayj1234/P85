//Create a reference for canvas 
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")

//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 392;
greencar_y = 225;

function add() {
	bacimytagg = new Image();
	bacimytagg.onload = uploadBackground;
	bacimytagg.src = background_image;

	grecaimytargg = new Image();
	grecaimytargg.onload = uploadgreencar;
	grecaimytargg.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bacimytagg, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(grecaimytargg, greencar_x, greencar_y, greencar_width, greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (greencar_y >= 0) {
        greencar_y = greencar_y - 10;
        console.log("When up arrow pressed, X = "+greencar_x+", Y = "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if (greencar_y <= 300) {
        greencar_y = greencar_y + 10;
        console.log("When up arrow pressed, X = "+greencar_x+ ", Y = "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    if (greencar_x >= 0) {
        greencar_x = greencar_x - 10;
        console.log("When up arrow pressed, X = "+greencar_x+", Y = "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if (greencar_x <= 730) {
        greencar_x = greencar_x + 10;
        console.log("When up arrow pressed, X = "+greencar_x+", Y = "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
