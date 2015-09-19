#!/usr/bin/python3.4

import os
import sys

try:
  ModuleName = ' '.join(sys.argv[1][0].upper() + sys.argv[1][1:] for word in sys.argv[1].split())
  modulename = ModuleName.lower()
  folder = 'client/modules/' + modulename
except:
  print("you forgot to give a module name. Usage: createModule.py <module name>")

print()
print('Creating module: ' + ModuleName)
print('...')

os.makedirs(folder, exist_ok=False)

text = """(function () {
'use strict';

angular
  .module('""" + ModuleName + """', 
    [
      'HTMLTemplates',
      'ui.router'
    ]
  )

  .config(
    [
      '$stateProvider',
      """ + ModuleName + """Config    
    ]
  )

  .controller(
    '""" + ModuleName + """Ctrl',
    [
      """ + ModuleName + """Ctrl
    ]
  );

function """ + ModuleName + """Config($stateProvider) {
  $stateProvider.state('""" + modulename + """', {
    url: '/""" + modulename + """',
    views: {
      '': {
        controller: '""" + ModuleName + """Ctrl',
        controllerAs: '""" + modulename + """',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/""" + modulename + """/""" + modulename + """.tpl.html');
        }
      }
    },

    data: {
      pageTitle: '""" + ModuleName + """'
    }
  });
}

function """ + ModuleName + """Ctrl() {
  var self = this;

  self.title = '""" + ModuleName + """';
  
}


})();

"""
f = open(folder + '/' + modulename + '.js', 'w')
f.write(text)
f.close()


text = '<h1>' + ModuleName + '</h1>'
f = open(folder + '/' + modulename + '.tpl.html', 'w')
f.write(text)
f.close()


text = """/*##################################################
""" + ModuleName + """
##################################################*/
"""
f = open(folder + '/' + modulename + '.less', 'w')
f.write(text)
f.close()


text = """'use strict';

describe('Module: """ + ModuleName + """, Controller: """ + ModuleName + """Ctrl (modules/""" + modulename + """/""" + modulename + """.js)', function () {
  var ctrl;

  beforeEach(module('""" + ModuleName + """'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('""" + ModuleName + """Ctrl');
  }));

  describe('scope properties', function () {

    it('should have title=" """ + ModuleName + """ "', function () {
      expect(ctrl.title).toEqual('""" + ModuleName + """');
    });

  });

});

"""
f = open(folder + '/' + modulename + '.test.js', 'w')
f.write(text)
f.close()

print('Done.')
print('Remember to add ' + ModuleName + ' to main.js')
print()