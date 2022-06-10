
//$(document).ready(function () {

    //document.querySelector
    //$("h1").css("color", "red");
    $("h1").addClass("big-title margin-50");
//})

//document.querySelectorAll, for all buttons
$("button").css('color', 'red');

///for console window, checks of the class 'margin-50' is available
$("h1").hasClass("margin-50");// 'true' is the result

//updating the text using jquery
$("h1").text("bye~~!");

//updating the text on buttons
$("button").text("do not touch me!");

//updating the text with properties 
$("button").html("<em>Hey</em><hr>");
