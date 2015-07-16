'use strict';
// rename the index.html.dist file to index.html in the dist folder
module.exports.tasks = {

  rename: {
    dist: {
      files: [
        {
          src: [
            'dist/index.html.dist'
          ],
          dest: 'dist/index.html'
        },

        {
          src: [
            'dist/main.css'
          ],
          dest: 'dist/main.min.css'
        }
      ]
    }
  }
  
};
