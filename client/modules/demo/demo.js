(function () {
'use strict';

angular
  .module('Demo',
    [
      'DialogsDemo',
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      DemoConfig
    ]
  )

  .controller(
    'DemoCtrl',
    [
      DemoCtrl
    ]
  );

function DemoConfig($stateProvider) {
  $stateProvider.state('demo', {
    url: '/demo',
    views: {
      '': {
        controller: 'DemoCtrl',
        controllerAs: 'demo',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/demo/demo.tpl.html');
        }
      },

      'dialogs@demo': {
        controller: 'DialogsDemoCtrl',
        controllerAs: 'dialogsdemo',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/demo/dialogs/dialogs.demo.tpl.html');
        }
      }

    },

    data: {
      pageTitle: 'Demo'
    }
  });
}

function DemoCtrl() {
  var self = this;

  self.title = 'Demo';

}


})();
