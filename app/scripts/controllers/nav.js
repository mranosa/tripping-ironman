'use strict';

trippingIronmanApp.controller('NavCtrl', [
	'$scope', '$location', 
	function($scope, $location) {
	$scope.nav = {
		login : true
	};

    $scope.$on('hide_login', function () {
        $scope.nav.login = false;
        $location.path('/materials');
    });

    $scope.logout = function(){
    	//TODO clear localsotre
    	$scope.nav.login = true;
    };

}]);
