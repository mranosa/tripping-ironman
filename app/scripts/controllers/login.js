'use strict';

trippingIronmanApp.controller('LoginCtrl', [
	'$scope', '$http', 'NotificationService',
	function($scope, $http, NotificationService) {

	$scope.input = {
		username: '',
		password: ''
	}

	$scope.login = function(){
		if(isEmpty($scope.input.username) || isBlank($scope.input.username) ||
			isEmpty($scope.input.password) || isBlank($scope.input.password)){

			NotificationService.warning('All fields required!', 'Please ensure that username and password are not empty!');

			return;
		}
		$http.get('http://localhost:8080/nci/accounts?find=ByUsernameEquals&username=' + 
			$scope.input.username).success(function(result){
				if(result.length === 0){
					NotificationService.error('Invalid Credentials!', 'Ensure username and password are correct!');
					return;
				}

				if($scope.input.password === result[0].password){
					//login successful
					NotificationService.success('Login Success!', 'Welcome back boss ' + result[0].name + '!');

					//TODO save user credentials on lawnchair
					//TODO forward to home
				} else {
					NotificationService.error('Invalid Credentials!', 'Ensure username and password are correct!');
				}
	      	});
	};

	function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

}]);