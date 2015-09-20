function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SimModel(_controller) {
    // save a link to the controller
    this.controller = _controller;

    // we want SimModel to inherit from CapiModel so SmartSparrow
    // can access values within the model - here I call the CapiModel
    // constructor
    pipit.CapiAdapter.CapiModel.call(this)

}

//var randNumbers = [];

function letExp() {

    this.randNumbers = [];

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

var main = function() {
    $("answer1").html(this.questionBankMod.choices[0]);
}

$(document).ready(main)
/*console.log(getAnswer());
console.log(this.randNumbers);

var arr1 = answerChoices();
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
*/