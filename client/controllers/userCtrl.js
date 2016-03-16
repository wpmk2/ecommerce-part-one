angular.module('ecommerceApp').controller('userCtrl', function ($scope, $state, userService) {
	
	$scope.login = function(user){
		userService.getUser(user.email).then(function(res){
			console.log(res.data[0]);
			console.log("logged in as " + res.data[0].email);
			$scope.user = res.data[0];
			$scope.authed = true;
			$state.go('home');
		}).catch(function(e){
			console.log('error, ', e);
		})
	}
	
	$scope.logout = function(user){
		userService.getUser(user.email).then(function(res){
			console.log(res.data[0]);
			console.log("logged out " + res.data[0].email);
			$scope.user = '';
			$scope.authed = false;
			$state.go('home');
		});
	}
	
})