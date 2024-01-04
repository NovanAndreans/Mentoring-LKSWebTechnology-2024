const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeleft = document.getElementById("time-left");
const score = document.getElementById("score");
const start = document.getElementById("start");

start.addEventListener("click", () => {
	let result = 0,
		hitPosition,
		currenttime = 60,
		timerId = null;

	const randomSquare = () => {
		squares.forEach((e) => {
			e.classList.remove("mole");
		});

		let randomSquare = squares[Math.floor(Math.random() * 9)];
		randomSquare.classList.add("mole");

		hitPosition = randomSquare.id;
	};

	squares.forEach((e) => {
		e.addEventListener("mousedown", () => {
			if (e.id == hitPosition) {
				result += 10;
				score.textContent = result;
				hitPosition = null;
			}
		});
	});

	const moveMole = () => {
		timerId = setInterval(() => {
			randomSquare();
		}, 700);
	};

	moveMole();

	const countDown = () => {
		currenttime--;
		timeleft.textContent = currenttime;

		if (currenttime == 0) {
			clearInterval(countDownTimerId);
			clearInterval(timerId);
			alert("game is over");
		}
	};
	let countDownTimerId = setInterval(countDown, 1000);
});
