angular.module('ecommerceApp').service('commerceService', function($http, $q){
	this.getProducts = function(){
		return $http.get('/products').error(function(err){
			return err;
		})
	}
})