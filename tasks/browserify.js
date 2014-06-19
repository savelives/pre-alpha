'use strict';

module.exports = function browserify(grunt) {

  // Load Browserify taks
  grunt.loadNpmTasks('grunt-browserify');

  return {
    dist: {
      files: {
        './public/build/js/bundle.js': ['./public/js/app.js']
      }
    }
  };

};