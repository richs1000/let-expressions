/*
 * Tyler Deans
 * September 24, 2015
 */



function LetExpressionModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
	// store the fringe as an ordered list
	this.randNumbers = [];
}

/*
 * This function creates a let expression with random stuff in it for use in questions
 */
LetExpressionModel.prototype.randomLetExpression = function() {
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

    var this.answer = [x1(), x2(), x3()];
    var this.letExpressionString = "<code>let val x = (let val x = " + this.randNumbers[0] + " in x + " + this.randNumbers[1] +" end);</code>\n";
    this.letExpressionString += "<code>in (x, let val x = " + this.randNumbers[2] + " in x end, let val x = " + this.randNumbers[3] + "in let val x = " + this.randNumbers[5] + " in x end end)</code>\n";
    this.letExpressionString += "<code>end</code>\n";

}
