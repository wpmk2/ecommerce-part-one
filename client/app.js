angular.module('ecommerceApp', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl'
                })
                
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'templates/admin.html',
                    controller: 'adminCtrl'
                })
                
                .state('orders', {
                    url: '/orders',
                    templateUrl: 'templates/orders.html',
                    controller: 'adminCtrl'
                })
                
                .state('cart', {
                    url: '/cart',
                    templateUrl: 'templates/cart.html',
                    controller: 'cartCtrl'
                })
                
                .state('user', {
                    url: '/user',
                    templateUrl: 'templates/user.html',
                    controller: 'homeCtrl'
                })
                
        });