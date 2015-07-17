(function () {
'use strict';

angular
  .module('DialogsDemo', 
    [
      'Dialogs',
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      DialogsDemoConfig    
    ]
  )

  .controller(
    'DialogsDemoCtrl',
    [
      'ModalDialog',
      DialogsDemoCtrl
    ]
  );

function DialogsDemoConfig($stateProvider) {
  $stateProvider.state('dialogsdemo', {
    url: '/dialogsdemo',
    views: {
      '': {
        controller: 'DialogsDemoCtrl',
        controllerAs: 'dialogsdemo',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/demo/dialogs/dialogs.demo.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'DialogsDemo'
    }
  });
}

function DialogsDemoCtrl(ModalDialog) {
  var self = this;

  self.title = 'DialogsDemo';

  self.showMessageDialog = showMessageDialog;
  self.showErrorDialog = showErrorDialog;
  self.showConfirmationDialog = showConfirmationDialog;
  self.showCustomDialog = showCustomDialog;

  function showMessageDialog() {
    var dialogData = {
        _modalTitle: 'Message Demo',
        message: 'This is a demo of the message dialog.'
      },
      options = {
        size: 'lg',
        backdrop: false
      };

    ModalDialog.openMessageDialog(dialogData, options);
  }

  function showErrorDialog() {
    var dialogData = {
        _modalTitle: 'Error Demo',
        message: 'This is a demo of the error dialog.'
      };

    ModalDialog.openErrorDialog(dialogData);
  }

  function showConfirmationDialog() {
    var dialogData = {
        _modalTitle: 'Confirm Demo',
        message: 'This is a demo of the confirmation dialog. It will tell you what you clicked.',
        _okText: 'Yes',
        _cancelText: 'No'
      },
      dataCallback = function (data) {
        console.log(data);
        if (data._ok === true) {
          alert('You Clicked Yes');
        } else {
          alert('You Clicked No');
        }
      },
      options = {
        size: 'md',
        backdrop: 'static'
      };

    ModalDialog.openConfirmationDialog(dialogData, dataCallback, options);
  }

  function showCustomDialog() {
    var template = 'modules/demo/dialogs/customdialog.tpl.html',
      dialogData = {
        _modalTitle: 'Custom Demo',
        _okText: 'Submit',
        _cancelText: 'Don\'t Submit',
        name: 'Joe Doe',
        email: 'joe@example.com',
        favoriteColor: 'blue',
        colors: [
          'blue',
          'red',
          'white'
        ]
      },
      
      dataCallback = function (data) {
        console.log(data);
        alert('Your Data is in the console');
      },

      options = {
        size: 'lg',
        backdrop: 'static'
      };

    ModalDialog.openCustomDialog(template, dialogData, dataCallback, options);
  }
  
}


})();
