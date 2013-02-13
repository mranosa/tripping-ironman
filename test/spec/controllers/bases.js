'use strict';

describe('Controller: BasesCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var BasesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    BasesCtrl = $controller('BasesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
