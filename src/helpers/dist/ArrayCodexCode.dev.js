"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewArray = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var NewArray = function NewArray(Row) {
  var arrayMap = Row.map(function (item) {
    return [item.codeBet, item];
  });
  var countriesMapArr = new Map(arrayMap);

  var uniqArr = _toConsumableArray(countriesMapArr.values());

  var newArr = uniqArr.map(function (e) {
    return {
      codeBet: e.codeBet,
      comienza: e.comienza,
      n_bet: e.n_bet,
      titulo: e.titulo,
      subTitulo: e.subTitulo,
      bets: Row.filter(function (item) {
        return item.codeBet === e.codeBet;
      }).map(function (_ref) {
        var codeBet = _ref.codeBet,
            comienza = _ref.comienza,
            n_bet = _ref.n_bet,
            idAccordion = _ref.idAccordion,
            statement = _ref.statement,
            accordionStatement = _ref.accordionStatement,
            multiplicador = _ref.multiplicador,
            codeBtn = _ref.codeBtn;
        return {
          idAccordion: idAccordion,
          statement: statement,
          accordionStatement: accordionStatement,
          multiplicador: multiplicador,
          codeBtn: codeBtn
        };
      })
    };
  });
  return newArr;
};

exports.NewArray = NewArray;