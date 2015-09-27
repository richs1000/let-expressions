function LetExpressionView(_simView) {
	// keep a link to the view
	this.simView = _simView;
}


/*
	draws the let expression
	uses the let expression string from the let expression model

*/

LetExpressionView.prototype.drawLetExpression = function(_letExpression) {
	
	$( '#letExpressionDiv').append( _letExpression.letExpressionString );
}
