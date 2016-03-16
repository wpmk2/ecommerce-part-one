angular.module('ecommerceApp').controller('adminCtrl', function ($scope, commerceService) {
	
	var getProducts = function () {
		commerceService.getProducts().then(function (res) {
			console.log(res);
			$scope.products = res.data;
		});
	};
	getProducts();

	$scope.addProduct = function () {
		commerceService.postProduct($scope.newProduct).then(function (res) {
			getProducts();
		})
		$scope.newProduct = '';
	}
	
	$scope.removeProduct = function (id) {
		commerceService.removeProduct(id).then(function (res) {
			getProducts();
		})
	}
	
	$scope.showThis = true;
	
	$scope.editProduct = function(product){
		commerceService.editProduct(product).then(function(res){
			getProducts();
		})
	}
	
})