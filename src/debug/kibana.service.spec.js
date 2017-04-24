'use strict';

describe('Service: amwebUtils', function () {

  // load the service's module
  beforeEach(module('feDomainPanelSaleApp'));

  // instantiate service
  var amwebUtils;
  beforeEach(inject(function (_amwebUtils_) {
    amwebUtils = _amwebUtils_;
  }));

  it('should do something', function () {

  	console.log('amwebUtils', amwebUtils);
  });

});
