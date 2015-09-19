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

function FringeModel(_simModel) {
	// save a link to the model
	this.simModel = _simModel;
	// store the fringe as an ordered list
	 this.randNumbers = [];
}

// Implements a let expression 
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

