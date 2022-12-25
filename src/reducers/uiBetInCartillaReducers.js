
import { types } from "../types/type";

const initialState = {
    Row: [],
    rowLength: 0,
    EarningsMACS: 0,
    multipliers: '0',
    maxTime: '',
    amount: '0',
    maxRow: 8,
    minRow: 3,
    maxRowBool: false
}


export const uiBetInCartilla = (state = initialState, action) => {
    switch (action.type) {
        case types.uiAddBetInCartilla:
            //console.log(state);
            return {
                ...state,
                rowLength: state.Row.length + 1,
                // maxRowBool: (state.rowLength) >= state.maxRow ? true : false,
                maxRow: action.payload.maxRow,
                Row: [
                    ...state.Row, 
                    action.payload.row
                ],
            }
        case types.uimaxRowBool:
            return {
                ...state,
                maxRowBool: action.payload,
                // Row: [ ...state.Row.slice(0, state.Row.length - 1) ],
            }
        case types.uiRemoveBetInCartilla:
            // console.log(state.Row.find(e=>e.codeBtn===action.payload));
            // state.Row[action.payload];
            const rowDelete = state.Row.find(e=>e.codeBtn===action.payload) 
            return {
                ...state,
                rowLength: state.Row.length - 1,
                Row: [...state.Row.filter(row => row !== rowDelete)],
            }
        case types.uiUpdateAmount:
            // console.log(action.payload, 'Monto de la apuesta');
            return {
                ...state,
                amount: action.payload
            }
        case types.uiUpdateMultipliers:
            let mult = 1;
            state.Row.forEach(element => {
                // mult += parseInt(element.multiplier);
                mult *= element.multiplicador
            });
            return {
                ...state,
                multipliers: mult.toFixed(2),
            }
        case types.uiUpdateEarningsInMACS:
            return {
                ...state,
                EarningsMACS: (state.amount * state.multipliers).toFixed(2),
            }
        case types.uiUpdateMaxTime:
            function dateRow(itu) { 
                    let dateTimedefinit = state.Row[itu].comienza.split(' '),
                    day = dateTimedefinit[0].split('/')[0],
                    month = dateTimedefinit[0].split('/')[1],
                    year = dateTimedefinit[0].split('/')[2]

                    return new Date(year, month - 1, day, dateTimedefinit[1].split(':')[0], dateTimedefinit[1].split(':')[1]);
            }
            let maxTime= dateRow(0);
            for (let i = 0; i < state.Row.length; i++) {
                if(dateRow(i)>maxTime){
                    maxTime = dateRow(i);
                }
            }
            return {
                ...state,
                maxTime: maxTime.toLocaleString()
            }
        case types.uiResetBet:
            return {
                ...state,
                Row: [],
                multipliers: '0',
                maxTime: '',
                maxRowBool: false,
                amount: '0',
                rowLength: 0,
                EarningsMACS: 0,
            }
        case types.uiSaveCartilla:
            return {
                ...state,
                Row: [],
                multipliers: '1',
                maxTime: '',
                amount: '0'
            }
        case types.betResaltada:
            // const btnEnabled = state.Row.find(e=>e.codeBtn===action.payload)
            const btnEnabled = state
            // btnEnabled.inCupon=true;
            // console.log(action.payload);
            console.log(btnEnabled);
            return {
                ...state,
                // rowLength: state.Row.length - 1,
                // Row: [...state.Row.filter(row => row !== rowDelete)],
            }
        case types.DeleteRows:
            // const rows = state.Row.filter(r=> r.codeBet===action.payload)
            // console.log(action.payload);
            return{
                ...state,
                rowLength: state.Row.length - 1,
                Row: [...state.Row.filter(row => row.codeBet !== action.payload)],
            }
        default:
            return state;
    }
}       