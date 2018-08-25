var hrs = 0;
var mins = 60;
var sec = 0;

function start() {
        var hr = (hrs < 10 ) ? "0"+hrs:hrs;
        var min = (mins < 10 ) ? "0"+mins:mins;
        var secn = (sec < 10 ) ? "0"+sec:sec;
        document.getElementsByClassName('leftbox')[0].innerHTML = hr+":"+min+":"+secn;
        sec--;
        if (sec < 0) { sec = 59; mins--; }
        var timer = setTimeout(start, 1000);
}

start();