(function () {
'use strict';

angular.module('Models', ['RestAPI'])

  .factory('BaseModel', [BaseModel]);

/**
  This factory is used to provide basic functions on every model.
  It allows you to create new models with built in validation and
  RESTAPI access.
*/
function BaseModel() {

  /**
  This constructs a new base model.
  Note: The constructor for your model should set up the parameter values that will be passed in here.
  This constructor should only be called by your model's constructor.

  @param - data
  @param - modelFields
  @param - restapi
  @param - options
        idField - the name of the model field that should be used as the model's unique id
            - default is "id"
  @return - and instance of a model initialized with the given data and connected to the given restapi
  */
  function Model(data, modelFields, restapi, options) {
    var self = this;

    self._modelFields = modelFields || [];
    self._restapi = restapi || null;
    self._idField =  'id';

    if (options != null) {
      if (options.idField != null && options.idField !== '') {
        self._idField = options.idField;
      }
    }

    self.getSimpleModel(self, data);    //populates the model with data or default values
  }

  //convert JavaScript dates to milliseconds before sending them to the server
  Model.prototype.convertDatesToMillis = function () {
    var self = this,
      numFields = self._modelFields.length,
      field,
      i;

    for (i = 0; i < numFields; i++) {
      field = self._modelFields[i];

      if (field.type === 'date' && angular.isDate(self[field.name])) {
        self[field.name] = self[field.name].getTime();
      }
    }
  };

  /**
    Get a plain JavaScript object containing only the model fields and their values.

    @param target (optional) - only used by the Model constructor to set the initial data on the model
    @param data (optional) - only used by the Model constructor to set the initial data on the model
  */
  Model.prototype.getSimpleModel = function (target, data) {
    var self = this,
      numFields = self._modelFields.length,
      field,
      i;

    if (target == null) {
      target = {};
    }

    for (i = 0; i < numFields; i++) {
      field = self._modelFields[i];

      if (self[field.name] != null) {
        // if the model is already populated, get its current value
        target[field.name] = self[field.name];
      } else if (data != null && data[field.name] != null) {
        // otherwise if there is data provided use that
        target[field.name] = data[field.name];
      } else if (!angular.isUndefined(field.defaultValue)) {
        // otherwise if there is a default value use that
        target[field.name] = field.defaultValue;
      } else {
        // otherwise set the field to undefined
        target[field.name] = undefined;
      }

      // convert date values to actual dates
      if (field.type === 'date' && target[field.name] != null && target[field.name] !== '') {
        target[field.name] = new Date(target[field.name]);
      }
    }

    return target;
  };

  /**
    If the model has an id, get its data through the rest api
  */
  Model.prototype.refresh = function (successCallback, errorCallback) {
    var self = this,
      _successCallback = function (response) {
        self.updateModel(response);

        if (angular.isFunction(successCallback)) {
          successCallback(response);
        }
      },
      _errorCallback = function (err) {
        if (angular.isFunction(errorCallback)) {
          errorCallback(err);
        }
      };

    if (self._restapi != null && self[self._idField] != null) {
      self._restapi.get(self[self._idField], _successCallback, _errorCallback);
    }
  };

  /**
    If the model has an id, remove the model from the server.
  */
  Model.prototype.remove = function (successCallback, errorCallback) {
    var self = this,
      _successCallback = function (response) {
        if (angular.isFunction(successCallback)) {
          successCallback(response);
        }
      },
      _errorCallback = function (err) {
        if (angular.isFunction(errorCallback)) {
          errorCallback(err);
        }
      };

    if (self._restapi != null && self[self._idField] != null) {
      self._restapi.remove(self[self._idField], _successCallback, _errorCallback);
    }
  };

  /**
    Validates the model and either creates or updates its data through the rest api.
  */
  Model.prototype.save = function (successCallback, errorCallback) {
    var self = this,
      _successCallback = function (response) {
        self.updateModel(response);

        if (angular.isFunction(successCallback)) {
          successCallback(response);
        }
      },
      _errorCallback = function (err) {
        if (angular.isFunction(errorCallback)) {
          errorCallback(err);
        }
      };

    if (self.validate() === true && self._restapi != null) {
      self.convertDatesToMillis();
      if (self[self._idField] == null || self[self._idField] === '') {
        self._restapi.create(self.getSimpleModel(), _successCallback, _errorCallback);
      } else {
        self._restapi.update(self.getSimpleModel(), _successCallback, _errorCallback);
      }
    }
  };

  /**
    Update the model data with the given data.

    @param data - the data to update the model with
  */
  Model.prototype.updateModel = function (data) {
    var self = this,
      numFields = self._modelFields.length,
      field,
      i;

    for (i = 0; i < numFields; i++) {
      field = self._modelFields[i];

      if (data != null && data[field.name] != null) {
        if (field.type === 'date') {
          if (data[field.name] == null || data[field.name] === '') {
            self[field.name] = undefined;  
          } else {
            // dates should be passed in to the model as milliseconds
            // or a string representing milliseconds
            self[field.name] = new Date(parseInt(data[field.name], 10));
          }
        } else {
          self[field.name] = data[field.name];
        }
      }
    }
  };

  /**
    Simple input validation.
    Right now this only checks to see if a required field actually has something defined for it.
    TODO: make this do more appropriate type checking
    TODO: give each field the ability to specify its own validation constraints
  */
  Model.prototype.validate = function () {
    var self = this,
      numFields = self._modelFields.length,
      result = true,
      field,
      i;

    for (i = 0; i < numFields; i++) {
      field = self._modelFields[i];

      if (field.required != null &&
        field.required === true &&
        (self[field.name] == null ||
        self[field.name] === '')
      ) {
        console.error('Input required for field: ' + field.name);
        result = false;
        break;
      }
    }

    return result;
  };


  return Model;
}

}());
