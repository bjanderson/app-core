(function () {
'use strict';

angular.module('Models').factory('UserModel', ['BaseModel', 'UserAPI', UserModel]);

function UserModel(BaseModel, restapi) {
  var modelFields = [
      {
        name: 'authenticated',
        type: 'boolean',
        defaultValue: false
      },
      {
        name: 'dateCreated',
        type: 'date'
      },
      {
        name: 'displayName',
        type: 'string'
      },
      {
        name: 'id',
        type: 'string'
      },
      {
        name: 'lastUpdated',
        type: 'date'
      },
      {
        name: 'email',
        type: 'string'
      }
    ];

  function Model(data) {
    var model = new BaseModel(data, modelFields, restapi, {idField: 'id'});

    return model;
  }

  return Model;
}

}());
