describe('Voting Service', function(){

	beforeEach(module('emcApp'));

	it('should exist', inject(function(votingService){
		expect(votingService).toBeDefined();
	}))

	it('should increment the vote', inject(function(votingService){
		var fakeHotel = {
			rating : 2
		};

		votingService.upVote(fakeHotel);

		expect(fakeHotel.rating).toBe(3);
	}))

	it('should not increment beyond 10', inject(function(votingService){
		var fakeHotel = {
			rating : 10
		};

		votingService.upVote(fakeHotel);

		expect(fakeHotel.rating).toBe(10);
	}))

})