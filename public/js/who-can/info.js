/**
 * Who can and who can't donate info
 * @author Lucas <lucas@lucas.ninja>
 */
var $ = require('jquery');

var info = (function (window, document, undefined) {
  'use strict';

  // Info object
  var info = {};

  info.init = function () {
    this.hoverItems();
  };

  info.hoverItems = function () {
    $('.nal li').hover(function () {
      console.log('Yo!');
    });
  };

  return info.init();

})(window, document);