const second = document.querySelector(".second-hand"),
	minute = document.querySelector(".min-hand"),
	hour = document.querySelector(".hour-hand");

const setDate = () => {
	const timeNow = new Date();

	const seconds = timeNow.getSeconds();
	const secondDegrees = (seconds / 60) * 360 + 90;

	const minutes = timeNow.getMinutes();
	const minuteDegress = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

	const hours = timeNow.getHours();
	const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

	second.style.transform = `rotate(${secondDegrees}deg)`;
	minute.style.transform = `rotate(${minuteDegress}deg)`;
	hour.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
