/*
 * Tyler Deans
 * 9/21/15
 * questionbankmodel.js
 */



/*
 * Stores the questions, answers and the answer history
 */

function QuestionBankModel(_simModel, choices, answer, letExpression) {
    // save a link to the model
    this.simModel = _simModel;
    this.choices = choices;
    this.questionAnswer = answer;
    // the let expression is saved into a string
    this.letExpression = letExpression;
}


/*
 * Create a new set of question templateString
 */
QuestionBankModel.prototype.createNewQuestion = function() {
    this.question = "What does silly3 evaluate to when called?";
    return this.question;

}

QuestionBankModel.prototype.getLetExpression = function() {
    return this.letExpression;
}

QuestionBankModel.prototype.getAnswerChoices = function() {
    return this.choices;
};

/*
 * Compare the student's answer to the correct answer(s).
 */
QuestionBankModel.prototype.checkAnswer = function(studentAnswer) {

    for (var i = 0; i < this.questionAnswer.length; i++) {
        if (this.questionAnswer[i] == studentAnswer[i]) {
            return true;
        }
    }
    return false;
}