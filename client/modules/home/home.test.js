'use strict';

describe('Module: Home, Controller: HomeCtrl (modules/home/home.js)', function () {
  var ctrl,
    scope;

  beforeEach(module('Home'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  describe('scope properties', function () {

    it('should have title="Home"', function () {
      expect(scope.title).toEqual('Home');
    });

  });

});
