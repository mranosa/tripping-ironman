'use strict';

describe('Controller: PartnersCtrl', function() {

  // load the controller's module
  beforeEach(module('trippingIronmanApp'));

  var PartnersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    PartnersCtrl = $controller('PartnersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
