//reference modules
//var app = angular.module('emcApp');
angular.module('emcApp').controller('addController', function($scope, $http, $location, hotelsData) {

	$scope.hotel = {

	}

	$scope.tab = 'basic';

	$scope.states = ['karnataka', 'goa', 'tamil nadu'];

	$scope.$watch('selectedState', function(newValue, oldValue) {
		$scope.cities = stateCities[newValue];
	})

	var stateCities = {
		'karnataka': ['bangalore', 'hubli', 'mysore'],
		'goa': ['panjim', 'madgao', 'kanakona'],
		'tamil nadu': ['chennai', 'selam', 'ooty']
	};

	$scope.images = [
		"http://i.imgur.com/dmlhhkU.jpg",
		"http://i.imgur.com/S54M0bj.jpg",
		"http://i.imgur.com/hZg00lq.jpg",
		"http://i.imgur.com/1jD7lgN.jpg",
		"http://i.imgur.com/U0KoJxh.jpg",
		"http://i.imgur.com/amBtxWl.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/QhVORNH.jpg",
		"http://i.imgur.com/BIBuk43.jpg",
		"http://i.imgur.com/QezaFg8.jpg",
		"http://i.imgur.com/mOja8KJ.jpg",
		"http://i.imgur.com/7lSnfvh.jpg",
		"http://i.imgur.com/Fq4cFeQ.jpg",
		"http://i.imgur.com/3P9IDTF.jpg",
		"http://i.imgur.com/QhNZdjf.jpg",
		"http://i.imgur.com/o3sfWer.jpg",
		"http://i.imgur.com/G9qKSJU.jpg",
		"http://i.imgur.com/FfNahV4.jpg",
		"http://i.imgur.com/OGLIG3N.jpg"
	];

	$scope.hotel.img = $scope.images[0];

	var index = 0;

	$scope.prev = function() {
		index--;
		if (index == 0) {
			index = $scope.images.length;
		}

		$scope.hotel.img = $scope.images[index];
	}

	$scope.next = function() {
		index++;

		if (index > $scope.images.length) {
			index = 0;
		}

		$scope.hotel.img = $scope.images[index];
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

		hotelsData.addHotel(hotel).then(function() {
			$location.url('list');
		})

	}


})