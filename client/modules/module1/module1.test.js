'use strict';

describe('Module: Module1, Controller: Module1Ctrl (modules/module1/module1.js)', function () {
  var ctrl;

  beforeEach(module('Module1'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('Module1Ctrl');
  }));

  describe('scope properties', function () {

    it('should have title=" Module1 "', function () {
      expect(ctrl.title).toEqual('Module1');
    });

  });

});

