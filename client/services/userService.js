angular.module('ecommerceApp').service('userService', function($http, $q){
	
	this.getUser = function(email){
		return $http.get('/user?email=' + email).error(function(err){
			return err;
		})
	}
	
})