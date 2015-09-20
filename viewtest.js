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

}

var main = function() {
    $("input[value='answer1']").next().html("Answer1");
    $("input[value='answer2']").next().html("Answer2");
    $("input[value='answer3']").next().html("Answer3");
    $("input[value='answer4']").next().html("Answer4");
}

$(document).ready(main);