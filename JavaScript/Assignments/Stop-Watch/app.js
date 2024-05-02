let milisec = 0;
let seconds = 0;
let minutes = 0;
let getHtmlmsec = document.getElementById('msec');
let getHtmlsec = document.getElementById('sec');
let getHtmlmin = document.getElementById('min');


function start() {


    setInterval(function () {
        milisec++;
        getHtmlmsec.innerHTML = " : " + milisec + " milisec ";
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


