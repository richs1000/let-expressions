/*
 * Tyler Deans
 * 9/14/15
 * questionbankmodel.js
*/



/*
 * Stores the questions, answers and the answer history
 */

function QuestionBankModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
	// create the question list
	this.createNewQuestions();
}


/*
 * Create a new set of question templateString
 */
QuestionBankModel.prototype.createNewQuestion = function() {
	
  this.question = "What does silly3 evaluate to when called?";
  // the question index is used to rotate through the questions
  
	// the answer(s) is/are stored in an array
	//this.answers;
	// the actual question is stored in a string
	
}
 
/*
 * Compare the student's answer to the correct answer(s).
 */
QuestionBankModel.prototype.checkAnswer = function (studentAnswer) {
	for (var i = 0; i < this.answers.length; i++) {
		if (this.answers[i].toString().toLowerCase() == studentAnswer.toString().toLowerCase()) {
			return true;
		}
	}
	return false;
}

/*
 * Set the answer(s) to the question indicated by questionIndex.
 * Right now I'm using a really clunky approach. I'm sure there's
 * a better way.
 */

 /*
 	the fringe model calculates the answers to the questions that were generated
 	in the fringe model calculate the answer to the let expression answer
 */
QuestionBankModel.prototype.setAnswers = function(_fringe) {
	// Reset answers array
	// the answer will be a array with three values (tuple)
	this.answers = [];
}