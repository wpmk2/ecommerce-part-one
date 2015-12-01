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
                    controller: 'adminController'
                })
                
        });