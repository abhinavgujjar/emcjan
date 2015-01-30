var RealRateProvider = function(){
	return {
		getRate : function(){
			//htttp calll to out side service to get rate
		}
	}
}


var TaxCalculator = function(rateProvider){
	return {
		calculateTax : function(income){
			var tax = income * rateProvider.getRate();

			return tax;
		}
	}
}