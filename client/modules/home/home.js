'use strict';

angular.module('Home', 
  [
    'ui.router'
  ]
);

angular.module('Home').config(
  [
    '$stateProvider',
    function (
       $stateProvider
    ) {

      $stateProvider.state('home', {
        url: '/home',
        views: {
          '': {
            controller: 'HomeCtrl',
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
  ]
);

angular.module.('Home').controller(
  'HomeCtrl',
  [
    '$scope',
    function (
      $scope
    ) {
      $scope.title = 'Home';
    }
  ]
);