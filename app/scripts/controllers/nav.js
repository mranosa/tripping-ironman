'use strict';

trippingIronmanApp.controller('NavCtrl', [
	'$scope', '$location', 'UserService', 'NotificationService',
	function($scope, $location, UserService, NotificationService) {
	$scope.nav = {
		login : true
	};

    $scope.$on('hide_login', function () {
        $scope.hideLogin();
    });

    $scope.hideLogin = function(){
    	UserService.isLoggedIn(true);
    	$scope.nav.login = false;
        $location.path('/materials');
    };

    $scope.logout = function(){
    	UserService.isLoggedIn(false);
    	UserService.removeAll();
    	$scope.nav.login = true;
    	$location.path('/home');
    };

    UserService.getDb().all(function(res){
    	if(res.length > 0){
    		$scope.hideLogin();
    	}
    });
}]);
