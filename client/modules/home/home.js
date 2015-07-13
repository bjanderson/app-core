(function () {
'use strict';

angular
  .module('Home', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      HomeConfig    
    ]
  )

  .controller(
    'HomeCtrl',
    [
      HomeCtrl
    ]
  );

function HomeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      '': {
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/home/home.tpl.html');
        }
      }
    },

    data: {
      pageTitle: 'Home'
    }
  });
}

function HomeCtrl() {
  var self = this;

  self.title = 'Home';
  
}


})();
