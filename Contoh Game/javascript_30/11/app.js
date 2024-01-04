const player = document.querySelector(".player"),
	video = player.querySelector(".viewver"),
	progress = player.querySelector(".progress"),
	progressBar = player.querySelector(".progress__filled"),
	toggle = player.querySelector(".toggle"),
	skipButtons = player.querySelectorAll("[data-skip]"),
	ranges = player.querySelectorAll(".player__slider");

const togglePlay = () => {
	const method = video.paused ? "play" : "pause";
	video[method]();
};

const updateButton = () => {
	const icon = video.paused ? "▶" : "▮";
	toggle.textContent = icon;
};

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

const handleProgress = () => {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((e) => {
	e.addEventListener("click", skip);
});
ranges.forEach((e) => e.addEventListener("change", handleRangeUpdate));
ranges.forEach((e) => e.addEventListener("mousemove", handleRangeUpdate));

toggle.addEventListener("click", togglePlay);

let mouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
