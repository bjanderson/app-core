(function () {
'use strict';

angular.module('RestAPI', [])

  .factory('BaseRestAPI', ['$http', BaseRestAPI]);

/**
  This factory is used to provide the basic REST API service calls for a model.
  To create REST service calls for a new model you just have to create a new instance
  of this BaseRestAPI and pass it the url to your rest service for that model.

  For example if you had a Todo model and the url for your Todo rest service was
  http://www.example.com/todo, you would create the RESTAPI for it like this.
  Then your Todo model would have access to all of the REST service calls defined here.

  angular.module('RestAPI').service(
  'TodoAPI',
  [
    'BaseRestAPI',
    function (BaseRestAPI) {
    var restAPI = new BaseRestAPI('todo');
    return restAPI;
    }
  ]
  );

*/
function BaseRestAPI($http) {

  /**
    Creates a set of functions to access REST service calls

    @param url - the url of the REST service to call
    @param dataField -  (optional) some backend services return objects with the
              model data embeded in them. This should be the name of
              the field in the returned object that contains the model
              data. Note: if the object returned by the backend service
              is inconsistent or deeply nests the model data, you should
              just overwrite these methods in the restAPI for that model.
  */
  function RestAPI(url, dataField) {
    var self = this;

    if (url == null || url === '') {
      throw new Error('BaseRestApi url cannot be undefined, null, or empty.');
    }

    self.url = url;
    self.dataField = dataField;

    self.getAll = function (successCallback, errorCallback) {
      $http.get(self.url)
        .success(function (data) {
          if (angular.isFunction(successCallback)) {
            if (self.dataField == null || self.dataField === '') {
              successCallback(data);
            } else {
              successCallback(data[self.dataField + 's']);
            }
          }
        })
        .error(function (data) {
          console.error(data);
          if (angular.isFunction(errorCallback)) {
            errorCallback(data);
          }
        });
    };

    self.get = function (id, successCallback, errorCallback) {
      $http.get(self.url + '/' + id)
        .success(function (data) {
          if (angular.isFunction(successCallback)) {
            if (self.dataField == null || self.dataField === '') {
              successCallback(data);
            } else {
              successCallback(data[self.dataField]);
            }
          }
        })
        .error(function (data) {
          console.error(data);
          if (angular.isFunction(errorCallback)) {
            errorCallback(data);
          }
        });
    };

    self.create = function (model, successCallback, errorCallback) {
      $http.post(self.url, model)
        .success(function (data) {
          if (angular.isFunction(successCallback)) {
            if (self.dataField == null || self.dataField === '') {
              successCallback(data);
            } else {
              successCallback(data[self.dataField]);
            }
          }
        })
        .error(function (data) {
          console.error(data);
          if (angular.isFunction(errorCallback)) {
            errorCallback(data);
          }
        });
    };

    self.update = function (model, successCallback, errorCallback) {
      $http.put(self.url, model)
        .success(function (data) {
          if (angular.isFunction(successCallback)) {
            if (self.dataField == null || self.dataField === '') {
              successCallback(data);
            } else {
              successCallback(data[self.dataField]);
            }
          }
        })
        .error(function (data) {
          console.error(data);
          if (angular.isFunction(errorCallback)) {
            errorCallback(data);
          }
        });
    };

    self.remove = function (id, successCallback, errorCallback) {
      $http.delete(self.url + '/' + id)    // jshint ignore:line
        .success(function (data) {
          if (angular.isFunction(successCallback)) {
            successCallback(data);
          }
        })
        .error(function (data) {
          console.error(data);
          if (angular.isFunction(errorCallback)) {
            errorCallback(data);
          }
        });
    };
  }

  return RestAPI;
}

}());
