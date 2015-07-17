(function () {
'use strict';

angular
  .module('MainApp',
    [
      'Demo',
      'Home',
      'ui.router'
    ]
  )

  .config(
    [
      '$urlRouterProvider',
      MainAppConfig
    ]
  )

  .controller(
    'MainAppCtrl',
    [
      '$location',
      '$scope',
      MainAppCtrl
    ]
  );

function MainAppConfig($urlRouterProvider) {
  //configure any routes that are not controlled by ui-router
  $urlRouterProvider
    .otherwise('/home');  //default to the entry point for our ui-router state handlers
}

function MainAppCtrl($location, $scope) {
  $scope.$on('$stateChangeSuccess', function (event, toState) {
    var siteName = 'MEAN App Core';

    //update the page title from the title value defined in the new state
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | ' + siteName;
    } else {
      $scope.pageTitle = siteName;
    }
  });
}

})();
