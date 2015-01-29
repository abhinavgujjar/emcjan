

app.factory('timeCalculator', function() {

	function _getTimeOfDay() {

		var hours = (new Date()).getHours();
		var timeOfDay = 'Morning';
		if (hours >= 12) {
			timeOfDay = 'Afternoon';
		}

		if (hours >= 16) {
			timeOfDay = 'Evening';
		}

		if (hours >= 21) {
			timeOfDay = 'Evening';
		}

		return timeOfDay;
	}

	return {
		getTimeOfDay: _getTimeOfDay
	}

})