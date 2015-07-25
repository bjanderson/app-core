(function () {
'use strict';

describe('Module: RestAPI, Factory: BaseRestAPI (common/restapi/baserestapi.js)', function () {

  beforeEach(module('RestAPI'));

  it('can get an instance of BaseRestAPI', inject(function (BaseRestAPI) {
    expect(BaseRestAPI).toBeDefined();
  }));

  describe('constructor - BaseRestAPI( url, dataField )', function () {

    describe('undefined parameters', function () {

      it('should throw an exception when url=undefined', inject(function (BaseRestAPI) {
        var x;
        expect(function () {
          x = new BaseRestAPI();
        }).toThrow(new Error('BaseRestApi url cannot be undefined, null, or empty.'));
      }));
    });

    describe('null parameters', function () {

      it('should throw an exception when url=null', inject(function (BaseRestAPI) {
        var x;
        expect(function () {
          x = new BaseRestAPI(null);
        }).toThrow(new Error('BaseRestApi url cannot be undefined, null, or empty.'));
      }));

    });

    describe('empty parameters', function () {

      it('should throw an exception when url=""', inject(function (BaseRestAPI) {
        var x;
        expect(function () {
          x = new BaseRestAPI('');
        }).toThrow(new Error('BaseRestApi url cannot be undefined, null, or empty.'));
      }));

    });

    describe('defined parameters', function () {

      it('should create a new BaseRestAPI instance when url="/tests"', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(api).toBeDefined();
      }));

      it('should have dataField=undefined', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(api.dataField).toBeUndefined();
      }));

      it('should have dataField="test"', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests', 'test');
        expect(api.dataField).toEqual('test');
      }));
    });
  });

  describe('functions', function () {
    var $httpBackend;

    beforeEach(inject(function ($injector) {
      // Set up the mock http service responses
      $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('getAll(successCallback, errorCallback)', function () {

      beforeEach(inject(function () {
        // Set up the mock http service responses
        $httpBackend
          .when('GET', '/tests')
          .respond({id: 0, name: 'test name'});
      }));

      it('has a function named getAll', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(angular.isFunction(api.getAll)).toBe(true);
      }));

      it('should call GET /tests', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        $httpBackend.expectGET('/tests');
        api.getAll();
        $httpBackend.flush();
      }));

    });

    describe('get(id, successCallback, errorCallback)', function () {

      beforeEach(inject(function () {
        // Set up the mock http service responses
        $httpBackend
          .when('GET', '/tests/0')
          .respond({id: 0, name: 'test name'});
      }));

      afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('has a function named get', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(angular.isFunction(api.get)).toBe(true);
      }));

      it('should call GET /tests/0', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        $httpBackend.expectGET('/tests/0');
        api.get(0);
        $httpBackend.flush();
      }));

    });

    describe('create(model, successCallback, errorCallback)', function () {

      beforeEach(inject(function () {
        // Set up the mock http service responses
        $httpBackend
          .when('POST', '/tests')
          .respond({id: 0, name: 'test name'});
      }));

      afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('has a function named create', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(angular.isFunction(api.create)).toBe(true);
      }));

      it('should call POST /tests', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        $httpBackend.expectPOST('/tests');
        api.create();
        $httpBackend.flush();
      }));

    });

    describe('update(model, successCallback, errorCallback)', function () {

      beforeEach(inject(function () {
        // Set up the mock http service responses
        $httpBackend
          .when('PUT', '/tests')
          .respond({id: 0, name: 'test name'});
      }));

      afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('has a function named update', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(angular.isFunction(api.update)).toBe(true);
      }));

      it('should call PUT /tests', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        $httpBackend.expectPUT('/tests');
        api.update();
        $httpBackend.flush();
      }));

    });

    describe('remove(id, successCallback, errorCallback)', function () {

      beforeEach(inject(function () {
        // Set up the mock http service responses
        $httpBackend
          .when('DELETE', '/tests/0')
          .respond({id: 0, name: 'test name'});
      }));

      afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      it('has a function named remove', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        expect(angular.isFunction(api.remove)).toBe(true);
      }));

      it('should call DELETE /tests/0', inject(function (BaseRestAPI) {
        var api = new BaseRestAPI('/tests');
        $httpBackend.expectDELETE('/tests/0');
        api.remove(0);
        $httpBackend.flush();
      }));

    });

  });
});
}());
