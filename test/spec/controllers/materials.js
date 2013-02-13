'use strict';

describe('Controller: MaterialsCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var MaterialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MaterialsCtrl = $controller('MaterialsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
