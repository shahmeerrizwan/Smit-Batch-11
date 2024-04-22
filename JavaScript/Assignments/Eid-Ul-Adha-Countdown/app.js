let eidDate = new Date("June 17,2024").getTime();

let finalDate = setInterval(function () {

    let currentDate = new Date().getTime();
    let eidDay = eidDate - currentDate;

    let days = Math.floor(eidDay / (1000 * 60 * 60 * 24));
    let hours = Math.floor((eidDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((eidDay % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((eidDay % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = + days + "d";
    document.getElementById('hours').innerHTML = " : " + hours + "h";
    document.getElementById('minutes').innerHTML = " : " + minutes + "m";
    document.getElementById('seconds').innerHTML = " : " + seconds + "s";
})