'use strict';

describe('Controller: OfficialsCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var OfficialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    OfficialsCtrl = $controller('OfficialsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
