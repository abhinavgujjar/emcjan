//declaration of module
var app = angular.module('emcApp', []);

//services
//	value
//	service / factory
//	provider
// 

//defined a value service
app.value('uiConfig', {
	descLength: 50,
	limit: 5,
	maxRating : 10
});

