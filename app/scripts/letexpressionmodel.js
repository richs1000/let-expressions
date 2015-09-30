/*
 * Tyler Deans
 * September 29, 2015
 */



function LetExpressionModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
	// store the fringe as an ordered list
	//this.randNumbers = [];

}

/*
 * This function creates a let expression with random stuff in it for use in questions
 */
LetExpressionModel.prototype.randomLetExpression = function() {
	this.randNumbers = [];
    this.answer = [];
	
    var ln1 = getRandomInt(1, 21);
    this.randNumbers.push(ln1);
    var ln2 = getRandomInt(1, 21);
    this.randNumbers.push(ln2);
    var x1 = ln1 + ln2;
    this.answer.push(x1);
    
    var ln3 = getRandomInt(1, 21);
    this.randNumbers.push(ln3);
    
     
    var x2 = ln3;
    this.answer.push(x2);
    var ln4 = getRandomInt(1, 21);
    this.randNumbers.push(ln4);

    var ln5 = getRandomInt(1, 21);
    this.randNumbers.push(ln5); 
    var x3 = ln5;
    this.answer.push(x3);
    
    this.letExpressionString = "<pre>let\n";
    this.letExpressionString += "     val x = (let val x = " + this.randNumbers[0] + " in x + " + this.randNumbers[1] +" end)\n";
    this.letExpressionString += "in\n";
    this.letExpressionString += "     (x, let val x = " + this.randNumbers[2] + " in x end, let val x = " + this.randNumbers[3] + " in let val x = " + this.randNumbers[4] + " in x end end)\n";
    this.letExpressionString += "end</pre></br>";
    
    return this.answer;
}

LetExpressionModel.prototype.getLetExpression = function() {
    return this.letExpressionString;
}



