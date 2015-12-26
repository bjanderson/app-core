(function () {
'use strict';

angular.module('UserFactory', [])
  .factory('User', User);

function User() {
  var user = {
    id: '0',
    username: 'test',
    auth: 'ok'
  };

  return user;
}

}());