"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiSelectedSeeMore = exports.uiCloseMenu = exports.uiOpenMenu = exports.uiCloseDropdown = exports.uiOpenDropdown = void 0;

var _type = require("../types/type");

var uiOpenDropdown = function uiOpenDropdown() {
  return {
    type: _type.types.uiOpenDropdown
  };
};

exports.uiOpenDropdown = uiOpenDropdown;

var uiCloseDropdown = function uiCloseDropdown() {
  return {
    type: _type.types.uiCloseDropdown
  };
};

exports.uiCloseDropdown = uiCloseDropdown;

var uiOpenMenu = function uiOpenMenu() {
  return {
    type: _type.types.uiIsOpenMenu
  };
};

exports.uiOpenMenu = uiOpenMenu;

var uiCloseMenu = function uiCloseMenu() {
  return {
    type: _type.types.uiIsCloseMenu
  };
};

exports.uiCloseMenu = uiCloseMenu;

var uiSelectedSeeMore = function uiSelectedSeeMore() {
  return {
    type: _type.types.uiSelectedSeeMore
  };
};

exports.uiSelectedSeeMore = uiSelectedSeeMore;