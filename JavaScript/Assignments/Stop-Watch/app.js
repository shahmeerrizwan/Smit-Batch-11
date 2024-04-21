
var milisec = 0
var seconds = 0
var minutes = 0
var getHtmlmsec = document.getElementById('msec')
var getHtmlsec = document.getElementById('sec')
var getHtmlmin = document.getElementById('min')

setInterval(function () {
    milisec++
    getHtmlmsec.innerHTML = milisec
    if (milisec >= 100) {
        seconds++
        getHtmlsec.innerHTML = seconds
        milisec = 0
    }



}, 10)