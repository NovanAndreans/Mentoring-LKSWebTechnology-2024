const inputs = document.querySelectorAll(".controls input");

function handleUpdateInputs() {
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix,
	);
}

inputs.forEach((e) => e.addEventListener("change", handleUpdateInputs));
inputs.forEach((e) => {
	e.addEventListener("mousemove", handleUpdateInputs);
});
