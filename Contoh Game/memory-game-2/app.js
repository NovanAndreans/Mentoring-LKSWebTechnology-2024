document.addEventListener("DOMContentLoaded", () => {
	//

	const image = [
		{
			name: "fries",
			img: "./images/fries.png",
		},
		{
			name: "cheeseburger",
			img: "./images/cheeseburger.png",
		},
		{
			name: "ice-cream",
			img: "./images/ice-cream.png",
		},
		{
			name: "hotdog",
			img: "./images/hotdog.png",
		},
		{
			name: "milkshake",
			img: "./images/milkshake.png",
		},
		{
			name: "pizza",
			img: "./images/pizza.png",
		},
		{
			name: "fries",
			img: "./images/fries.png",
		},
		{
			name: "cheeseburger",
			img: "./images/cheeseburger.png",
		},
		{
			name: "ice-cream",
			img: "./images/ice-cream.png",
		},
		{
			name: "hotdog",
			img: "./images/hotdog.png",
		},
		{
			name: "milkshake",
			img: "./images/milkshake.png",
		},
		{
			name: "pizza",
			img: "./images/pizza.png",
		},
	];

	image.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");
	const btn = document.querySelector("#reset");

	let [cardChosen, cardChosenId, cardsWon] = [[], [], []];

	const createBoard = () => {
		for (let i = 0; i < image.length; i++) {
			const card = document.createElement("img");
			card.setAttribute("src", "./images/blank.png");
			card.setAttribute("id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	};

	const checkForMatch = () => {
		const cards = document.querySelectorAll("img");
		const [optionOneId, optionTwoId] = [cardChosenId[0], cardChosenId[1]];

		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute("src", "./images/blank.png");
			cards[optionTwoId].setAttribute("src", "./images/blank.png");
		} else if (cardChosen[0] == cardChosen[1]) {
			cards[optionOneId].setAttribute("src", "./images/white.png");
			cards[optionTwoId].setAttribute("src", "./images/white.png");
			cards[optionOneId].removeEventListener("click", flipCard);
			cards[optionTwoId].removeEventListener("click", flipCard);
			cardsWon.push(cardChosen);
		} else {
			cards[optionOneId].setAttribute("src", "./images/blank.png");
			cards[optionTwoId].setAttribute("src", "./images/blank.png");
		}

		[cardChosen, cardChosenId] = [[], []];
		if (cardsWon.length === image.length / 2) {
			alert("You win");
		}
	};

	function flipCard() {
		let cardId = this.getAttribute("id");
		cardChosen.push(image[cardId].name);
		cardChosenId.push(cardId);
		this.setAttribute("src", image[cardId].img);
		if (cardChosen.length === 2) {
			setTimeout(() => {
				checkForMatch();
			}, 500);
		}
	}

	function reset() {
		let cards = Array.from(document.querySelectorAll("img"));
		console.log(cards);
		cards.map((e) => {
			return e.remove();
		});
		createBoard();
	}

	btn.addEventListener("click", reset);

	createBoard();
});
