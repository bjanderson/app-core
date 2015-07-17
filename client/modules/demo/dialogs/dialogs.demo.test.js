'use strict';

describe('Module: DialogsDemo, Controller: DemoCtrl (modules/demo/dialogs/dialogs.demo.js)', function () {
  var ctrl;

  beforeEach(module('DialogsDemo'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('DialogsDemoCtrl');
  }));

  describe('scope properties', function () {

    it('should have title="DialogsDemo"', function () {
      expect(ctrl.title).toEqual('DialogsDemo');
    });

  });

});
