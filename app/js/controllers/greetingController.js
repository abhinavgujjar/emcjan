
app.controller('greetingController', function($scope) {
	$scope.companyName = 'EMC2';
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

	$scope.greeting = "Good "

	$scope.timeOfDay = timeOfDay;
})
