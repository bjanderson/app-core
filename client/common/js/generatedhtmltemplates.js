angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('common/html/footer.tpl.html',
    "Copyright &copy; me. now."
  );


  $templateCache.put('common/html/header.tpl.html',
    "<h1>Hello, app-core!</h1>"
  );


  $templateCache.put('modules/home/home.tpl.html',
    "<h1>Hello, {{title}}!</h1>"
  );

}]);
