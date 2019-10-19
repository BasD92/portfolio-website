$(document).ready(function () {

    /* Scroll to other sections*/
    $("#button1").click(function () {

        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);

        return false;
    });

    $("#button2").click(function () {

        $('html, body').animate({
            scrollTop: $("#aboutme").offset().top
        }, 1000);

        return false;
    });

    $("#button3").click(function () {

        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);

        return false;
    });

    $("#button4").click(function () {

        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);

        return false;
    });

    $("#button5").click(function () {

        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);

        return false;
    });
    /* End scroll to other sections*/

    /* Hover navigation buttons*/
    var Originalcolor1 = $("#button1").css('background');
    $("#button1").hover(
        function () {
            //mouse over
            $(this).css('background', '#000000')
        }, function () {
            //mouse out
            $(this).css('background', Originalcolor1)
        });

    var Originalcolor2 = $("#button2").css('background');
    $("#button2").hover(
        function () {
            //mouse over
            $(this).css('background', '#000000')
        }, function () {
            //mouse out
            $(this).css('background', Originalcolor2)
        });

    var Originalcolor3 = $("#button3").css('background');
    $("#button3").hover(
        function () {
            //mouse over
            $(this).css('background', '#000000')
        }, function () {
            //mouse out
            $(this).css('background', Originalcolor3)
        });


    var Originalcolor4 = $("#button4").css('background');
    $("#button4").hover(
        function () {
            //mouse over
            $(this).css('background', '#000000')
        }, function () {
            //mouse out
            $(this).css('background', Originalcolor4)
        });

    var Originalcolor5 = $("#button5").css('background');
    $("#button5").hover(
        function () {
            //mouse over
            $(this).css('background', '#000000')
        }, function () {
            //mouse out
            $(this).css('background', Originalcolor5)
        });
    /* End hover navigation buttons*/

});
