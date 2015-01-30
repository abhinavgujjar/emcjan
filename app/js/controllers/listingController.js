app.controller('listingController', function($scope, uiConfig, votingService, $http, favsService) {

			$scope.votingService = votingService;

			$scope.$on('hotelAdded', function(event, args){
				$scope.hotels.push(args);
			})

			$scope.toggleMore = function(item) {
				item.showMore = !item.showMore;
			}

			$scope.addToFav = function(hotel){
				favsService.addFavs(hotel);
			}

			$scope.descLength = uiConfig.descLength;

			$scope.limitItems = uiConfig.limit;

			$http.get('https://api.parse.com/1/classes/hnc', {
					headers: {
						'X-Parse-Application-Id': 'KWQ0rGbTccdhYd4a0Cawy21wpi94GBdh9VjnQsyZ',
						'X-Parse-REST-API-Key': 'M0j6NQBiPVgdOnuv5811fbgTojTAVqo6XjF1E3Pd',
					}
				})
				.success(function(data, status, headers, config) {
					if (status >= 200 && status <= 299) {
						$scope.hotels = data.results;
					} else {
						alert('AAAAA .. womsething went wrong');
					}
				});
			})