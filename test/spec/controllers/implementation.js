'use strict';

describe('Controller: ImplementationCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var ImplementationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ImplementationCtrl = $controller('ImplementationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
