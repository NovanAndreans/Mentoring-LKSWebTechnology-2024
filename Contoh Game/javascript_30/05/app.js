const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle("open");
}

function toggleActive(e) {
	console.log(e.propertyName.includes("flex"));
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}
panels.forEach((e) => e.addEventListener("click", toggleOpen));
panels.forEach((e) => e.addEventListener("transitionend", toggleActive));
