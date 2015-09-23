

var main = function() {
    $("#btnStart").click(function() {
        // disable start button
        $("#btnStart").prop('disabled', true);
        // enable submit button
        $("#btnSubmit").prop('disabled', false);
    });

    $("#lblQuestion").html("<p>What does silly3 evaluate to when called?</p>");
    $("#answer1").next().html("Answer1");
    $("#answer2").next().html("Answer2");
    $("#answer3").next().html("Answer3");
    $("#answer4").next().html("Answer4");
}

$(document).ready(main);