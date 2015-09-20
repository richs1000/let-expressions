/*
 * Tyler Deans
 * 09/20/15
 */

function QuestionBankView(_simView, _questionModel) {
    // keep a link to the view
    this.simView = _simView;

    // link to questionbankmodel
    this.questBankMod = _questionModel;
}


QuestionBankView.prototype.presentQuestion = function(_question) {
    // display the new question
    $("#lblQuestion").text(_question);
}

QuestionBankView.prototype.presentAnswerChoices = function() {
    // displays the answer choices
    $("answer1").html(this.questionBankMod.choices[0]);
}