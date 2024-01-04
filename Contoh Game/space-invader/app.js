const grid = document.querySelector(".grid");
const resultDiplay = document.getElementById("result");

let currentShooterindex = 202,
	width = 15,
	direction = 1,
	inverdersid,
	goingRight = true,
	aliensRemoved = [],
	results = 0;

for (let i = 0; i < 225; i++) {
	const squares = document.createElement("div");
	grid.append(squares);
}
const squares = Array.from(document.querySelectorAll(".grid div"));

let alienInvaders = [];
for (let i = 0; i < 45; i++) {
	alienInvaders.push(i);
}
const draw = () => {
	for (let i = 0; i < alienInvaders.length; i++) {
		if (!aliensRemoved.includes(i)) {
			squares[alienInvaders[i]].classList.add("invader");
		}
	}
};
draw();

const remove = () => {
	for (let i = 0; i < alienInvaders.length; i++) {
		squares[alienInvaders[i]].classList.remove("invader");
	}
};

squares[currentShooterindex].classList.add("shooter");

function moveShooter(e) {
	squares[currentShooterindex].classList.remove("shooter");

	if (e.key == "ArrowLeft") {
		currentShooterindex -= 1;
	} else if (e.key == "ArrowRight") {
		currentShooterindex += 1;
	}
	squares[currentShooterindex].classList.add("shooter");
}
document.addEventListener("keydown", moveShooter);

function moveDownInvader() {
	remove();
	for (let i = 0; i < alienInvaders.length; i++) {
		alienInvaders[i] += 15;
		if (alienInvaders[i] > squares.length - 30) {
			alert("game over");
			document.removeEventListener("keydown", shoot);
			clearInterval(inverdersid);
		}
	}
	draw();
	if (squares[currentShooterindex].classList.contains("invader", "shooter")) {
		clearInterval(inverdersid);
		document.removeEventListener("keydown", shoot);
		alert("game Over");
	}
	if (aliensRemoved.length === alienInvaders.length) {
		clearInterval(inverdersid);
		document.removeEventListener("keydown", shoot);
		alert("You win");
	}
}
inverdersid = setInterval(moveDownInvader, 5000);

function shoot(e) {
	let lasserId,
		currentLaserIndex = currentShooterindex;
	function movelaser() {
		squares[currentLaserIndex].classList.remove("laser");
		currentLaserIndex -= width;
		squares[currentLaserIndex].classList.add("laser");

		if (squares[currentLaserIndex].classList.contains("invader")) {
			squares[currentLaserIndex].classList.remove("laser");
			squares[currentLaserIndex].classList.remove("invader");
			squares[currentLaserIndex].classList.add("boom");

			setTimeout(() => {
				squares[currentLaserIndex].classList.remove("boom");
			}, 1000);
			clearInterval(lasserId);

			const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
			aliensRemoved.push(alienRemoved);
			results += 10;
			resultDiplay.textContent = results;
			if (currentLaserIndex < 15) {
				clearInterval(lasserId);
			}
		}
	}

	if (e.key == "ArrowUp") {
		lasserId = setInterval(movelaser, 100);
	}
}

document.addEventListener("keydown", shoot);
