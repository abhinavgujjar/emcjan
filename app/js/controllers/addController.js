//reference modules
//var app = angular.module('emcApp');
angular.module('emcApp').controller('addController', function($scope) {

	$scope.hotel = {

	}

	$scope.tab = 'basic';

	var images = [
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
	]

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