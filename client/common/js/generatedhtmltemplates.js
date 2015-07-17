angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('common/html/footer.tpl.html',
    "Copyright &copy; now me."
  );


  $templateCache.put('common/html/header.tpl.html',
    "<h1>Hello, app-core!</h1>"
  );


  $templateCache.put('modules/demo/demo.tpl.html',
    "<div class=\"padding-20\"><h1>Hello, {{demo.title}}!</h1><div ui-view=\"dialogs\"></div></div>"
  );


  $templateCache.put('modules/demo/dialogs/customdialog.tpl.html',
    "<div class=\"modal-header alert-info\"><button type=\"button\" class=\"close\" ng-click=\"close()\" ng-hide=\"data._backdrop === 'static'\" aria-hidden=\"true\">&times;</button><h3 class=\"modal-title\"><i class=\"fa fa-smile-o\"></i> {{data._modalTitle}}</h3></div><div class=\"modal-body\"><label for=\"name\">Name</label><input id=\"name\" ng-model=\"data.name\"><br><label for=\"email\">Email</label><input id=\"email\" ng-model=\"data.email\"><br><label for=\"color\">Favorite Color</label><select id=\"color\" ng-model=\"data.favoriteColor\" ng-options=\"color for color in data.colors\"></select></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">{{data._okText}}</button> <button class=\"btn btn-warning\" ng-click=\"no()\">{{data._cancelText}}</button></div>"
  );


  $templateCache.put('modules/demo/dialogs/dialogs.demo.tpl.html',
    "<div class=\"padding-20\"><h1>Hello, {{dialogsdemo.title}}!</h1><button class=\"btn btn-default\" ng-click=\"dialogsdemo.showMessageDialog()\">Show Message Dialog</button> <button class=\"btn btn-default\" ng-click=\"dialogsdemo.showErrorDialog()\">Show Error Dialog</button> <button class=\"btn btn-default\" ng-click=\"dialogsdemo.showConfirmationDialog()\">Show Confirmation Dialog</button> <button class=\"btn btn-default\" ng-click=\"dialogsdemo.showCustomDialog()\">Show Custom Dialog</button></div>"
  );


  $templateCache.put('modules/dialogs/confirmDialog.tpl.html',
    "<div class=\"modal-header alert-success\"><button type=\"button\" class=\"close\" ng-click=\"close()\" ng-hide=\"data._backdrop === 'static'\" aria-hidden=\"true\">&times;</button><h3 class=\"modal-title\"><i class=\"fa fa-thumbs-o-up\"></i> {{data._modalTitle}}</h3></div><div class=\"modal-body\"><p>{{data.message}}</p></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ok()\">{{data._okText}}</button> <button class=\"btn btn-warning\" ng-click=\"no()\">{{data._cancelText}}</button></div>"
  );


  $templateCache.put('modules/dialogs/errorDialog.tpl.html',
    "<div class=\"modal-header alert-danger\"><button type=\"button\" class=\"close\" ng-click=\"close()\" ng-hide=\"data._backdrop === 'static'\" aria-hidden=\"true\">&times;</button><h3 class=\"modal-title\"><i class=\"fa fa-exclamation-triangle\"></i> {{data._modalTitle}}</h3></div><div class=\"modal-body\"><p>{{data.message}}</p></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"close()\">Close</button></div>"
  );


  $templateCache.put('modules/dialogs/messageDialog.tpl.html',
    "<div class=\"modal-header alert-info\"><button type=\"button\" class=\"close\" ng-click=\"close()\" ng-hide=\"data._backdrop === 'static'\" aria-hidden=\"true\">&times;</button><h3 class=\"modal-title\"><i class=\"fa fa-info-circle\"></i> {{data._modalTitle}}</h3></div><div class=\"modal-body\"><p>{{data.message}}</p></div><div class=\"modal-footer\"><button class=\"btn btn-warning\" ng-click=\"close()\">Close</button></div>"
  );


  $templateCache.put('modules/home/home.tpl.html',
    "<div class=\"padding-20\"><h1>Hello, {{home.title}}!</h1><a ui-sref=\"demo\">Demos</a></div>"
  );

}]);
