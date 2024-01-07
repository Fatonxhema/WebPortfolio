let count = 0;
let scrolled = document.querySelector("#home").clientHeight + document.querySelector("#about").clientHeight - document.documentElement.clientHeight;

function progress(e) {
	let n = 0;
	let value = document.querySelectorAll("progress")[e].getAttribute("value");
	let counter = setInterval(num, 20);

	function num() {
		if (n >= value) {
			clearInterval(counter);
		}
		else {
			n += value / 100;
			document.querySelectorAll("progress")[e].setAttribute("value", n);
		}
	}
}

function all() {
	if (document.documentElement.scrollTop >= scrolled) {
		count++;
		if (count == 1) {
			for (let i = 0; i < 12; i++) {
				progress(i);
			}
		}
	}
}
// Get the Date for the footer part
let span = document.getElementById("year");
let txt = document.createTextNode(new Date().getFullYear());
span.appendChild(txt);

