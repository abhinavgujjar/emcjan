
app.controller('greetingController', function($scope, timeCalculator) {
	$scope.companyName = 'EMC2';
	

	$scope.greeting = "Good "

	$scope.timeOfDay = timeCalculator.getTimeOfDay();
})
