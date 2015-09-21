/*
 * Tyler Deans
 * 09/21/15
 */

function QuestionBankView(_simView, _questionModel) {
    // keep a link to the view
    this.simView = _simView;
    // link to questionbankmodel
    this.questBankMod = _questionModel;
    // will hold the answer choices from QuestionBankModel
    this.questionChoices = [];
}


QuestionBankView.prototype.presentQuestion = function(_question) {
    // display the new question
    $("#lblQuestion").text(_question);
}

QuestionBankView.prototype.presentAnswerChoices = function() {
    this.questionChoices = this.questionBankMod.getAnswerChoices();
    // displays the answer choices
    $("#answer1").html(this.questionChoices[0]);
    $("#answer2").html(this.questionChoices[1]);
    $("#answer3").html(this.questionChoices[2]);
    $("#answer4").html(this.questionChoices[3]);
}