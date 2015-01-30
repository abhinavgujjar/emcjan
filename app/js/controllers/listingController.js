app.controller('listingController', function($scope, uiConfig, votingService, $http) {

	$scope.votingService = votingService;

	$scope.toggleMore = function(item) {
		item.showMore = !item.showMore;
	}

	$scope.descLength = uiConfig.descLength;

	$scope.limitItems = uiConfig.limit;

	$http.get('data/hotels')
		.success(function(data, status, headers, config) {
			if (status >= 200 && status <= 299) {
				$scope.hotels = data;
			} else {
				alert('AAAAA .. womsething went wrong');
			}
		});
})