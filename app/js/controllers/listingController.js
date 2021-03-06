app.controller('listingController', function($scope, uiConfig, votingService, favsService, hotelsData) {

	$scope.votingService = votingService;

	$scope.$on('hotelAdded', function(event, args) {
		$scope.hotels.push(args);
	})

	$scope.toggleMore = function(item) {
		item.showMore = !item.showMore;
	}

	$scope.addToFav = function(hotel) {
		favsService.addFavs(hotel);
	}

	$scope.descLength = uiConfig.descLength;

	$scope.limitItems = uiConfig.limit;

	$scope.loading = true;
	var promise = hotelsData.getHotels();

	promise.then(function(hotels){
		$scope.hotels = hotels;
		$scope.loading = false;
	}, function(error){
		$scope.error = error;
		$scope.loading = false;
	})


});