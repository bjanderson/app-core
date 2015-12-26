(function () {
'use strict';

angular
  .module('Module3', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      Module3Config    
    ]
  )

  .controller(
    'Module3Ctrl',
    [
      Module3Ctrl
    ]
  );

function Module3Config($stateProvider) {
  $stateProvider.state('module3', {
    url: '/module3',
    views: {
      '': {
        controller: 'Module3Ctrl',
        controllerAs: 'module3',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module3/module3.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'Module3'
    }
  });
}

function Module3Ctrl() {
  var self = this;

  self.title = 'Module3';
  
}


})();

