document.addEventListener("DOMContentLoaded", () => {
	const squares = document.querySelectorAll(".grid div");
	const scoreDisplay = document.getElementById("score");
	const startbtn = document.getElementById("start");

	const width = 10;
	let currentIndex = 0,
		appleIndex = 0,
		currentSnake = [2, 1, 0],
		direction = 1,
		score = 0,
		speed = 0.9,
		intervalTime = 0,
		interval = 0;

	const moveOutComes = () => {
		if (
			(currentSnake[0] + width >= width * width && direction === width) ||
			(currentSnake[0] % width === width - 1 && direction === 1) ||
			(currentSnake[0] % width === 0 && direction === -1) ||
			(currentSnake[0] - width < 0 && direction === -width) ||
			squares[currentSnake[0] + direction].classList.contains("snake")
		) {
			alert("game over");
			return clearInterval(interval);
		}

		const tail = currentSnake.pop();
		squares[tail].classList.remove("snake");
		currentSnake.unshift(currentSnake[0] + direction);

		if (squares[currentSnake[0]].classList.contains("apple")) {
			squares[currentSnake[0]].classList.remove("apple");
			squares[tail].classList.add("snake");
			currentSnake.push(tail);
			score += 10;
			scoreDisplay.textContent = score;
			randomApple();
			clearInterval(interval);
			intervalTime = intervalTime * speed;
			interval = setInterval(moveOutComes, intervalTime);
		}
		squares[currentSnake[0]].classList.add("snake");
	};

	const randomApple = () => {
		do {
			appleIndex = Math.floor(Math.random() * squares.length);
		} while (squares[appleIndex].classList.contains("apple"));
		squares[appleIndex].classList.add("apple");
	};

	function controls(e) {
		squares[currentIndex].classList.remove("snake");

		if (e.keyCode === 39) {
			direction = 1;
		} else if (e.keyCode === 38) {
			direction = -width;
		} else if (e.keyCode === 37) {
			direction = -1;
		} else if (e.keyCode === 40) {
			direction = +width;
		}
	}

	function init() {
		currentSnake.forEach((e) => {
			squares[e].classList.remove("snake");
		});
		squares[appleIndex].classList.remove("apple");
		clearInterval(interval);
		randomApple();
		score = 0;
		scoreDisplay.textContent = score;
		direction = 1;
		intervalTime = 1000;
		currentSnake = [2, 1, 0];
		currentIndex = 0;
		currentSnake.forEach((e) => {
			squares[e].classList.add("snake");
		});
		interval = setInterval(moveOutComes, intervalTime);
	}

	document.addEventListener("keyup", controls);
	startbtn.addEventListener("click", init);
});
