/*
 * Tyler Deans
 * 9/20/15
 * model.js
 */

function SimModel(_controller) {
    // save a link to the controller
    this.controller = _controller;

    // we want SimModel to inherit from CapiModel so SmartSparrow
    // can access values within the model - here I call the CapiModel
    // constructor
    pipit.CapiAdapter.CapiModel.call(this)

}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* I need to find a way to generate multiple varaiation of the let expression question
* Example question:
What does silly3 evaluate to when called?

fun silly3() =
   let
      val x = (let val x = 5 in x + 10 end);
   in
      (x, let val x = 2 in x end, let val x = 10 in let val x = 2 in x end end)
   end

* The integers in the question must be randomly generated
*/

// Implements the let expression 
function letExp() {
    var x1 = function() {
        var x = getRandomInt(1, 21);
        this.randNumbers.push(x);
        var num = getRandomInt(1, 21);
        this.randNumbers.push(num);
        return x + num;
    }

    var x2 = function() {
        var x = getRandomInt(1, 21);
        this.randNumbers.push(x);
        return x;
    }

    var x3 = function() {
        var x = getRandomInt(1, 21);
        this.randNumbers.push(x);

        x = function() {
            var n = getRandomInt(1, 21);
            this.randNumbers.push(n);
            return n;
        }
        return x();
    }

    var xs = [x1(), x2(), x3()];
    return xs;
}

function getAnswer() {
    this.answer = letExp();
    return this.answer;
}

function answerChoices() {
    // First answer choice is the right answer (this.answer)

    // Second answer choice
    var answer1 = [this.randNumbers[0], this.randNumbers[0], this.randNumbers[0]];

    // Third answer choice
    var answer2 = [this.answer[0], this.randNumbers[2], this.randNumbers[3]];

    // Fourth answer choice
    var answer3 = [this.randNumbers[0], this.randNumbers[2], randNumbers[3]];

    var answers = [this.answer, answer1, answer2, answer3];

    return answers
}

// Returns the let expression in a string 
// The random numbers are generated an put into the string
function getLetExpression() {

    var letExpression = "let val x = (let val x = " + this.randNumbers[0] + " in x + " + this.randNumbers[1] +
        " end); in (x, let val x = " + this.randNumbers[2] + " in x end, let val x = " + this.randNumbers[3] + "in let val x = " + this.randNumbers[5] + " in x end end) end";

    return letExpression;
}


/*
 * This defines CapiModel as the prototype for GraphModel, so we inherit
 * from CapiModel
 */
SimModel.prototype = new pipit.CapiAdapter.CapiModel;


SimModel.prototype.initializeModel = function() {

    this.questionBank = new QuestionBankModel(this, this.answerChoices(), this.getAnswer(), this.getLetExpression());
}