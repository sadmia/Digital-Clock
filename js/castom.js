"use strict";


setInterval(function() {

	let hours = document.querySelector("#hours");
	let minutes = document.querySelector("#minutes");
	let secends = document.querySelector("#secends");

	let am_pm = document.querySelector("#AM_PM");

	let hr = new Date().getHours();
	let min = new Date().getMinutes();
	let sec = new Date().getSeconds();

	hours.innerHTML = hr;
	minutes.innerHTML = min;
	secends.innerHTML = sec;
console.log (hr);
	if (hr >= 0 && hr < 12) {
		am_pm.innerHTML = "AM";
	} else {
		am_pm.innerHTML = "PM";
	}
 
	if (hr == 13) {
		hours.innerHTML = "01";
	} else if (hr == 14) {
		hours.innerHTML = "02";
	} else if (hr == 15) {
		hours.innerHTML = "03";
	} else if (hr == 16) {
		hours.innerHTML = "04";
	} else if (hr == 17) {
		hours.innerHTML = "05";
	} else if (hr == 18) {
		hours.innerHTML = "06";
	} else if (hr == 19) {
		hours.innerHTML = "07";
	} else if (hr == 20) {
		hours.innerHTML = "08";
	} else if (hr == 21) {
		hours.innerHTML = "09";
	} else if (hr == 22) {
		hours.innerHTML = "10";
	} else if (hr == 23) {
		hours.innerHTML = "11";
	} else if (hr == 0) {
		hours.innerHTML = "12";
	}


	if (min == 0) {
		minutes.innerHTML = "00";
	} else if (min == 1) {
		minutes.innerHTML = "01";
	} else if (min == 2) {
		minutes.innerHTML = "02";
	} else if (min == 3) {
		minutes.innerHTML = "03";
	} else if (min == 4) {
		minutes.innerHTML = "04";
	} else if (min == 5) {
		minutes.innerHTML = "05";
	} else if (min == 6) {
		minutes.innerHTML = "06";
	} else if (min == 7) {
		minutes.innerHTML = "07";
	} else if (min == 8) {
		minutes.innerHTML = "08";
	} else if (min == 9) {
		minutes.innerHTML = "09";
	}


	if (sec == 0) {
		secends.innerHTML = "00";
	} else if (sec == 1) {
		secends.innerHTML = "01";
	} else if (sec == 2) {
		secends.innerHTML = "02";
	} else if (sec == 3) {
		secends.innerHTML = "03";
	} else if (sec == 4) {
		secends.innerHTML = "04";
	} else if (sec == 5) {
		secends.innerHTML = "05";
	} else if (sec == 6) {
		secends.innerHTML = "06";
	} else if (sec == 7) {
		secends.innerHTML = "07";
	} else if (sec == 8) {
		secends.innerHTML = "08";
	} else if (sec == 9) {
		secends.innerHTML = "09";
	}

	

}, 1000);
