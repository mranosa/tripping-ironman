'use strict';

trippingIronmanApp.controller('NavCtrl', [
	'$scope', '$location', 'UserService',
	function($scope, $location, UserService) {
	$scope.nav = {
		login : true
	};

    $scope.$on('hide_login', function () {
        $scope.hideLogin();
    });

    $scope.hideLogin = function(){
    	$scope.nav.login = false;
        $location.path('/materials');
    };

    $scope.logout = function(){
    	UserService.removeAll();
    	$scope.nav.login = true;
    };

    UserService.getDb().all(function(res){
    	if(res.length > 0){
    		$scope.hideLogin();
    	}
    });
}]);
