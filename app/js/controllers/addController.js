//reference modules
//var app = angular.module('emcApp');
angular.module('emcApp').controller('addController', function($scope) {

	$scope.hotel = {

	}

	$scope.tab = 'basic';

	$scope.states = ['karnataka', 'goa', 'tamil nadu'];

	$scope.$watch('selectedState', function(newValue, oldValue){
		$scope.cities = stateCities[newValue];
	})

	var stateCities = {
		'karnataka': ['bangalore', 'hubli', 'mysore'],
		'goa': ['panjim', 'madgao', 'kanakona'],
		'tamil nadu': ['chennai', 'selam', 'ooty']
	};

	$scope.images = [
		"dmlhhkU.jpg",
		"S54M0bj.jpg",
		"hZg00lq.jpg",
		"1jD7lgN.jpg",
		"U0KoJxh.jpg",
		"amBtxWl.jpg",
		"QhVORNH.jpg",
		"QhVORNH.jpg",
		"BIBuk43.jpg",
		"QezaFg8.jpg",
		"mOja8KJ.jpg",
		"7lSnfvh.jpg",
		"Fq4cFeQ.jpg",
		"3P9IDTF.jpg",
		"QhNZdjf.jpg",
		"o3sfWer.jpg",
		"G9qKSJU.jpg",
		"FfNahV4.jpg",
		"OGLIG3N.jpg"
	];

	$scope.hotelImage = $scope.images[0];

	var index = 0;

	$scope.prev = function() {
		index--;
		if (index == 0) {
			index = $scope.images.length;
		}

		$scope.hotelImage = $scope.images[index];
	}

	$scope.next = function() {
		index++;

		if (index > $scope.images.length) {
			index = 0;
		}

		$scope.hotelImage = $scope.images[index];
	}



	$scope.changeTab = function(name) {
		$scope.tab = name;
	}

	$scope.addComment = function(comment) {
		if (!$scope.hotel.comments) {
			$scope.hotel.comments = []
		}

		$scope.hotel.comments.push(comment);

		$scope.comment = '';

	}

	$scope.addHotel = function(hotel) {
		var copy = angular.copy(hotel);
		$scope.hotels.push(copy);
	}


})