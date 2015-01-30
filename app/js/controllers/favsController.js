//reference modules
//var app = angular.module('emcApp');
angular.module('emcApp').controller('favsController', function($scope, favsService) {

	$scope.favs= favsService.favs;

})