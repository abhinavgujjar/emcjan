//declaration of module
var app = angular.module('emcApp', ['ngRoute']);

app.directive('greeting', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/greeting.html',
		controller : 'greetingController'
	}
})

app.directive('favs', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/favs.html',
		controller : 'favsController'
	}
})



app.directive('preview', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/preview.html',
		scope : {
			text : '=text',
			rows : '@rows'
		}
	}
})




app.directive('hotelItem', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/hotelItem.html'
	}
})


app.directive('quickAdd', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/quickAdd.html',
		controller : 'addController'
	}
})




app.directive('nav', function(){
	return {
		restrict : 'E',
		templateUrl: 'partials/nav.html'
	}
})

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

