/**
 * Inspired by CODROPS: http://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/
 *
 */

var tabs = (function (window) {

  'use strict';

  function extend(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  };

  function wcTabs(el, options) {
    this.el = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  };

  wcTabs.prototype.options = {
    start: 0
  };

  wcTabs.prototype._init = function () {
    // Tabs elements
    this.tabs = [].slice.call(this.el.querySelectorAll('nav.can-cant > ul > li'));
    // Content items
    this.items = [].slice.call(this.el.querySelectorAll('div.tabs-content > section'));
    this.itemsContent = [].slice.call(this.el.querySelectorAll('ul.nal > li'));
    // Current index
    this.current = -1;
    // Show current content item
    this._show();
    this._showTabsContent();
    // init events
    this._initEvents();
  };

  wcTabs.prototype._initEvents = function () {
    var self = this;
    this.tabs.forEach(function (tab, idx) {
      tab.addEventListener('click', function (ev) {
        ev.preventDefault();
        self._show(idx);
      });
    });
  };

  wcTabs.prototype._show = function (idx) {
    if(this.current >= 0) {
      this.tabs[this.current].className = '';
      this.items[this.current].className = 'is-hidden';
    }

    // Change current
    this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
    this.tabs[this.current].className = 'tab-current';
    this.items[this.current].className = 'content-current';
  };

  wcTabs.prototype._showTabsContent = function (idx) {
    this.itemsContent.forEach(function (itemContent, idx) {
      itemContent.addEventListener('mouseover', function () {
        alert('AAA');
      });
    });
  };

  window.wcTabs = wcTabs;

})(window);

module.exports = tabs;
