app.controller('greetingController', function($scope, timeCalculator, $interval) {
	$scope.companyName = 'EMC2';


	$scope.greeting = "Good "

	$scope.timeOfDay = timeCalculator.getTimeOfDay();

	var startOn = new Date('Feb 14 2015');

	var t2 = startOn.getTime();
	var t1 = (new Date()).getTime();

	$scope.daysLeft = parseInt((t2 - t1) / (1000));

	$interval(function() {
		t1 = (new Date()).getTime();
		$scope.daysLeft = parseInt((t2 - t1) / (1000));
	}, 1000);
})