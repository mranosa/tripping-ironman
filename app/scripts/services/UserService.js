'use strict';

trippingIronmanApp.factory('UserService', [
  '$resource', '$http', 
  function($resource, $http) {

    var userRef;
    var db = new Lawnchair({name:'user', record:'user', adapters:['dom']});

    var UserService = new function(){

    }

    UserService.prototype = {
      save: function(uname){
        db.save({key: uname, username:uname}});
      },
      remove: function(){
        db.nuke();
      },
      get: function(key){
        db.get(key, function(obj){
          return obj ? obj['value'] : undefined;
        })
      }
    };

    return new UserService();
  }]);
