let number = document.getElementById("number");
let count = 500;
let increment = 10;
let interval = setInterval(updateNumber, 20);

function updateNumber() {
	count += increment;
	if (count >= 2010) {
		clearInterval(interval);
		setTimeout(startInterval, 5000);
	}
	number.innerHTML = Math.floor(count);
}

function startInterval() {
	count = 500;
	interval = setInterval(updateNumber, 20);
}
