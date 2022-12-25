"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiReducer = void 0;

var _type = require("@testing-library/user-event/dist/type");

var _type2 = require("../types/type");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isObjSeeMore: {},
  isSelectedSeeMore: false,
  DropdownOpen: false,
  openCartilla: false // isOpenMenu: false,

};

var uiReducer = function uiReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type2.types.uiOpenDropdown:
      return _objectSpread({}, state, {
        dropdownOpen: true
      });

    case _type2.types.uiCloseDropdown:
      return _objectSpread({}, state, {
        dropdownOpen: false
      });

    case _type2.types.uiOpenModal:
      return _objectSpread({}, state, {
        openCartilla: true
      });

    case _type2.types.uiCloseModal:
      return _objectSpread({}, state, {
        openCartilla: false
      });

    case _type2.types.uiIsOpenMenu:
      return _objectSpread({}, state, {
        isOpenMenu: true
      });

    case _type2.types.uiIsCloseMenu:
      return _objectSpread({}, state, {
        isOpenMenu: false
      });

    case _type2.types.uiCheckboxIsSelect:
      return _objectSpread({}, state, {
        isCheckbox: true
      });

    case _type2.types.uiCheckboxNotSelect:
      return {
        isCheckbox: false
      };

    case _type2.types.uiobjSeeMore:
      return _objectSpread({}, state, {
        isObjSeeMore: action.payload,
        isSelectedSeeMore: action.isSelect
      });

    default:
      return state;
  }
};

exports.uiReducer = uiReducer;