angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('common/html/footer.tpl.html',
    "<footer>Copyright &copy; now me.</footer>"
  );


  $templateCache.put('common/html/header.tpl.html',
    "<a class=\"title\" ui-sref=\"home\">app-core</a>"
  );


  $templateCache.put('common/html/sidenav.tpl.html',
    "<div class=\"sidenav\"><ul><li><a ui-sref=\"demo\">Demos</a></li><li><a ui-sref=\"login\">Login</a></li><li><a ui-sref=\"userprofile\">User Profile</a></li><li><a ui-sref=\"usersettings\">User Settings</a></li></ul></div>"
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
    "<div class=\"padding-20\"><h1>{{home.title}}!</h1></div>"
  );


  $templateCache.put('modules/user/login.tpl.html',
    "<h1>Login</h1><div style=\"width: 300px\"><div class=\"center-text alert-danger\" ng-show=\"user.loginerror === true\"><i class=\"fa fa-times-circle\"></i> Invalid username or password.</div><div class=\"form-group\"><label for=\"username\">Username</label><input id=\"username\" type=\"email\" class=\"form-control\" ng-model=\"user.user.email\" placeholder=\"Email address\"></div><div class=\"form-group\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\"></div><div class=\"center-text\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"user.logIn();\">Log In</button></div><div class=\"center-text\"><a ui-sref=\"recover\">Forgot password?</a><br><a ui-sref=\"signup\">Sign Up</a></div></div>"
  );


  $templateCache.put('modules/user/profile.tpl.html',
    "<h1>Profile</h1>"
  );


  $templateCache.put('modules/user/recover.tpl.html',
    "<h1>Recover Password</h1>"
  );


  $templateCache.put('modules/user/settings.tpl.html',
    "<h1>Settings</h1>"
  );


  $templateCache.put('modules/user/signup.tpl.html',
    "<h1>Create Account</h1>"
  );

}]);
