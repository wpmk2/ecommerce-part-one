angular.module('ecommerceApp').service('commerceService', function($http, $q){
	this.getProducts = function(){
		return $http.get('/products').error(function(err){
			return err;
		})
	}
	
	this.postProduct = function(product){
		return $http.post('/products', product).error(function(err){
			return err;
		})
	}
	
	this.removeProduct = function(id){
		return $http.delete('/products/' + id).error(function(err){
			return err;
		})
	}
	
	this.editProduct = function(prod){
		console.log(prod);
		return $http.put('/products/' + prod._id, prod).error(function(err){
			return err;
		})
	}
	
	///// cart interactions
	this.addItem = function(id, product){
		console.log(id, product);
		return $http.put('/cart/' + id, product).error(function(err){
			return err;
		})
	}
})