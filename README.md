# app-core
A foundation to build large-scale MEAN web applications on.

This is still a work in progress.

## Features:
As of now, this application has full grunt configuration including:
- automatically runs npm install and bower install
- automatically injects new .js files into index.html
- automatically imports new .less files into main.less
- compiles less to css
- automatically creates angular templates that can be accessed using $templateCache from files ending in .tpl.html
- runs jshint and jscs to catch errors and code style violations
- runs unit tests
- generates documentation from source code comments
- launches a server (http or https)
- opens a web browser to the served url
- builds a deployable artifact

The following items have also been implemented:
- an extendable front-end object model
- an extendable front-end rest api
- standard modal dialogs (angular-bootstrap)


## Create New Modules:
There is a script named createModule.py that will automatically create new modules in your project.
Example: running

    ./createModule.py myModule

will generate a new directory named client/modules/mymodule with the following files
* mymodule.js
* mymodule.less
* mymodule.test.js
* mymodule.tpl.html

The module will be named MyModule. 
All you have to do is add 'MyModule' to your MainApp module dependencies in main.js.

## Grunt commands
There are grunt commands set up for several different scenarios.

### default
If you want to run the development version of your project and have it automatically open in a browser:

    grunt

### build
If you want to build the project and prepare it for deployment there are two options. You can build it for normal distribution with the `:dist` parameter (default), 

    grunt build

or you can build it for debugging on the deployment system with the `:debug` parameter

    grunt build:debug

The distribution files will be located in the `dist` folder.

### init
This task is normally used by other tasks. It wraps the project initialization tasks together into one convenient task:

    grunt init

### run-css-tasks
This task is normally used by other tasks. It compiles less to css and does other css processing. It has two options. You can run it with the `:dev` (default) parameter for normal development use

    grunt run-css-tasks

or you can run it with the `:dist` parameter for distribution use

    grunt run-css-tasks:dist

### run-js-tasks
This task is normally used by other tasks. It runs jshint and jscs, and has two options. You can run it with the `:dev` (default) parameter for normal development use

    grunt run-js-tasks

or you can run it with the `:dist` parameter for distribution use

    grunt run-js-tasks:dist

### serve
Serve is a little more involved. It is run by the default task, but you can run it manually with a couple different options. The serve task can serve the files in the development (`client`) directory, or from the distribution (`dist`) directory. It can also serve those files over http or https.

#### `:dev:http` (default)
Serve your development files over http.

    grunt serve

#### `:dev:https`
Serve your development files over https.

    grunt serve::https

#### `:dist:http`
Serve your distribution files over http. Useful for checking that your distribution runs as expected. You will need to run `grunt build` or `grunt build:debug` before running this.

    grunt serve:dist

#### `:dist:https`
Serve your distribution files over https. Useful for checking that your distribution runs as expected. You will need to run `grunt build` or `grunt build:debug` before running this.

    grunt serve:dist:https

### test
If you want to run your unit tests and have the tests re-run on any changes to js files:
    
    grunt test

### jsdoc
Generate documentation from comments in your JavaScript files using jsdoc.

    grunt jsdoc

Documentation files will be located in the `doc` folder. Open the index.html file to view the generated documentation.

## TODO:
- implement user authentication
- set up a mongodb connection

## To Use:
1. Clone this repo.
2. Copy/Rename the directory.
3. Change the project name in the files (package.json, bower.json, main.js, etc...)
3. Change the .git/config repository to point to your git repository, or delete the .git directory
