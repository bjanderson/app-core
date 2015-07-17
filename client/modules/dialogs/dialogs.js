(function () {
'use strict';

angular.module('Dialogs', ['ui.bootstrap'])

  .service('ModalDialog',
    [
      '$modal',
      '$templateCache',
      ModalDialog
    ]
  )

  .controller('ModalDialogCtrl', ModalDialogCtrl);

/**
  @name ModalDialog
  @desc A re-usable modal dialog that can display custom dialogs.
*/
function ModalDialog($modal, $templateCache) {

  return {

    /**
     * This callback returns the data from the dialog to the initiating controller.
     * @callback dataCallback
     * @param {Object} data - The data from the dialog.
     */

    /**
     * Open a confirmation dialog
     *
     * @param {Object} dialogData - the data to load into the dialog fields
     * @param {String} dialogData._modalTitle - The text to show in the dialog header. Used with the confirm, error, 
     *                                          and message dialogs. Default: Confirm
     * @param {String} dialogData.message - The text to display in the dialog. Used the confirm, error, and message 
     *                                      dialogs.
     * @param {String} dialogData._okText - The text to show in the OK button (e.g. Submit, Continue, Yes, etc...). 
     *                                      Default: OK
     * @param {String} dialogData._cancelText - The text to show in the Cancel button (e.g. No). Default: Cancel
     * @param {dataCallback} dataCallback - the callback to call when the dialog is closed (not dismissed)
     * @param {Object} options - (optional) other options for the dialog
     * @param {String} options.size - a bootstrap size for the dialog window. Can be sm, md, or lg. Default: sm
     * @param {String} options.backdrop - if set to "static" the dialog will not close unless the user clicks one of 
     *                                    the buttons. If set to true the backdrop will be shown, if set to false the
     *                                    the backdrop will not be shown.
     */
    openConfirmationDialog: function (dialogData, dataCallback, options) {

      var dialog = $modal.open(
        {
          backdrop: getBackdrop(options),
          controller: 'ModalDialogCtrl',
          resolve: {
            data: function () {
              if (dialogData._modalTitle == null || dialogData._modalTitle === '') {
                dialogData._modalTitle = 'Confirm';
              }

              dialogData._backdrop = getBackdrop(options);

              return dialogData;
            }
          },
          size: getSize(options),
          template: $templateCache.get('modules/dialogs/confirmDialog.tpl.html')
        }
      );

      dialog.result.then(function (data) {
        if (angular.isFunction(dataCallback)) {
          dataCallback(data);
        }
      });
    },



    /**
     * Define the dialog to display
     *
     * @param {String} template - the html to use for the dialog
     * @param {Object} dialogData - the data to load into the dialog fields
     * @param {String} dialogData._modalTitle - The text to show in the dialog header. Used with the confirm, error, 
     *                                          and message dialogs.
     * @param {String} dialogData.message - The text to display in the dialog. Used the confirm, error, and message 
     *                                      dialogs.
     * @param {String} dialogData._okText - The text to show in the OK button (e.g. Submit, Continue, Yes, etc...). 
     *                                      Default: OK
     * @param {String} dialogData._cancelText - The text to show in the Cancel button (e.g. No). Default: Cancel
     * @param {dataCallback} dataCallback - the callback to call when the dialog is closed (not dismissed)
     * @param {Object} options - (optional) other options for the dialog
     * @param {String} options.size - a bootstrap size for the dialog window. Can be sm, md, or lg. Default: sm
     * @param {String} options.backdrop - if set to "static" the dialog will not close unless the user clicks one of 
     *                                    the buttons. If set to true the backdrop will be shown, if set to false the
     *                                    the backdrop will not be shown.
     */
    openCustomDialog: function (template, dialogData, dataCallback, options) {
      var dialog = $modal.open(
        {
          backdrop: getBackdrop(options),
          controller: 'ModalDialogCtrl',
          resolve: {
            data: function () {
              dialogData._backdrop = getBackdrop(options);

              return dialogData;
            }
          },
          size: getSize(options),
          template: $templateCache.get(template)
        }
      );

      dialog.opened.then(function () {
        // give one of your form fields a class of autofocus and this
        // will put the cursor in that field when the dialog opens
        setTimeout(function () {
          angular.element('.autofocus').focus();
        }, 100);
      });

      dialog.result.then(function (data) {
        if (angular.isFunction(dataCallback)) {
          dataCallback(data);
        }
      });
    },



    /**
     * Open an error dialog
     *
     * @param {Object} dialogData - the data to load into the dialog fields
     * @param {String} dialogData._modalTitle - The text to show in the dialog header. Used with the confirm, error, 
     *                                          and message dialogs. Default: Error
     * @param {String} dialogData.message - The text to display in the dialog. Used the confirm, error, and message 
     *                                      dialogs.
     * @param {Object} options - (optional) other options for the dialog
     * @param {String} options.size - a bootstrap size for the dialog window. Can be sm, md, or lg. Default: sm
     * @param {String} options.backdrop - if set to "static" the dialog will not close unless the user clicks one of 
     *                                    the buttons. If set to true the backdrop will be shown, if set to false the
     *                                    the backdrop will not be shown.
     */
    openErrorDialog: function (dialogData, options) {
      $modal.open(
        {
          backdrop: getBackdrop(options),
          controller: 'ModalDialogCtrl',
          resolve: {
            data: function () {
              if (dialogData._modalTitle == null || dialogData._modalTitle === '') {
                dialogData._modalTitle = 'Error';
              }

              dialogData._backdrop = getBackdrop(options);

              return dialogData;
            }
          },
          size: getSize(options),
          template: $templateCache.get('modules/dialogs/errorDialog.tpl.html')
        }
      );
    },



    /**
     * Open a message dialog
     *
     * @param {Object} dialogData - the data to load into the dialog fields
     * @param {String} dialogData._modalTitle - The text to show in the dialog header. Used with the confirm, error, 
     *                                          and message dialogs. Default: Message
     * @param {String} dialogData.message - The text to display in the dialog. Used the confirm, error, and message 
     *                                      dialogs.
     * @param {Object} options - (optional) other options for the dialog
     * @param {String} options.size - a bootstrap size for the dialog window. Can be sm, md, or lg. Default: sm
     * @param {String} options.backdrop - if set to "static" the dialog will not close unless the user clicks one of 
     *                                    the buttons. If set to true the backdrop will be shown, if set to false the
     *                                    the backdrop will not be shown.
     */
    openMessageDialog: function (dialogData, options) {
      $modal.open(
        {
          backdrop: getBackdrop(options),
          controller: 'ModalDialogCtrl',
          resolve: {
            data: function () {
              if (dialogData._modalTitle == null || dialogData._modalTitle === '') {
                dialogData._modalTitle = 'Message';
              }

              dialogData._backdrop = getBackdrop(options);

              return dialogData;
            }
          },
          size: getSize(options),
          template: $templateCache.get('modules/dialogs/messageDialog.tpl.html')
        }
      );
    }


  };

}



/**
  @name ModalDialogCtrl
  @desc Configure data for the dialog, and button click handlers. 
*/
function ModalDialogCtrl($modalInstance, $scope, data) {
  $scope.data = jQuery.extend({}, data);

  if ($scope.data._okText == null || $scope.data._okText === '') {
    $scope.data._okText = 'OK';
  }

  if ($scope.data._cancelText == null || $scope.data._cancelText === '') {
    $scope.data._cancelText = 'Cancel';
  }

  $scope.ok = function () {
    $scope.data._ok = true;
    $modalInstance.close($scope.data);
  };

  $scope.no = function () {
    $scope.data._ok = false;
    $modalInstance.close($scope.data);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };
}

// conveinience functions for getting data out of the options object
function getSize(options) {
  var size = 'sm';
  if (options != null && options.size != null && options.size !== '') {
    size = options.size;
  }

  return size;
}

function getBackdrop(options) {
  var backdrop = true;
  if (options != null && options.backdrop != null && options.backdrop !== '') {
    backdrop = options.backdrop;
  }

  return backdrop;
}

}());
