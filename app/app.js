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


app.directive('panel', function(){
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : 'partials/panel.html',
		scope : {
			heading : '@',
			headerClass : '@'
		}
	}
})


app.directive('zoom', function(){
	return {
		restrict : 'A',
		link : function(scope, element, attrs, ctrl){

			element.on('mouseenter', function(){
				element.css({
					"font-size" : "42px"
				})
			})
		}
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
		templateUrl: 'partials/hotelItem.html',
	}
})


app.directive('onlyEven', function(){
	return{
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl){

			ctrl.$parsers.unshift(checkForEven)

			function checkForEven(viewValue) {
				if (parseInt(viewValue) % 2 === 0) {
					ctrl.$setValidity('evenNumber', true);
				} else {
					ctrl.$setValidity('evenNumber', false);
				}
				return viewValue;
			}

		}
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

