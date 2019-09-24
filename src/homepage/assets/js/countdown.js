// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2019 00:00:00").getTime();

// Update the count down every 1 second

function format(x) {
    if (x < 10)
        return '0' + x;
    return x;
}
window.onload = () => {
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown_days").innerHTML = format(days);
        document.getElementById("countdown_hours").innerHTML = format(hours);
        document.getElementById("countdown_minutes").innerHTML = format(minutes);
        document.getElementById("countdown_secs").innerHTML = format(seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}