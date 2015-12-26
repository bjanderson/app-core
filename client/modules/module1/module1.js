(function () {
'use strict';

angular
  .module('Module1', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      Module1Config    
    ]
  )

  .controller(
    'Module1Ctrl',
    [
      Module1Ctrl
    ]
  );

function Module1Config($stateProvider) {
  $stateProvider.state('module1', {
    url: '/module1',
    views: {
      '': {
        controller: 'Module1Ctrl',
        controllerAs: 'module1',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module1/module1.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'Module1'
    }
  });
}

function Module1Ctrl() {
  var self = this;

  self.title = 'Module1';
  
}


})();

