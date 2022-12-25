import { useDispatch } from "react-redux";
import { ToastsStore } from "react-toasts";
import { DeleteRows, EventStartAddNew, EventStartRemoveBetInCartilla, EventUpdateProductMultiplieds, OpenModal, ResetCartilla, UpdateAmountBetInCartilla, UpdateEarningsMACS, UpdateMaxTimeBetInCartilla } from "../action/BetInCartilla";
import { NewArray } from "./ArrayCodexCode";
import { randomDate2 } from "./randomNumber";

export const AddinRedux = (dispatch, Row, multiplied, event) => {
  dispatch(OpenModal());
  
  const datealeatorio = randomDate2(
    new Date(2024, 0, 1),
    new Date(),
    0,
    24
    ).toLocaleString();
    // if(maxRowBool) return  dispatch(DeleteLastBet())
    dispatch(UpdateAmountBetInCartilla(0));   
    dispatch(UpdateEarningsMACS());
    dispatch(EventStartAddNew(Row.length + 1, 10, event));
    dispatch(EventUpdateProductMultiplieds(multiplied));
    dispatch(UpdateMaxTimeBetInCartilla(datealeatorio));
    
    ToastsStore.success("Agregaste una apuesta a tu cupon", 3610)
  };

export const removerRowInRedux =(index, dispatch, Row)=>{
  dispatch(EventStartRemoveBetInCartilla(index));
  dispatch(EventUpdateProductMultiplieds())
  dispatch(UpdateEarningsMACS())
  // dispatch(EventUpdateRemoveOneMultiplieds())
  ToastsStore.error("Eliminaste una Apuesta de tu cupon", 3700)
  if(Row.length === 1){
      dispatch(ResetCartilla());
    } 
}
export const removeRowsInRedux = (dispatch, Row, codeBet) =>{
  const RowRemoved = Row.filter(r=>r.codeBet===codeBet).length
  ToastsStore.error("Eliminaste "+ RowRemoved + " apuesta de tu cupon", 3700)
  dispatch(DeleteRows(codeBet));
}
export const eliminaDuplicados = (originalArray) => {
  let arrayNew=[];
  originalArray.forEach((nro, index) => {
    if (!arrayNew.find(item => item.nro === nro)) {
      for (let i = 0; i < originalArray.length; i++) {
        const nroCurrent = originalArray[i];
  
        if (i === index) continue;
        else if (nroCurrent === nro);
      }
  
      arrayNew.push({ nro });
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