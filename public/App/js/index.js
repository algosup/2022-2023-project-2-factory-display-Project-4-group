function getCurrentTimeDate() {
	let currentTimeDate = new Date();
	var hours   =  currentTimeDate.getHours();
	var minutes =  currentTimeDate.getMinutes();
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var currentTime = `${hours}:${minutes}`;
	document.getElementById('time').innerHTML = currentTime;
	setTimeout(getCurrentTimeDate, 500);
}
function GetWeather() {
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
	setTimeout(GetWeather, 1200000);
}
getCurrentTimeDate();
GetWeather();