var RealRateProvider = function(){
	return {
		getRate : function(){
			
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