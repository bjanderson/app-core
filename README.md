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

## TODO:
- implement user authentication
- set up a mongodb connection

## To Use:
1. Clone this repo.
2. Copy/Rename the directory.
3. Change the project name in the files (package.json, bower.json, main.js, etc...)
3. Change the .git/config repository to point to your git repository, or delete the .git directory
