
var myApp = angular.module('myApp', [
	'ngRoute',
	'UsersApp'
]); 
	myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/list',{
					templateUrl: "list.html",
					controller : "ListController"
		}).
		otherwise({
			redirectTo: '/list'
		});
	}]);
