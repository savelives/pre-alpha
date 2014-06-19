'use strict';

module.exports = function uglify(grunt) {

  // Load uglify task
  grunt.loadNpmTasks('grunt-contrib-uglify');

  return {
    target: {
      files: {
        './public/build/js/app.min.js': ['./public/build/js/bundle.js']
      }
    }
  };

};