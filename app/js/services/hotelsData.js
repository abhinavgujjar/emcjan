app.factory('hotelsData', function($http, $q) {

	var headers = {
		'X-Parse-Application-Id': 'KWQ0rGbTccdhYd4a0Cawy21wpi94GBdh9VjnQsyZ',
		'X-Parse-REST-API-Key': 'M0j6NQBiPVgdOnuv5811fbgTojTAVqo6XjF1E3Pd',
	};
	return {
		getHotels: function() {

			var deferred = $q.defer();

			$http.get('https://api.parse.com/1/classes/hnc', {
					headers: headers
				})
				.success(function(data, status, headers, config) {
					deferred.resolve(data.results);
				}).error(function() {
					deferred.reject('AAAAA .. womsething went wrong');
				});

			return deferred.promise;

		},
		addHotel: function(hotel) {
			var deferred = $q.defer();
			$http.post('https://api.parse.com/1/classes/hnc', hotel, {
					headers: headers
				})
				.success(function(data, status, headers, config) {
					deferred.resolve();
				});

				return deferred.promise

		}
	}

})