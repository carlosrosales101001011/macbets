import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { DeleteLastBet } from '../action/BetInCartilla';

export const ErrorsInLoadRow = () => {
    const dispatch = useDispatch();
    //dispatch(DeleteLastBet());
    const {maxRow} = useSelector((state) => state.showBet);
  return (
    <div className="message_alert_cartilla_llena">
        <svg xmlns="http://www.w3.org/2000/svg" styled="margin-left: 2rem;"  width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 20 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg>
        <span styled="font-size: 80%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
        ¡Alto!, el numero de filas maxima es de {maxRow}
        </span>
    </div>
  )
}
