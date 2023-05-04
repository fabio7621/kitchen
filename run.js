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
document.getElementById("hb1").addEventListener("click", function () {
	document.getElementById("m2").style.display = "block";
	/* 點擊hb1時，將m2區塊的display屬性設定為block，顯示出來 */
});

document.getElementById("hb2").addEventListener("click", function () {
	document.getElementById("m2").style.display = "none";
	/* 點擊hb2時，將m2區塊的display屬性設定為none，隱藏起來 */
});
