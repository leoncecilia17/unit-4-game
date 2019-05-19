$(document).ready(function () {

    var targetNumber
    var winscounter = 0;
    var lossescounter = 0;
    var totalstore = 0;

    function reset() {
        targetNumber = Math.ceil(Math.random() * 101) + 19;
        $(".randomnumber").html(targetNumber);

        totalstore = 0;
        $(".total").text(totalstore)
        for (var i = 0; i < 4; i++) {
            var berryrandomvalue = Math.ceil(Math.random() * 12);
            $("#" + i).data("number", berryrandomvalue)
        }
    }

    reset()
    $(".fruits").click(function () {
        totalstore = totalstore + parseInt($(this).data("number"));
        $(".total").text(totalstore);

        if (totalstore === targetNumber) {
            winscounter++
            $("#wins").text(winscounter)
            $("#results").text("You won!")
            setTimeout(function () {
                reset()
            }, 2000)
        }

        else if (totalstore > targetNumber) {
            lossescounter++
            $("#losses").text(lossescounter)
            $("#results").text("You lost!")
            setTimeout(function () {
                reset()
            }, 2000)
        }

    })
})