(function () {
'use strict';

angular
  .module('User', 
    [
      'HTMLTemplates',
      'Models',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      UserConfig    
    ]
  )

  .controller(
    'UserCtrl',
    [
      'UserService',
      UserCtrl
    ]
  );

function UserConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        '': {
          controller: 'UserCtrl',
          controllerAs: 'user',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/user/login.tpl.html');
          }
        }
      },
      authenticate: false,
      data: {
        pageTitle: 'Login'
      }
    })

    .state('signup', {
      url: '/signup',
      views: {
        '': {
          controller: 'UserCtrl',
          controllerAs: 'user',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/user/signup.tpl.html');
          }
        }
      },
      authenticate: false,
      data: {
        pageTitle: 'Sign Up'
      }
    })

    .state('userprofile', {
      url: '/userprofile',
      views: {
        '': {
          controller: 'UserCtrl',
          controllerAs: 'user',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/user/profile.tpl.html');
          }
        }
      },
      authenticate: true,
      data: {
        pageTitle: 'User Profile'
      }
    })

    .state('usersettings', {
      url: '/usersettings',
      views: {
        '': {
          controller: 'UserCtrl',
          controllerAs: 'user',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/user/settings.tpl.html');
          }
        }
      },
      authenticate: true,
      data: {
        pageTitle: 'User Settings'
      }
    })

    .state('recover', {
      url: '/recover',
      views: {
        '': {
          controller: 'UserCtrl',
          controllerAs: 'user',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/user/recover.tpl.html');
          }
        }
      },
      authenticate: false,
      data: {
        pageTitle: 'Recover Login'
      }
    });
}

function UserCtrl(UserService) {
  var self = this;

  self.password = '';
  self.title = 'Login';
  self.user = UserService.getUser();

  self.logIn = function () {
    UserService.logIn().then(function (result) {
      console.log('logged in');
      console.log(result);
      console.log(' ');
      UserService.goToDeferredState();
    });
  };
}


})();
