'use strict';

trippingIronmanApp.factory('UserService', [
  '$resource', '$http', 
  function($resource, $http) {

    var isLoggedIn = false;
    var db = new Lawnchair({name:'user', record:'user', adapters:['dom']}, function(){});

    var UserService = function() {

    };

    UserService.prototype = {
      save: function(uname){
        db.save({key: uname, username:uname});
      },
      removeAll: function(){
        db.nuke();
      },
      getDb: function(){
        return db;
      },
      setIsLoggedIn: function(isLoggedInNewVal){
        isLoggedIn = isLoggedInNewVal;
      },
      isLoggedIn: function(){
        return isLoggedIn;
      }
    };

    return new UserService();
  }]);
