'use strict';

describe('Service: NotificationService', function () {

  // load the service's module
  beforeEach(module('trippingIronmanApp'));

  // instantiate service
  var NotificationService;
  beforeEach(inject(function(_NotificationService_) {
    NotificationService = _NotificationService_;
  }));

  it('should do something', function () {
    expect(!!NotificationService).toBe(true);
  });

});
