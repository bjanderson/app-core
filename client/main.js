'use strict';

angular.module('MainApp',
  [
    'Home',
    'ui.router'
  ]
);

angular.module('MainApp').config(
  [
    '$urlRouterProvider',
    function (
      $urlRouterProvider
    ) {
      //configure any routes that are not controlled by ui-router
      $urlRouterProvider
        .otherwise('/home');  //default to the entry point for our ui-router state handlers
    }
  ]
);

angular.module('MainApp').controller(
  'MainAppCtrl',
  [
    '$location',
    '$scope',
    function (
      $location,
      $scope
    ) {

      $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        var siteName = 'MEAN App Core';

        //update the page title from the title value defined in the new state
        if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle + ' | ' + siteName;
        } else {
          $scope.pageTitle = siteName;
        }

      });
    }
  ]
);