var app = angular.module("badaBingBadaBoom", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/index', {

			templateUrl: '/index.html'

		})

		.when('/form', {

			controller: 'formCtrl',

			templateUrl: 'view/form.html'

		})

		.when('/result', {

			controller: 'resultCtrl',

			templateUrl: 'view/result.html'

		})

		.when('/adopt', {

			controller: 'adoptCtrl',

			templateUrl: 'view/adopt.html'

		});

	$locationProvider.hashPrefix('');
});


// form, adopt, result
