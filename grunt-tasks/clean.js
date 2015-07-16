'use strict';
// remove temporary files
module.exports.tasks = {

  clean: {
  
    dist: {
      dot: true,
      options: {
        force: true
      },
      src: [
        'dist/*',
        'tmp/*'
      ]
    }
  }
};