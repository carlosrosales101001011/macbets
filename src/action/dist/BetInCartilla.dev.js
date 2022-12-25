"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventStartRemoveBetInCartilla = exports.EventUpdateProductMultiplieds = exports.ResetCartilla = exports.CloseModal = exports.OpenModal = exports.UpdateMaxTimeBetInCartilla = exports.UpdateProductMultiplieds = exports.UpdateAmountBetInCartilla = exports.DeleteRows = exports.ResaltarBet = exports.RemoveBetInCartilla = exports.maxRowBool = exports.UpdateEarningsMACS = exports.AddBetInCartilla = exports.IsCloseSeeMore = exports.IsOpenSeeMore = exports.GetInformationSeeMore = exports.EventStartAddNew = void 0;

var _type = require("../types/type");

var EventStartAddNew = function EventStartAddNew(rowlength, maxRow, row) {
  return function _callee(dispatch, getState) {
    var boolbody;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // const resp = await 
            boolbody = true;

            if (!boolbody) {
              _context.next = 7;
              break;
            }

            if (!(rowlength <= maxRow)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", dispatch(AddBetInCartilla(maxRow, row)));

          case 5:
            dispatch(maxRowBool(true));
            setTimeout(function () {
              dispatch(maxRowBool(false));
            }, 3000);

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log('Error hijo de la gran puta:', _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.EventStartAddNew = EventStartAddNew;

var GetInformationSeeMore = function GetInformationSeeMore(payload, isSelect) {
  return {
    type: _type.types.uiobjSeeMore,
    payload: payload,
    isSelect: isSelect
  };
};

exports.GetInformationSeeMore = GetInformationSeeMore;

var IsOpenSeeMore = function IsOpenSeeMore() {
  return {
    type: _type.types.uiIsOpenSeeMore
  };
};

exports.IsOpenSeeMore = IsOpenSeeMore;

var IsCloseSeeMore = function IsCloseSeeMore() {
  return {
    type: _type.types.uiIsCloseSeeMore
  };
};

exports.IsCloseSeeMore = IsCloseSeeMore;

var AddBetInCartilla = function AddBetInCartilla(maxRow, row) {
  return {
    type: _type.types.uiAddBetInCartilla,
    payload: {
      maxRow: maxRow,
      row: row
    }
  };
};

exports.AddBetInCartilla = AddBetInCartilla;

var UpdateEarningsMACS = function UpdateEarningsMACS() {
  return {
    type: _type.types.uiUpdateEarningsInMACS
  };
};

exports.UpdateEarningsMACS = UpdateEarningsMACS;

var maxRowBool = function maxRowBool(event) {
  return {
    type: _type.types.uimaxRowBool,
    payload: event
  };
};

exports.maxRowBool = maxRowBool;

var RemoveBetInCartilla = function RemoveBetInCartilla(event) {
  return {
    type: _type.types.uiRemoveBetInCartilla,
    payload: event
  };
};

exports.RemoveBetInCartilla = RemoveBetInCartilla;

var ResaltarBet = function ResaltarBet(event) {
  return {
    type: _type.types.betResaltada,
    payload: event
  };
};

exports.ResaltarBet = ResaltarBet;

var DeleteRows = function DeleteRows(event) {
  return {
    type: _type.types.DeleteRows,
    payload: event
  };
};

exports.DeleteRows = DeleteRows;

var UpdateAmountBetInCartilla = function UpdateAmountBetInCartilla(event) {
  return {
    type: _type.types.uiUpdateAmount,
    payload: event
  };
};

exports.UpdateAmountBetInCartilla = UpdateAmountBetInCartilla;

var UpdateProductMultiplieds = function UpdateProductMultiplieds(event) {
  return {
    type: _type.types.uiUpdateMultipliers,
    payload: event
  };
};

exports.UpdateProductMultiplieds = UpdateProductMultiplieds;

var UpdateMaxTimeBetInCartilla = function UpdateMaxTimeBetInCartilla(event) {
  return {
    type: _type.types.uiUpdateMaxTime,
    payload: event
  };
};

exports.UpdateMaxTimeBetInCartilla = UpdateMaxTimeBetInCartilla;

var OpenModal = function OpenModal() {
  return {
    type: _type.types.uiOpenModal
  };
};

exports.OpenModal = OpenModal;

var CloseModal = function CloseModal() {
  return {
    type: _type.types.uiCloseModal
  };
};

exports.CloseModal = CloseModal;

var ResetCartilla = function ResetCartilla() {
  return {
    type: _type.types.uiResetBet
  };
};

exports.ResetCartilla = ResetCartilla;

var EventUpdateProductMultiplieds = function EventUpdateProductMultiplieds(multiplier) {
  return function _callee2(dispatch, getState) {
    var boolbody;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // const {uid, name} = getState().auth;
            try {
              // const resp = await 
              boolbody = true;

              if (boolbody) {
                /**
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                    */
                dispatch(UpdateProductMultiplieds(multiplier));
              }
            } catch (error) {
              console.log('Error hijo de la gran puta:', error);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.EventUpdateProductMultiplieds = EventUpdateProductMultiplieds;

var EventStartRemoveBetInCartilla = function EventStartRemoveBetInCartilla(id) {
  return function _callee3(dispatch, getState) {
    var boolbody;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // const {uid, name} = getState().auth;
            try {
              // const resp = await 
              boolbody = true;

              if (boolbody) {
                /**
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                console.log("en EventStartRemoveBetInCartilla" );
                 */
                dispatch(maxRowBool(false));
                dispatch(RemoveBetInCartilla(id)); // if(rowlength>=maxRow) return dispatch( RemoveBetInCartilla(id) ); dispatch(maxRowBool(true));
              }
            } catch (error) {
              console.log('Error hijo de la gran puta:', error);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.EventStartRemoveBetInCartilla = EventStartRemoveBetInCartilla;