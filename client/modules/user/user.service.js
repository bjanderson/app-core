(function () {
'use strict';

angular
  .module('User')

  .factory('UserService', 
    [
      '$http',
      '$q',
      '$state',
      'UserModel',
      UserService
    ]);

function UserService($http, $q, $state, UserModel) {
  var user = new UserModel(),
    deferredState = null;

  function getUser() {
    return user;
  }

  function goToDeferredState() {
    if (deferredState != null && deferredState.length > 0 && deferredState[0].name) {
      $state.go(deferredState[0].name, deferredState[1]);  
      deferredState = null;
    }
  }

  function isLoggedIn() {
    return user && user.authenticated;
  }

  function logIn() {
    var deferred = $q.defer();

    // fake the login
    setTimeout(function () {
      user.authenticated = true;
      deferred.resolve(user);
    }, 500);

    return deferred.promise;
  }

  function setDeferredState(state, parameters) {
    if (state != null) {
      deferredState = [state, parameters];
    } else {
      deferredState = null;
    }
  }

  function setUser(data) {
    user = new UserModel(data);
  }

  return {
    getUser: getUser,
    goToDeferredState: goToDeferredState,
    isLoggedIn: isLoggedIn,
    logIn: logIn,
    setDeferredState: setDeferredState,
    setUser: setUser
  };
}

}());
