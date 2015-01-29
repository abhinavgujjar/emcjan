//test suite
describe('Tax Calculator', function(){
	//individual test
	it('it should exist', function(){

		expect(TaxCalculator).toBeDefined();

	});

	describe('calculate Tax', function(){

		it('should have 0 tax for 0 income', function(){
			var calculator = TaxCalculator();

			var tax = calculator.calculateTax(0);

			expect(tax).toBe(0);
		})

		it('should have 500 tax for 1000 income', function(){
			var fakeRateProvider = {
				getRate : function(){
					return 0.5;
				}
			}

			var calculator = TaxCalculator(fakeRateProvider);

			var tax = calculator.calculateTax(1000);

			expect(tax).toBe(500);

		})

	})

})