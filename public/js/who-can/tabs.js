/**
 * Tabs system
 * @author Lucas <lucas@lucas.ninja>
 */
var $ = require('jquery');

var tabs = (function (window, document, undefined) {
  'use strict';

  // Tabs object
  var tabs = {};

  tabs.init = function () {
    this.switchTabs();
  };

  tabs.switchTabs = function () {
    var tabsContent = $('.tabs-content > section');
    var idx = $('.can-cant li').data('index');
    $('.can-cant li').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('tab-current').siblings().removeClass('tab-current');
    });
  };

  return tabs.init();

})(window, document);

module.exports = tabs;