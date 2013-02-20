'use strict';

trippingIronmanApp.factory('UserService', [
  '$resource', '$http', 
  function($resource, $http) {

    var UserService = new function(){

    }

    UserService.prototype = {
      getByUsername: function(uname){
        $http.get('http://localhost:8080/nci/accounts?' + 
          'find=getByUsername&username=' + uname).success(
          function(result){
            return result;
          });
        }
      };

      return new UserService();
    }]);
