(function () {
'use strict';

angular
  .module('NestedModules', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      NestedModulesConfig    
    ]
  )

  .controller(
    'NestedModulesCtrl',
    [
      NestedModulesCtrl
    ]
  );

function NestedModulesConfig($stateProvider) {
  $stateProvider.state('nestedmodules', {
    url: '/nestedmodules',
    views: {
      '': {
        controller: 'NestedModulesCtrl',
        controllerAs: 'nestedmodules',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/nestedmodules/nestedmodules.tpl.html');
        }
      },

      'module1@nestedmodules': {
        controller: 'Module1Ctrl',
        controllerAs: 'module1',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module1/module1.tpl.html');
        }
      },

      'module2@nestedmodules': {
        controller: 'Module2Ctrl',
        controllerAs: 'module2',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module2/module2.tpl.html');
        }
      },

      'module3@nestedmodules': {
        controller: 'Module3Ctrl',
        controllerAs: 'module3',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/module3/module3.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'NestedModules'
    }
  });
}

function NestedModulesCtrl() {
  var self = this;

  self.title = 'NestedModules';
  
  self.showModule1 = true;
  self.showModule2 = true;
  self.showModule3 = true;
}


})();

