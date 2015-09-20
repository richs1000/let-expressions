/*
 * main.js
 * Rich Simpson
 * August 5, 2015
 *
 * This code implements a mastery-based exercise on graph
 * theory for integration with Smart Sparrow.
 *
 * This is our view - The V in MVC
 */


/*
 * This object handles drawing the interface on the screen. Mostly
 * this involves drawing the actual graph and clearing out the
 * text field for the user's answer
 */
function SimView(_controller) {
    // keep a link to the controller
    this.controller = _controller;
    // Only set up the controls once
    this.setupControls();
    // create the question bank view - where questions and answer history are
    // displayed
    this.questionBankView = new QuestionBankView(this);
    // create the fringe view - a table with contents of fringe
    this.fringeView = new FringeView(this);
}


SimView.prototype.setupControls = function() {
    $("#btnStart").click(function() {
        // finish initializing the app
        simController.initializeController();
        // disable start button
        $("#btnStart").prop('disabled', true);
        // enable submit button
        $("#btnSubmit").prop('disabled', false);
    });
    // add event handler for submit button
    $("#btnSubmit").click(function() {
        // check the answer
        var studentAnswer = $("#txtAnswer").val();
        // record whether it was right or wrong
        var rightAnswer = simController.simModel.questionBank.checkAnswer(studentAnswer);

        // store the results
        simController.simModel.questionBank.updateAnswerHistory(rightAnswer);
        // draw the results for the last five questions
        simController.simView.questionBankView.drawAnswerHistory(simController.simModel.questionBank.answerHistory);

        // if they got the right answer
        if (rightAnswer) {
            // give them feedback
            $("#txtFeedback").html("Right. The answer is " + studentAnswer);
        } else {
            // give them feedback
            $("#txtFeedback").html("That is incorrect. The correct answer is " + simController.simModel.questionBank.answers[0]);
        }

        // disable submit button
        $("#btnSubmit").prop('disabled', true);
        // disable text field where the user enters an answer
        $("#txtAnswer").prop('disabled', true);
    });
    // call the submit button click-handler if the user hits the enter key
    $('#txtAnswer').keypress(function(e) {
        if (e.which == 13) { //Enter key pressed
            $('#btnSubmit').click(); //Trigger search button click event
        }
    });

}