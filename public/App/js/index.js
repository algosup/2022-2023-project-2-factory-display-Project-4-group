function getCurrentTimeDate() {
    let currentTimeDate = new Date();
    var hours = currentTimeDate.getHours();
    var minutes = currentTimeDate.getMinutes();
    var seconds = currentTimeDate.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var currentTime = `${hours}:${minutes}`;
    document.getElementById('time').innerHTML = currentTime;
    setTimeout(getCurrentTimeDate, 500);
    if ((minutes == 00 || minutes == 30) && seconds == 00) {
        location.reload();
    }
}

function GetWeather() {
    ! function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }
    (document, 'script', 'weatherwidget-io-js');
}
getCurrentTimeDate();
GetWeather();