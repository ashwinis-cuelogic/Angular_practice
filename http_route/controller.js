var UsersApp = angular.module("UsersApp", []); 
	UsersApp.controller('ListController', ['$scope', '$http', function($scope, $http){
					 $http.get('users.json').success(function(data) { console.log("http success");
					$scope.users = data;
    		});
	}]);