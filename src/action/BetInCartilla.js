import { types } from "../types/type";

export const EventStartAddNew = (rowlength, maxRow, row)=>{
    return async(dispatch, getState)=>{
        // const {uid, name} = getState().auth;
        
        try{
            // const resp = await 
            const boolbody= true;
            if (boolbody) {
                /**
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                 */
                // console.log( event, "en BetInCartilla" );
                
                if(rowlength<=maxRow) return dispatch( AddBetInCartilla( maxRow, row ) ); dispatch(maxRowBool(true));
                setTimeout(() => { dispatch(maxRowBool(false)) }, 3000);
            }
        }
        catch(error){
            console.log('Error hijo de la gran puta:', error);
        }
    }
        }


export const AddBetInCartilla = (maxRow, row)=>({
    type: types.uiAddBetInCartilla,
    payload: {
        maxRow,
        row
    }
})
export const UpdateEarningsMACS = ()=>({
    type: types.uiUpdateEarningsInMACS
})

export const maxRowBool = (event)=>({
    type: types.uimaxRowBool,
    payload: event
})

export const RemoveBetInCartilla = (event)=>({
    type: types.uiRemoveBetInCartilla,
    payload: event
})
export const ResaltarBet = (event)=>({
    type: types.betResaltada,
    payload: event
})
export const DeleteRows = (event)=>({
    type: types.DeleteRows,
    payload: event
})
export const UpdateAmountBetInCartilla = (event)=>({
    type: types.uiUpdateAmount,
    payload: event
})
export const UpdateProductMultiplieds= (event)=>({
    type: types.uiUpdateMultipliers,
    payload: event
})
export const UpdateMaxTimeBetInCartilla = (event)=>({
    type: types.uiUpdateMaxTime,
    payload: event
})
export const OpenModal = ()=>({
    type: types.uiOpenModal,
})
export const CloseModal = ()=>({
    type: types.uiCloseModal,
})
export const ResetCartilla=()=>({
    type: types.uiResetBet
})
export const EventUpdateProductMultiplieds = (multiplier)=>{
    return async(dispatch, getState)=>{
        // const {uid, name} = getState().auth;
        try{
            // const resp = await 
            const boolbody= true;
            if (boolbody) {
                /**
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                    */
                dispatch( UpdateProductMultiplieds(multiplier) );
            }
        }
        catch(error){
            console.log('Error hijo de la gran puta:', error);
        }
    }
}

export const EventStartRemoveBetInCartilla = (id)=>{
    return async(dispatch, getState)=>{
        // const {uid, name} = getState().auth;
        try{
            // const resp = await 
            const boolbody= true;
            if (boolbody) {
                /**
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                console.log("en EventStartRemoveBetInCartilla" );
                 */
                dispatch(maxRowBool(false))
                dispatch( RemoveBetInCartilla(id) )
                // if(rowlength>=maxRow) return dispatch( RemoveBetInCartilla(id) ); dispatch(maxRowBool(true));
                
            }
        }
        catch(error){
            console.log('Error hijo de la gran puta:', error);
        }
    }
}
