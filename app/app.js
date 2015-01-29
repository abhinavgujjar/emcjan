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
	limit: 5
});



app.factory('timeCalculator', function() {

	return {
		getTimeOfDay: function() {
			var hours = (new Date()).getHours();
			var timeOfDay = 'Morning';
			if (hours >= 12) {
				timeOfDay = 'Afternoon';
			}

			if (hours >= 16) {
				timeOfDay = 'Evening';
			}

			if (hours >= 21) {
				timeOfDay = 'Evening';
			}

			return timeOfDay + 'XXXX';
		}
	}

})