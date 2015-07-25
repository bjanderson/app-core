(function () {
'use strict';

angular.module('RestAPI').service('UserAPI', ['BaseRestAPI', UserAPI]);

function UserAPI(BaseRestAPI) {
  var restAPI = new BaseRestAPI('/user');

  return restAPI;
}

}());
