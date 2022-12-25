"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminaDuplicados = exports.removeRowsInRedux = exports.removerRowInRedux = exports.AddinRedux = void 0;

var _reactRedux = require("react-redux");

var _reactToasts = require("react-toasts");

var _BetInCartilla = require("../action/BetInCartilla");

var _ArrayCodexCode = require("./ArrayCodexCode");

var _randomNumber = require("./randomNumber");

var AddinRedux = function AddinRedux(dispatch, Row, multiplied, event) {
  dispatch((0, _BetInCartilla.OpenModal)());
  var datealeatorio = (0, _randomNumber.randomDate2)(new Date(2024, 0, 1), new Date(), 0, 24).toLocaleString(); // if(maxRowBool) return  dispatch(DeleteLastBet())

  dispatch((0, _BetInCartilla.UpdateAmountBetInCartilla)(0));
  dispatch((0, _BetInCartilla.UpdateEarningsMACS)());
  dispatch((0, _BetInCartilla.EventStartAddNew)(Row.length + 1, 10, event));
  dispatch((0, _BetInCartilla.EventUpdateProductMultiplieds)(multiplied));
  dispatch((0, _BetInCartilla.UpdateMaxTimeBetInCartilla)(datealeatorio));

  _reactToasts.ToastsStore.success("Agregaste una apuesta a tu cupon", 3610);
};

exports.AddinRedux = AddinRedux;

var removerRowInRedux = function removerRowInRedux(index, dispatch, Row) {
  dispatch((0, _BetInCartilla.EventStartRemoveBetInCartilla)(index));
  dispatch((0, _BetInCartilla.EventUpdateProductMultiplieds)());
  dispatch((0, _BetInCartilla.UpdateEarningsMACS)()); // dispatch(EventUpdateRemoveOneMultiplieds())

  _reactToasts.ToastsStore.error("Eliminaste una Apuesta de tu cupon", 3700);

  if (Row.length === 1) {
    dispatch((0, _BetInCartilla.ResetCartilla)());
  }
};

exports.removerRowInRedux = removerRowInRedux;

var removeRowsInRedux = function removeRowsInRedux(dispatch, Row, codeBet) {
  var RowRemoved = Row.filter(function (r) {
    return r.codeBet === codeBet;
  }).length;

  _reactToasts.ToastsStore.error("Eliminaste " + RowRemoved + " apuesta de tu cupon", 3700);

  dispatch((0, _BetInCartilla.DeleteRows)(codeBet));
};

exports.removeRowsInRedux = removeRowsInRedux;

var eliminaDuplicados = function eliminaDuplicados(originalArray) {
  var arrayNew = [];
  originalArray.forEach(function (nro, index) {
    if (!arrayNew.find(function (item) {
      return item.nro === nro;
    })) {
      for (var i = 0; i < originalArray.length; i++) {
        var nroCurrent = originalArray[i];
        if (i === index) continue;else if (nroCurrent === nro) ;
      }

      arrayNew.push({
        nro: nro
      });
    }
  });
  return arrayNew;
};
/*
const nroList = [
{idAccordion: 1, statement: 'Universitarios', accordionStatement: 'General', multiplicador: 2.3, codeBtn: 'DCUxpcpr'},
{idAccordion: 1, statement: 'Empate', accordionStatement: 'General', multiplicador: 1.4, codeBtn: 'nKDPVYoQ'},
{idAccordion: 1, statement: 'Sporting cristal', accordionStatement: 'General', multiplicador: 1.4, codeBtn: 'OCMmyOiS'},
{idAccordion: 2, statement: 'mas de 1.5', accordionStatement: 'Nro de goles/1er Tiempo', multiplicador: 1.4, codeBtn: 'dCcZHmll'},
{idAccordion: 3, statement: 'Sporting cristal o Empate', accordionStatement: 'Doble Oportunidad', multiplicador: 1.4, codeBtn: 'eWVjQQYv'},
{idAccordion: 3, statement: 'Universitario o Sporting cristal', accordionStatement: 'Doble Oportunidad', multiplicador: 2.3, codeBtn: 'JCpksFni'},
{idAccordion: 4, statement: 'Sporting cristal', accordionStatement: 'Apuesta sin empate', multiplicador: 1.4, codeBtn: 'ybguDrKo'}
]

const collector = [];
let qty = 1;

nroList.forEach((be, index) => {
  qty = 1;
  const nro= be.idAccordion;

  if (!collector.find(item => item.nro === nro)) {
    for (let i = 0; i < nroList.length; i++) {
      const nroCurrent = nroList[i];

      if (i === index) continue;
      else if (nroCurrent === nro) qty++;
    }

    collector.push({ nro });
  }
});

console.log(collector);
*/


exports.eliminaDuplicados = eliminaDuplicados;