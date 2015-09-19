/*
 * Tyler Deans
 * 9/14/15
 * model.js
*/

function SimModel(_controller, _attrs) {
	// save a link to the controller
	this.controller = _controller;

	this.randNumbers = [];

	// we want SimModel to inherit from CapiModel so SmartSparrow
	// can access values within the model - here I call the CapiModel
	// constructor
	pipit.CapiAdapter.CapiModel.call(this, _attrs)
	
}

function emptyOutArray(myArray) {
	myArray.length = 0;
}

SimModel.prototype.randomFringe = function(_fringeLength) {
	// start with an empty fringe
	this.fringeNodes = [];
	// for each node in the fringe
	for (var i = 0; i < _fringeLength; i++) {
		// add the new node to the fringe list
		this.fringeNodes.push(this.randomNode());
	}
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
function let() {
	var x1 = function () {
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


// Returns the let expression in a string 
// The random numbers are generated an put into the string
function getLetExpression() {

	var letExpression = "let val x = (let val x = " + this.randNumbers[0] + " in x + " + this.randNumbers[1] + 
			" end); in (x, let val x = " + this.randNumbers[2] + " in x end, let val x = " 
			+ this.randNumbers[3] + "in let val x = " + this.randNumbers[5] + " in x end end) end";
	
	return letExpression;
}


/*
 * This defines CapiModel as the prototype for GraphModel, so we inherit
 * from CapiModel
 */
SimModel.prototype = new pipit.CapiAdapter.CapiModel;


SimModel.prototype.initializeModel = function() {
	// the fringe is used to answer questions
	//this.fringe = new FringeModel(this);
	// the question bank stores the questions, the answers and the student's
	// answer history
	this.questionBank = new QuestionBankModel(this, this.get('numerator'),
				this.get('denominator'));
}