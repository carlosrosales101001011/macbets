"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiBetInCartilla = void 0;

var _type = require("../types/type");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  Row: [],
  rowLength: 0,
  EarningsMACS: 0,
  multipliers: '0',
  maxTime: '',
  amount: '0',
  maxRow: 8,
  minRow: 3,
  maxRowBool: false
};

var uiBetInCartilla = function uiBetInCartilla() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type.types.uiAddBetInCartilla:
      //console.log(state);
      return _objectSpread({}, state, {
        rowLength: state.Row.length + 1,
        // maxRowBool: (state.rowLength) >= state.maxRow ? true : false,
        maxRow: action.payload.maxRow,
        Row: [].concat(_toConsumableArray(state.Row), [action.payload.row])
      });

    case _type.types.uimaxRowBool:
      return _objectSpread({}, state, {
        maxRowBool: action.payload // Row: [ ...state.Row.slice(0, state.Row.length - 1) ],

      });

    case _type.types.uiRemoveBetInCartilla:
      // console.log(state.Row.find(e=>e.codeBtn===action.payload));
      // state.Row[action.payload];
      var rowDelete = state.Row.find(function (e) {
        return e.codeBtn === action.payload;
      });
      return _objectSpread({}, state, {
        rowLength: state.Row.length - 1,
        Row: _toConsumableArray(state.Row.filter(function (row) {
          return row !== rowDelete;
        }))
      });

    case _type.types.uiUpdateAmount:
      // console.log(action.payload, 'Monto de la apuesta');
      return _objectSpread({}, state, {
        amount: action.payload
      });

    case _type.types.uiUpdateMultipliers:
      var mult = 1;
      state.Row.forEach(function (element) {
        // mult += parseInt(element.multiplier);
        mult *= element.multiplicador;
      });
      return _objectSpread({}, state, {
        multipliers: mult.toFixed(2)
      });

    case _type.types.uiUpdateEarningsInMACS:
      return _objectSpread({}, state, {
        EarningsMACS: (state.amount * state.multipliers).toFixed(2)
      });

    case _type.types.uiUpdateMaxTime:
      var dateRow = function dateRow(itu) {
        var dateTimedefinit = state.Row[itu].comienza.split(' '),
            day = dateTimedefinit[0].split('/')[0],
            month = dateTimedefinit[0].split('/')[1],
            year = dateTimedefinit[0].split('/')[2];
        return new Date(year, month - 1, day, dateTimedefinit[1].split(':')[0], dateTimedefinit[1].split(':')[1]);
      };

      var maxTime = dateRow(0);

      for (var i = 0; i < state.Row.length; i++) {
        if (dateRow(i) > maxTime) {
          maxTime = dateRow(i);
        }
      }

      return _objectSpread({}, state, {
        maxTime: maxTime.toLocaleString()
      });

    case _type.types.uiResetBet:
      return _objectSpread({}, state, {
        Row: [],
        multipliers: '0',
        maxTime: '',
        maxRowBool: false,
        amount: '0',
        rowLength: 0,
        EarningsMACS: 0
      });

    case _type.types.uiSaveCartilla:
      return _objectSpread({}, state, {
        Row: [],
        multipliers: '1',
        maxTime: '',
        amount: '0'
      });

    case _type.types.betResaltada:
      // const btnEnabled = state.Row.find(e=>e.codeBtn===action.payload)
      var btnEnabled = state; // btnEnabled.inCupon=true;
      // console.log(action.payload);

      console.log(btnEnabled);
      return _objectSpread({}, state);

    case _type.types.DeleteRows:
      // const rows = state.Row.filter(r=> r.codeBet===action.payload)
      // console.log(action.payload);
      return _objectSpread({}, state, {
        rowLength: state.Row.length - 1,
        Row: _toConsumableArray(state.Row.filter(function (row) {
          return row.codeBet !== action.payload;
        }))
      });

    default:
      return state;
  }
};

exports.uiBetInCartilla = uiBetInCartilla;