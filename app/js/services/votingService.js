app.factory('votingService', function() {

	return {
		upVote: function(hotel) {
			if (hotel.rating < 10) {
				hotel.rating++;
			}

		},
		downVote: function(hotel) {
			hotel.rating--;
		}
	}

})