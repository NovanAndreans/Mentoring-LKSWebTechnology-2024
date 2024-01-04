const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

let isMouseup = true,
	hue = 0,
	thickness = true,
	x,
	y;

if (window.innerWidth) {
	canvas.width = window.innerWidth * 0.9;
	canvas.height = window.innerHeight * 0.9;
}

context.lineCap = "round";
context.lineJoin = "round";
context.lineWidth = 100;

const getClickPosition = (e) => {
	isMouseup = e.type == "mouseup";

	x = e.clientX;
	y = e.clientY;
};

const draw = (e) => {
	if (isMouseup) return;

	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();

	[x, y] = [e.offsetX, e.offsetY];
	hue++;
	hue = hue % 360;

	if (context.lineWidth > 100 || context.lineWidth <= 1) {
		thickness = !thickness;
	}

	thickness ? context.lineWidth++ : context.lineWidth--;
};

canvas.addEventListener("mousedown", getClickPosition);
canvas.addEventListener("mouseup", getClickPosition);
canvas.addEventListener("mousemove", draw);
