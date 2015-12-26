'use strict';

describe('Module: Module2, Controller: Module2Ctrl (modules/module2/module2.js)', function () {
  var ctrl;

  beforeEach(module('Module2'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('Module2Ctrl');
  }));

  describe('scope properties', function () {

    it('should have title=" Module2 "', function () {
      expect(ctrl.title).toEqual('Module2');
    });

  });

});

