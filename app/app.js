//declaration of module
var app = angular.module('emcApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider.when('/home', {
		templateUrl : 'partials/home.html'
	});

	$routeProvider.when('/list', {
		templateUrl : 'partials/listing.html'
	});

	$routeProvider.when('/new', {
		templateUrl : 'partials/new.html',
		controller : 'addController'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});

})
//defined a value service
app.value('uiConfig', {
	descLength: 50,
	limit: 5,
	maxRating : 10
});

