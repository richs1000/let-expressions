/*
 * Tyler Deans
 * February, 14,2016
 * changed randomLetExpression method to a function with a
 * let expression
 */



function LetExpressionModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;

}

/*
 * This function creates a let expression with random stuff in it for use in questions
 */
LetExpressionModel.prototype.randomLetExpression = function() {
    // generate a random number between 1 and 10
    // these numbers will be used to set the variables x and y 
    // val x = if z > xValue1 then z else xValue2
    var xValue1 = getRandomInt(1, 11);
    var xValue2 = getRandomInt(1, 11);
    // val y = x + z + yValue 
    var yValue = getRandomInt(1, 11);

    // if x > y then x * letConditionValue else y * y
    var letConditionValue = getRandomInt(1, 11);
    // the prarmeter passed into the silly1 function
    var zValue = getRandomInt(1, 11);
    // initialize this.answer to 0
    this.answer = 0;
    // the conditional that determines the value of x variable
    if (zValue > xValue1) {
        var xVariable = zValue;
    } else {
        var xVariable = xValue2;
    }

    var yVariable = xVariable + zValue + yValue;
    //if x > y then x * num else y * y
    var num = getRandomInt(1, 11);
    if (xVariable > yVariable) {
        this.answer = xVariable * num;
    } else {
        this.answer = 10 * yVariable;
    }

    this.letExpressionString = "<pre>fun silly1 (z: int) =\n";
    this.letExpressionString += "	let\n";
    this.letExpressionString += "		val x = if z > " + xValue1 + " then z else " + xValue2 + "\n";
    this.letExpressionString += "		val y = x + z + " + yValue + "\n";
    this.letExpressionString += "	in\n";
    this.letExpressionString += "		if x > y then x * " + num + " else 10 * y\n";
    this.letExpressionString += "	end\n";
    this.letExpressionString += "val ans = silly1(" + zValue + ")";
    this.letExpressionString += "</pre><br>";
    return this.answer;
}

LetExpressionModel.prototype.getLetExpression = function() {
    return this.letExpressionString;
}