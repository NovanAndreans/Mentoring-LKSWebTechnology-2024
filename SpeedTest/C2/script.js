const splitImage = () => {
	const divImage = document.getElementById("wrapper");
	while (divImage.firstChild) {
		divImage.removeChild(divImage.firstChild);
	}
	const divImageWrapper = divImage.getBoundingClientRect();

	const x = document.getElementById("input-x").value;
	const y = document.getElementById("input-y").value;

	for (let i = 0; i < x * y; i++) {
		const clickerComponent = document.createElement("div");
		clickerComponent.style.width = `${divImageWrapper.width / x - 2}px`;
		clickerComponent.style.height = `${divImageWrapper.height / y - 2}px`;
		clickerComponent.style.border = `1px solid yellow`;
		clickerComponent.onclick = (e) => {
			e.target.style.backgroundColor = "white";
			e.target.style.border = "1px solid white";
		};
		divImage.appendChild(clickerComponent);
	}
};
