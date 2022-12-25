"use strict";

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var timeOut;

var Item =
/*#__PURE__*/
function () {
  function Item(icon, backgroundColor) {
    _classCallCheck(this, Item);

    this.$element = document.createElement("div");
    this.icon = icon;
    this.$element.addClass("item");
    this.$element.css("background-color", backgroundColor);
    var i = document.createElement("i");
    i.addClass("fi-" + icon);
    this.$element.append(i);
    this.prev = null;
    this.next = null;
    this.isMoving = false;
    var element = this;
    this.$element.on("mousemove", function () {
      clearTimeout(timeOut);
      timeOut = setTimeout(function () {
        if (element.next && element.isMoving) {
          element.next.moveTo(element);
        }
      }, 10);
    });
  }

  _createClass(Item, [{
    key: "moveTo",
    value: function moveTo(item) {
      (0, _animejs["default"])({
        targets: this.$element[0],
        left: item.$element.css("left"),
        top: item.$element.css("top"),
        duration: 700,
        elasticity: 500
      });

      if (this.next) {
        this.next.moveTo(item);
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      (0, _animejs["default"])({
        targets: this.$element[0],
        left: this.prev.$element.css("left"),
        top: this.prev.$element.css("top"),
        duration: 80
      });

      if (this.next) {
        this.next.updatePosition();
      }
    }
  }]);

  return Item;
}();

var Menu =
/*#__PURE__*/
function () {
  function Menu(menu) {
    _classCallCheck(this, Menu);

    this.$element = menu;
    this.size = 0;
    this.first = null;
    this.last = null;
    this.timeOut = null;
    this.hasMoved = false;
    this.status = "closed";
  }

  _createClass(Menu, [{
    key: "add",
    value: function add(item) {
      var menu = this;

      if (this.first == null) {
        this.first = item;
        this.last = item;
        this.first.$element.on("mouseup", function () {
          if (menu.first.isMoving) {
            menu.first.isMoving = false;
          } else {
            menu.click();
          }
        });
        item.$element.draggable({
          start: function start() {
            menu.close();
            item.isMoving = true;
          }
        }, {
          drag: function drag() {
            if (item.next) {
              item.next.updatePosition();
            }
          }
        }, {
          stop: function stop() {
            item.isMoving = false;
            item.next.moveTo(item);
          }
        });
      } else {
        this.last.next = item;
        item.prev = this.last;
        this.last = item;
      }

      this.$element.after(item.$element);
    }
  }, {
    key: "open",
    value: function open() {
      this.status = "open";
      var current = this.first.next;
      var iterator = 1;
      var head = this.first;
      var sens = head.$element.css("left") < head.$element.css("right") ? 1 : -1;

      while (current != null) {
        (0, _animejs["default"])({
          targets: current.$element[0],
          left: parseInt(head.$element.css("left"), 10) + sens * (iterator * 50),
          top: head.$element.css("top"),
          duration: 500
        });
        iterator++;
        current = current.next;
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.status = "closed";
      var current = this.first.next;
      var head = this.first; // var iterator = 1;

      while (current != null) {
        (0, _animejs["default"])({
          targets: current.$element[0],
          left: head.$element.css("left"),
          top: head.$element.css("top"),
          duration: 500
        }); // iterator++;

        current = current.next;
      }
    }
  }, {
    key: "click",
    value: function click() {
      if (this.status === "closed") {
        this.open();
      } else {
        this.close();
      }
    }
  }]);

  return Menu;
}();

var menu = new Menu("#myMenu");
var item1 = new Item("list");
var item2 = new Item("torso", "#FF5C5C");
var item3 = new Item("social-facebook", "#5CD1FF");
var item4 = new Item("paypal", "#FFF15C");
var item5 = new Item("link", "#64F592");
menu.add(item1);
menu.add(item2);
menu.add(item3);
menu.add(item4);
menu.add(item5);