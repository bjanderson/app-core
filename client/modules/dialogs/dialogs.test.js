'use strict';

describe('Module: Dialogs, Controller: ModalDialogCtrl (modules/dialogs/dialogs.js)', function () {
  var ctrl,
    scope,
    modalInstance;

  beforeEach(module('Dialogs'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    modalInstance = {                    // Create a mock object using spies
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };

    ctrl = $controller('ModalDialogCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      data: function () {
        return {_modalTitle: 'Test Title', message: 'Test message.'};
      }
    });
  }));

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(ctrl).not.toBeUndefined();
    });

    it('should close the modal with result "cancel" when canceled', function () {
      scope.cancel();
      expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
    });

    it('should close the modal with result "close" when closed', function () {
      scope.close();
      expect(modalInstance.dismiss).toHaveBeenCalledWith('close');
    });

    it('should close the modal when ok() is called', function () {
      scope.ok();
      expect(modalInstance.close).toHaveBeenCalled();
    });
  });
});
