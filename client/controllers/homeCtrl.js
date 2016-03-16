angular.module('ecommerceApp').controller('homeCtrl', function ($scope, commerceService) {
	commerceService.getProducts().then(function (res) {
		console.log(res);
		$scope.products = res.data;
	});
	
	console.log($scope.user, $scope.authed);
	
	$scope.addToCart = function(item){
		commerceService.addItem($scope.user._id, item).then(function(res) {
			console.log(res);
		})
		console.log($scope.user.cart);
	}
	
})