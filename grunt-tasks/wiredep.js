'use strict';
// automatically add bower components to files
module.exports.tasks = {
  wiredep: {
    task: {
      src: [
        'client/index.html'
      ]
    }
  },

  watch: {
    wiredep: {
      files: [
        'bower.json'
      ],
      tasks: [
        'wiredep'
      ]
    }
  }
};