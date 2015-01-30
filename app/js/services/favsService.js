app.factory('favsService', function() {
	var favs = [];
	
	return {
		addFavs: function(hotel) {

			favs.push(hotel);
		},
		favs: favs
	}

})