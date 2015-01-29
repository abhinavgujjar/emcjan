
//reference modules
//var app = angular.module('emcApp');
angular.module('emcApp').controller('addController', function($scope) {


	$scope.addHotel = function(hotel) {
		var copy = angular.copy(hotel);
		$scope.hotels.push(copy);
	}

	
})