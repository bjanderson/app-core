(function () {
'use strict';

angular
  .module('Module2', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      Module2Config    
    ]
  )

  .controller(
    'Module2Ctrl',
    [
      Module2Ctrl
    ]
  );

function Module2Config($stateProvider) {
  $stateProvider.state('module2', {
    url: '/module2',
    views: {
      '': {
        controller: 'Module2Ctrl',
        controllerAs: 'module2',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module2/module2.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'Module2'
    }
  });
}

function Module2Ctrl() {
  var self = this;

  self.title = 'Module2';
  
}


})();

