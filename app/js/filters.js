
app.filter('indianize', function() {
	return function(input) {
		return input.replace('Bangalore', 'Bengaluru');
	}
})

app.filter('na', function() {
	return function(input) {
		if (!input) {
			return 'N/A'
		} else {
			return input;
		}
	}
})

app.filter('numberToArray', function() {
	return function(input) {

		
		return new Array(input);
		//input = input / 2;
		// for (var i = 1; i <= input; i++) {
		// 	empty.push({});
		// }
		//return empty;
	}
})
