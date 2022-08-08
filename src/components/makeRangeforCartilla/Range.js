import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EventUpdateProductMultiplieds, ResetCartilla, UpdateAmountBetInCartilla, UpdateEarningsMACS } from '../../action/BetInCartilla';
import { useForm }  from "../../hook/useForm";
import { Modal } from '../Modal';
import  sweetAlert from "sweetalert2";
import { ModalWTransition } from '../makeModalWTransition/ModalWTransition';
export const Range = ({btnvalue=1.5}) => {

  const dispatch= useDispatch();
  
  const {Row, maxTime, multipliers} = useSelector((state) => state.showBet);
  const {maxRowBool, minRow, maxRow, ...cartilla}= useSelector((state) => state.showBet);
  const [stateModalSweetAlert, setstateModalSweetAlert] = useState(false);
  
  const ClickRange = (e) => {
    const minRow = 4;
    // setstateModalSweetAlert(!stateModalSweetAlert);
    if (Row.length>= minRow) {
    dispatch(UpdateAmountBetInCartilla(btnvalue));
    sweetAlert.fire({
      title: `Hola "nombreUSUARIO" ¿Estas seguro de apostar ${btnvalue} MACS?`,
      // text: `Multiplicador: x${multipliers}, ` + `Apuesta: ${btnvalue} MACS, ` + `Ganas: ${(multipliers*btnvalue).toFixed(2)} MACS`,
      icon: 'info',
      position: 'bottom',
      width: '450px',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I am sure!'
    }).then((result) => {
      if (result.isConfirmed) {
        sweetAlert.fire(
          'Buena suerte en tu apuesta',
          'Obtendras los resultados en '+ maxTime,
          'success'
        )
        // const cartillaCompleta = {
        //   cartilla: Row,
        //   multiplicador: multipliers,
        //   total: multipliers*btnvalue,
        //   tiempo: maxTime
        // }
        console.log(cartilla);
        localStorage.setItem('cartilla completa', JSON.stringify(cartilla));
        dispatch(ResetCartilla())
      }
    })
    }
    else{
      sweetAlert.fire({
        title: `La cantidad minima de apuesta es de ${minRow}`,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      })
    }
  }

  const mouseHover = ()=>{
    dispatch(UpdateAmountBetInCartilla(btnvalue));
    dispatch(UpdateEarningsMACS())
  }

  return ( 
      <>
            <input type={'button'} value={`${btnvalue} MACS`} onMouseOver={mouseHover} onClick={ClickRange} className={'btn_Monto'}/>
      </>
  )
}
