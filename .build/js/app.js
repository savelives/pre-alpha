'use strict';

requirejs.config({
  paths: {}
});

require([/* Dependencies */], function () {

  var app = {
    initialize: function () {
      console.log('Running free!!!!!');
    }
  };

  app.initialize();

});
