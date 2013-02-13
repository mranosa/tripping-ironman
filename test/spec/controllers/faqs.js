'use strict';

describe('Controller: FaqsCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var FaqsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    FaqsCtrl = $controller('FaqsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
