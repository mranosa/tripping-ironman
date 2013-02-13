'use strict';

describe('Controller: OverviewCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var OverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    OverviewCtrl = $controller('OverviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
