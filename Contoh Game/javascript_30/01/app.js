const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((e) => {
	e.addEventListener("transitionend", (e) => {
		if (e.propertyName !== "transform") return;
		e.target.classList.remove("playing");
	});
});

window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) {
		return;
	}
	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
});
