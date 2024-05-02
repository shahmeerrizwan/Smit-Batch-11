let milisec = 0;
let seconds = 0;
let minutes = 0;
let myTimeInterval = null
let getHtmlmsec = document.getElementById('msec');
let getHtmlsec = document.getElementById('sec');
let getHtmlmin = document.getElementById('min');


function start() {
    myTimeInterval = setInterval(function () {
        milisec++;
        getHtmlmsec.innerHTML = " : " + milisec + " msec ";
        if (milisec >= 100) {
            seconds++;
            getHtmlsec.innerHTML = " : " + seconds + " sec ";
            milisec = 0;
        }
        if (seconds >= 60) {
            minutes++;
            getHtmlmin.innerHTML = minutes + " min ";
            seconds = 0;
        }
    }, 10);

}


function stop() {
    clearInterval(myTimeInterval);
}

function clearTimer() {
    milisec = 0;
    seconds = 0;
    minutes = 0;
    getHtmlmsec.innerHTML = " : 00 ";
    getHtmlsec.innerHTML = " : 00 ";
    getHtmlmin.innerHTML = "00 ";
}
