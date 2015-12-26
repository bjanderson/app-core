'use strict';

describe('Module: NestedModules, Controller: NestedModulesCtrl (modules/nestedmodules/nestedmodules.js)', function () {
  var ctrl;

  beforeEach(module('NestedModules'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('NestedModulesCtrl');
  }));

  describe('scope properties', function () {

    it('should have title=" NestedModules "', function () {
      expect(ctrl.title).toEqual('NestedModules');
    });

  });

});

