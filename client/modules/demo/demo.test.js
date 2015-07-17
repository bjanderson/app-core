'use strict';

describe('Module: Demo, Controller: DemoCtrl (modules/demo/demo.js)', function () {
  var ctrl;

  beforeEach(module('Demo'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('DemoCtrl');
  }));

  describe('scope properties', function () {

    it('should have title="Demo"', function () {
      expect(ctrl.title).toEqual('Demo');
    });

  });

});
