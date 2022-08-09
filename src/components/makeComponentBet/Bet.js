import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteLastBet,
  EventStartAddNew,
  EventUpdateProductMultiplieds,
  OpenModal,
  ResaltarBet,
  ResetCartilla,
  UpdateAmountBetInCartilla,
  UpdateEarningsMACS,
  UpdateMaxTimeBetInCartilla,
} from "../../action/BetInCartilla";
import { randomDate2 } from "../../helpers/randomNumber";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

// import { Cartilla } from '../Cartilla';

export const Bet = ({
  stateunBet,
  multiplied,
  date,
  time,
  codigo,
  idAccordion,
  numbet,
  nameAccordion,
  codeBet,
  isDisabled,
  inCupon,
}) => {
  
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 650px)" }); //yellow
  const dispatch = useDispatch();
  const { Row } = useSelector((state) => state.showBet);
  const event = {
    codigo: codigo,
    comienza: `${date} ${time}`,
    n_bet: `${idAccordion}. ${numbet}`,
    statement: stateunBet,
    accordionStatement: nameAccordion,
    multiplicador: multiplied,
    codeBet: codeBet,
    inCupon: true,
  };
  const onClickMultiplied = () => {
    AddinRedux();
  };
  const AddinRedux = () => {
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
  };
  const refBet = useRef(null);
  
  return (
    <>
      <ContainerBet
        onClick={onClickMultiplied}
        style={{
          width: `${
            !isTabletOrMobile ? "100%" : "32rem"
          }
          `,
          backgroundColor: `${inCupon && 'green'}`,
        }}
        className="containerBet"
      >
        <div className="stateUnBet">
          <p>
            {stateunBet} : {codeBet}
          </p>
        </div>
        <div className="multipliedBet">
          <input
            type="button"
            className="inputMultiplied"
            value={"x" + multiplied}
          />
        </div>
      </ContainerBet>
    </>
  );
};

/*
if(row.codigo === codigo){
            const eventDiferent = {
                codigo: codigo,
                comienza: `${date} ${time}`,
                n_bet: `${idAccordion}. ${numbet}`,
                betHTML: []
              } 
              eventDiferent.betHTML.push({
                  statement: stateunBet,
                  accordionStatement: nameAccordion,
                  multiplicador: multiplied
                });
                console.log(eventDiferent);
                return eventDiferent
            }else{
              return row
            }
*/
const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  height: 50px;
  background-color: #37474f;
  .multipliedBet {
    margin-top: 1rem;
  }
  // width: 100%; es para mediaquery
  // width: 32%;
  border-bottom: 1px solid #37474f;
  .stateUnBet {
    width: 80%;
    white-space: nowrap;
    text-align: center;
    p {
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 70%;
      font-family: "Raleway", sans-serif;
    }
  }
  .multipliedBet {
    width: 100%;
    display: flex;
    .inputMultiplied {
      border: none;
      padding: 1px 5px;
      font-size: 85%;

      font-weight: bold;
      cursor: pointer;
      width: 100%;
      heigth: 100%;
    }
  }
  &:hover {
    background-color: red;
    border: none;
    .multipliedBet {
      background-color: purple;
    }
  }
`;
