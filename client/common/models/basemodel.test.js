(function () {
'use strict';

describe('Module: Models, Factory: BaseModel (common/models/basemodel.js)', function () {

  beforeEach(module('Models'));

  it('can get an instance of BaseModel', inject(function (BaseModel) {
    expect(BaseModel).toBeDefined();
  }));

  describe('constructor - BaseModel( data, modelFields, restapi, options )', function () {

    describe('undefined parameters', function () {

      it('should accept all undefined parameters', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(model).toBeDefined();
      }));

      it('should have _modelFields=[]', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(model._modelFields).toEqual([]);
      }));

      it('should have _restapi=null', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(model._restapi).toBe(null);
      }));

      it('should have _idField="id"', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(model._idField).toBe('id');
      }));

    });

    describe('null parameters', function () {

      it('should accept all null parameters', inject(function (BaseModel) {
        var model = new BaseModel(null, null, null, null);
        expect(model).toBeDefined();
      }));

      it('should have _modelFields=[]', inject(function (BaseModel) {
        var model = new BaseModel(null, null, null, null);
        expect(model._modelFields).toEqual([]);
      }));

      it('should have _restapi=null', inject(function (BaseModel) {
        var model = new BaseModel(null, null, null, null);
        expect(model._restapi).toBe(null);
      }));

      it('should have _idField="id"', inject(function (BaseModel) {
        var model = new BaseModel(null, null, null, null);
        expect(model._idField).toBe('id');
      }));

    });

    describe('defined parameters', function () {

      it('should have _modelFields=[{ name: "name", type: "string" }]', inject(function (BaseModel) {
        var modelFields = [{ name: 'name', type: 'string' }],
          model = new BaseModel(undefined, modelFields);
        expect(model._modelFields).toEqual([{ name: 'name', type: 'string' }]);
      }));

      it('should have name="model name"', inject(function (BaseModel) {
        var data = {name: 'model name'},
          modelFields = [{ name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields);
        expect(model.name).toBeDefined();
        expect(model.name).toEqual('model name');
      }));

      it('should have _restapi={}', inject(function (BaseModel) {
        var restapi = {},
          model = new BaseModel(undefined, undefined, restapi);
        expect(model._restapi).toEqual({});
      }));

      it('should have _idField="myID"', inject(function (BaseModel) {
        var options = { idField: 'myID'},
          model = new BaseModel(undefined, undefined, undefined, options);
        expect(model._idField).toEqual('myID');
      }));

    });

  });

  describe('functions', function () {

    describe('remove(successCallback, errorCallback)', function () {
      var restapi;

      beforeEach(function () {
        restapi = {
          remove: function (id, successCallback, errorCallback) {
            if (id !== '_123abc' && angular.isFunction(successCallback)) {
              successCallback(id);
            }

            if (id === '_123abc' && angular.isFunction(errorCallback)) {
              errorCallback(id);
            }
          }
        };

        spyOn(restapi, 'remove').and.callThrough();
      });

      it('has a function named remove', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.remove)).toBe(true);
      }));

      it('should call the restapi remove function', inject(function (BaseModel) {
        var data = {id: 'abc123'},
          modelFields = [{ name: 'id', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.remove();
        expect(restapi.remove).toHaveBeenCalled();
      }));

      it('should call the successCallback function', function (done) {
        inject(function (BaseModel) {
          var data = {id: 'abc123'},
            modelFields = [{ name: 'id', type: 'string' }],
            model = new BaseModel(data, modelFields, restapi),
            successCallback = function (result) {
              expect(result).toEqual(data.id);
              done();
            };

          model.remove(successCallback);
          expect(restapi.remove).toHaveBeenCalled();
        });
      });

      it('should call the errorCallback function', function (done) {
        inject(function (BaseModel) {
          var data = {id: '_123abc'},
            modelFields = [{ name: 'id', type: 'string' }],
            model = new BaseModel(data, modelFields, restapi),
            successCallback,
            errorCallback = function (result) {
              expect(result).toEqual(data.id);
              done();
            };

          model.remove(successCallback, errorCallback);
          expect(restapi.remove).toHaveBeenCalled();
        });
      });

    });

    describe('getSimpleModel(target, data)', function () {

      it('has a function named getSimpleModel', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.getSimpleModel)).toBe(true);
      }));

      it('should return {id: "abc123",name: "model name"}', inject(function (BaseModel) {
        var data = {id: 'abc123', name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields);
        expect(model.getSimpleModel()).toEqual({ id: 'abc123', name: 'model name' });
      }));

      it('should return {_fn: null, id: "abc123", name: "model name"}', inject(function (BaseModel) {
        var data = {id: 'abc123', name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(undefined, modelFields),
          target = { _fn: null };
        expect(model.getSimpleModel(target, data)).toEqual({ _fn: null, id: 'abc123', name: 'model name' });
      }));

    });

    describe('refresh(successCallback, errorCallback)', function () {
      var restapi;

      beforeEach(function () {
        restapi = {
          get: function (id, successCallback, errorCallback) {
            var response = {
                id: id,
                name: 'refreshed model name'
              };

            if (angular.isFunction(successCallback)) {
              successCallback(response);
            }

            if (angular.isFunction(errorCallback)) {
              errorCallback(response);
            }
          }
        };

        spyOn(restapi, 'get').and.callThrough();
      });

      it('has a function named refresh', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.refresh)).toBe(true);
      }));

      it('should call the restapi get function', inject(function (BaseModel) {
        var data = {id: 'abc123'},
          modelFields = [{ name: 'id', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.refresh();
        expect(restapi.get).toHaveBeenCalled();
      }));

      it('should call the successCallback and update model name to "refreshed model name"', function (done) {
        inject(function (BaseModel) {
          var data = {id: 'abc123', name: 'model name'},
            modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
            model = new BaseModel(data, modelFields, restapi),
            successCallback = function () {
              expect(model.name).toEqual('refreshed model name');
              done();
            };

          model.refresh(successCallback);
        });
      });

      /*it('should call the errorCallback and not update model name to "refreshed model name"', function (done) {
        inject(function (BaseModel) {
          var data = {id: '_123abc', name: 'model name'},
            modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
            model = new BaseModel(data, modelFields, restapi),
            successCallback,
            errorCallback = function (result) {
              expect(model.name).not.toEqual('refreshed model name');
              done();
            };

          model.refresh(successCallback, errorCallback);
        });
      });*/

    });

    describe('save(successCallback, errorCallback)', function () {
      var restapi;

      beforeEach(function () {
        restapi = {
          create: function (model, successCallback, errorCallback) {
            var response = {
                id: '234bcd',
                name: model.name
              };

            if (angular.isFunction(successCallback)) {
              successCallback(response);
            }

            if (angular.isFunction(errorCallback)) {
              errorCallback(response);
            }
          },

          update: function (model, successCallback, errorCallback) {
            var response = {
                id: model.id,
                name: model.name
              };

            if (angular.isFunction(successCallback)) {
              successCallback(response);
            }

            if (angular.isFunction(errorCallback)) {
              errorCallback(response);
            }
          }
        };

        spyOn(restapi, 'create').and.callThrough();
        spyOn(restapi, 'update').and.callThrough();
      });

      it('has a function named save', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.save)).toBe(true);
      }));

      it('has a function named save', inject(function (BaseModel) {
        var data = {id: 'abc123', name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields);
        expect(angular.isFunction(model.save)).toBe(true);
      }));

      it('should call the restapi create function when id=undefined', inject(function (BaseModel) {
        var data = {id: undefined, name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.save();
        expect(restapi.create).toHaveBeenCalled();
      }));

      it('should call the restapi create function when id=null', inject(function (BaseModel) {
        var data = {id: null, name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.save();
        expect(restapi.create).toHaveBeenCalled();
      }));

      it('should call the restapi create function when id=""', inject(function (BaseModel) {
        var data = {id: '', name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.save();
        expect(restapi.create).toHaveBeenCalled();
      }));

      it('should call the restapi update function when id="abc123"', inject(function (BaseModel) {
        var data = {id: 'abc123', name: 'model name'},
          modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
          model = new BaseModel(data, modelFields, restapi);

        model.save();
        expect(restapi.update).toHaveBeenCalled();
      }));
    });

    describe('updateModel(data)', function () {

      it('has a function named updateModel', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.updateModel)).toBe(true);
      }));

      it('should update the model data to {id: "bcd234", name: "updated model name"}',
        inject(function (BaseModel) {

          var data = {id: 'abc123', name: 'model name'},
            modelFields = [{ name: 'id', type: 'string' }, { name: 'name', type: 'string' }],
            model = new BaseModel(data, modelFields);

          model.updateModel({id: 'bcd234', name: 'updated model name'});
          expect(model.getSimpleModel()).toEqual({id: 'bcd234', name: 'updated model name'});
        })
      );

      it('should convert milliseconds as a number into a Date', inject(function (BaseModel) {
        var now = new Date().getTime(),
          data = {id: 'abc123', name: 'model name', date: null},
          modelFields = [
            {
              name: 'id',
              type: 'string'
            },
            {
              name: 'name',
              type: 'string'
            },
            {
              name: 'date',
              type: 'date'
            }
          ],
          model = new BaseModel(data, modelFields);

        model.updateModel({id: 'bcd234', name: 'updated model name', date: now});
        expect(model.date.getTime()).toEqual(now);
      }));

      it('should convert milliseconds as a string into a Date', inject(function (BaseModel) {
        var now = new Date().getTime(),
          data = {id: 'abc123', name: 'model name', date: null},
          modelFields = [
            {
              name: 'id',
              type: 'string'
            },
            {
              name: 'name',
              type: 'string'
            },
            {
              name: 'date',
              type: 'date'
            }
          ],
          model = new BaseModel(data, modelFields);

        model.updateModel({id: 'bcd234', name: 'updated model name', date: String(now)});
        expect(model.date.getTime()).toEqual(now);
      }));

      it('should set a date to undefined when the date is given as null', inject(function (BaseModel) {
        var now = null,
          data = {id: 'abc123', name: 'model name', date: null},
          modelFields = [
            {
              name: 'id',
              type: 'string'
            },
            {
              name: 'name',
              type: 'string'
            },
            {
              name: 'date',
              type: 'date'
            }
          ],
          model = new BaseModel(data, modelFields);

        model.updateModel({id: 'bcd234', name: 'updated model name', date: now});
        expect(model.date).toBe(undefined);
      }));

      it('should set a date to undefined when the date is given an empty string',
        inject(function (BaseModel) {

          var now = '',
            data = {id: 'abc123', name: 'model name', date: null},
            modelFields = [
              {
                name: 'id',
                type: 'string'
              },
              {
                name: 'name',
                type: 'string'
              },
              {
                name: 'date',
                type: 'date'
              }
            ],
            model = new BaseModel(data, modelFields);

          model.updateModel({id: 'bcd234', name: 'updated model name', date: now});
          expect(model.date).toBe(undefined);
        })
      );

      it('should change the date value to undefined when the date is given as undefined',
        inject(function (BaseModel) {

          var data = {id: 'abc123', name: 'model name', date: null},
            modelFields = [
              {
                name: 'id',
                type: 'string'
              },
              {
                name: 'name',
                type: 'string'
              },
              {
                name: 'date',
                type: 'date'
              }
            ],
            model = new BaseModel(data, modelFields);

          model.updateModel({id: 'bcd234', name: 'updated model name', date: undefined});
          expect(model.date).toBe(undefined);
        })
      );

      it('should not change the date value ("") when the date is given as undefined',
        inject(function (BaseModel) {

          var data = {id: 'abc123', name: 'model name', date: ''},
            modelFields = [
              {
                name: 'id',
                type: 'string'
              },
              {
                name: 'name',
                type: 'string'
              },
              {
                name: 'date',
                type: 'date'
              }
            ],
            model = new BaseModel(data, modelFields);

          model.updateModel({id: 'bcd234', name: 'updated model name', date: undefined});
          expect(model.date).toEqual('');
        })
      );

      it('should not change the date value (new Date()) when the date is given as undefined',
        inject(function (BaseModel) {

          var now = new Date(),
            data = {id: 'abc123', name: 'model name', date: now},
            modelFields = [
              {
                name: 'id',
                type: 'string'
              },
              {
                name: 'name',
                type: 'string'
              },
              {
                name: 'date',
                type: 'date'
              }
            ],
            model = new BaseModel(data, modelFields);

          model.updateModel({id: 'bcd234', name: 'updated model name', date: undefined});
          expect(model.date.getTime()).toEqual(now.getTime());
        })
      );

    });

    describe('validate()', function () {

      it('has a function named validate', inject(function (BaseModel) {
        var model = new BaseModel();
        expect(angular.isFunction(model.validate)).toBe(true);
      }));

      it('should return false when required fields are undefined', inject(function (BaseModel) {
        var data = {id: 'abc123', name: undefined},
          modelFields = [
            {
              name: 'id',
              type: 'string',
              required: true
            },
            {
              name: 'name',
              type: 'string',
              required: true
            }
          ],
          model = new BaseModel(data, modelFields);

        expect(model.validate()).toBe(false);
      }));

      it('should return false when required fields are null', inject(function (BaseModel) {
        var data = {id: 'abc123', name: null},
          modelFields = [
            {
              name: 'id',
              type: 'string',
              required: true
            },
            {
              name: 'name',
              type: 'string',
              required: true
            }
          ],
          model = new BaseModel(data, modelFields);

        expect(model.validate()).toBe(false);
      }));

      it('should return false when required fields are empty strings', inject(function (BaseModel) {
        var data = {id: 'abc123', name: ''},
          modelFields = [
            {
              name: 'id',
              type: 'string',
              required: true
            },
            {
              name: 'name',
              type: 'string',
              required: true
            }
          ],
          model = new BaseModel(data, modelFields);

        expect(model.validate()).toBe(false);
      }));

      it('should return true when required fields contain values', inject(function (BaseModel) {
        var data = {id: 'abc123', name: 'model name'},
          modelFields = [
            {
              name: 'id',
              type: 'string',
              required: true
            },
            {
              name: 'name',
              type: 'string',
              required: true
            }
          ],
          model = new BaseModel(data, modelFields);

        expect(model.validate()).toBe(true);
      }));

    });

  });
});
}());
