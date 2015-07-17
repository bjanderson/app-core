'use strict';

describe('Module: Home, Controller: HomeCtrl (modules/home/home.js)', function () {
  var ctrl;

  beforeEach(module('Home'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('HomeCtrl');
  }));

  describe('scope properties', function () {

    it('should have title="Home"', function () {
      expect(ctrl.title).toEqual('Home');
    });

  });

});
