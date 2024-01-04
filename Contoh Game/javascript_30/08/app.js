const canvas = document.getElementById("draw"),
	ctx = canvas.getContext("2d");
let isDrawing = false,
	lastX = 0,
	lastY = 0,
	hue = 0,
	lineWidth = 100,
	thickness = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#b4d455";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

const drawing = (e) => {
	if (!isDrawing) return; // if not drawing will return true
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if (hue >= 360) {
		hue = 0;
	}
	if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
		thickness = !thickness;
	}
	thickness ? lineWidth-- : lineWidth++;
};

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
