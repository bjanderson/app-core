'use strict';

describe('Module: Module3, Controller: Module3Ctrl (modules/module3/module3.js)', function () {
  var ctrl;

  beforeEach(module('Module3'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('Module3Ctrl');
  }));

  describe('scope properties', function () {

    it('should have title=" Module3 "', function () {
      expect(ctrl.title).toEqual('Module3');
    });

  });

});

