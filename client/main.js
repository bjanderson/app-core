(function () {
'use strict';

angular
  .module('MainApp',
    [
      'Demo',
      'Home',
      'NestedModules',
      'User',
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
      '$state',
      'UserService',
      MainAppCtrl
    ]
  );

function MainAppConfig($urlRouterProvider) {
  //configure any routes that are not controlled by ui-router
  $urlRouterProvider
    .otherwise('/home');  //default to the entry point for our ui-router state handlers
}

function MainAppCtrl($location, $scope, $state, UserService) {

  $scope.$on('$stateChangeStart', function (event, toState, toParams) {
    if (toState.authenticate && !UserService.isLoggedIn()) {
      UserService.setDeferredState(toState, toParams);
      $state.go('login');
      event.preventDefault();
    }
  });

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
