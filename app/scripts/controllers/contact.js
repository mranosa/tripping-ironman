'use strict';

trippingIronmanApp.controller('ContactCtrl', ['$scope', '$http', 'NotificationService', function($scope, $http, NotificationService) {

  $scope.email = {
    name: '',
    from: '',
    message: ''
  };

  $scope.sendEmail = function(){
    console.log($scope.email);
    NotificationService.info('Sending Email!', 'Sending email in progress');
    $http.get('http://localhost:8080/nci/email?name=' + $scope.email.name + '&message=' + $scope.email.message + '&from=' + $scope.email.from
      ).success(function(result){
        NotificationService.success('Sending Email Done!', 'Email sent!');
        $scope.email = {
          name: '',
          from: '',
          message: ''
        }
      });
    }

}]);
