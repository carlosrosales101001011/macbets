import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EventStartRemoveBetInCartilla, ResetCartilla, EventUpdateProductMultiplieds, EventUpdateRemoveOneMultiplieds, UpdateEarningsMACS } from '../action/BetInCartilla';
import ReactTooltip from 'react-tooltip';

export const TrsCartilla = ({id, accordionStatement, statement, codeBet, comienza, n_bet, multiplicador}) => {
    const dispatch = useDispatch();
    const { Row, maxRow } = useSelector((state) => state.showBet)

    const onClickRemoveBetOfCartilla = ()=>{
      dispatch(EventStartRemoveBetInCartilla(Row.length+1, maxRow, id));
      dispatch(EventUpdateProductMultiplieds())
      dispatch(UpdateEarningsMACS())
      // dispatch(EventUpdateRemoveOneMultiplieds())
      if(Row.length === 1){
          dispatch(ResetCartilla());
        }   
    }
    
  return (
    <>
    <tr>
        <th >#{codeBet}</th>
        <th >{comienza}</th>
        <th data-tip={accordionStatement + ' - '+ statement} >{n_bet} <ReactTooltip  /></th>	
        <th >x{multiplicador}</th>
        <th className='deleteRow'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClickRemoveBetOfCartilla} className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        </th>
        
    </tr>
    </>
  )
}
