"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('test 2');

var StickyNav =
/*#__PURE__*/
function () {
  function StickyNav(options) {
    _classCallCheck(this, StickyNav);

    // nav element
    this.$nav = document.querySelector(options.navSelector); // wrapper element for all content under nav

    this.$mainWrap = document.querySelector(options.mainWrapSelector); // nav separation from top of page

    this.heightAboveNav = this.$nav.offsetTop; // css class to add to make the nav bar stick

    this.stickyClass = options.stickyClass; // track whether or not the nav has is in the sticky state

    this.isSticky = false;
    this.$menuButton = document.querySelector(options.menuButtonSelector);
    this.$menu = document.querySelector(options.menuSelector);
    this.openMenuClass = options.openMenuClass; // bind context of all methods to current instance

    this.init = this.init.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
    this.stick = this.stick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.disableStick = this.disableStick.bind(this); // run all initial functionality

    this.init();
  }

  _createClass(StickyNav, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // set up listener for scroll event
      window.addEventListener('scroll', this.stick);
      window.addEventListener('resize', this.disableStick);
      this.$menuButton.addEventListener('click', this.toggleMenu);
    }
  }, {
    key: "stick",
    value: function stick() {
      if (window.innerWidth < 960) return false;

      if (window.scrollY > this.heightAboveNav && this.isSticky) {
        // do nothing if nav is already in sticky state, and user is scrolling past sticking point
        return;
      } else if (window.scrollY > this.heightAboveNav && !this.isSticky) {
        // user is scrolling past sticking point while nav is in initial state
        this.$nav.classList.add(this.stickyClass);
        this.isSticky = true;
      } else {
        // set nav back to initial state if scrolling back to sticking point
        this.$nav.classList.remove(this.stickyClass);
        this.isSticky = false;
      }
    }
  }, {
    key: "disableStick",
    value: function disableStick() {
      if (window.innerWidth < 960) {
        this.$nav.classList.remove(this.stickyClass);
        this.isSticky = false;
      }
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (this.$menu.classList.contains(this.openMenuClass)) this.$menu.classList.remove(this.openMenuClass);else this.$menu.classList.add(this.openMenuClass);
    }
  }]);

  return StickyNav;
}(); // instantiate the component


window.addEventListener('load', function () {
  var stickyNav = new StickyNav({
    navSelector: '.main-nav',
    mainWrapSelector: '.page-wrap',
    stickyClass: 'sticky',
    menuButtonSelector: '.menu-button',
    menuSelector: '.main-nav-links',
    openMenuClass: 'open'
  });
});
var test = 'Testing!';
console.log(test);