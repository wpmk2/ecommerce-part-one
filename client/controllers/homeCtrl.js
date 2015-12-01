angular.module('ecommerceApp').controller('homeCtrl', function ($scope, commerceService) {
	commerceService.getProducts().then(function (res) {
		console.log(res);
		$scope.products = res.data;
	});
})