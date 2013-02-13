'use strict';

describe('Controller: PartnershipCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var PartnershipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    PartnershipCtrl = $controller('PartnershipCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
