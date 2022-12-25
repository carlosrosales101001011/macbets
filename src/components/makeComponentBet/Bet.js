import React, {  useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ReactTooltip from "react-tooltip";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import { NewArray } from "../../helpers/ArrayCodexCode";
import { AddinRedux, removerRowInRedux } from "../../helpers/metodosReduxAddRemove";

export const Bet = ({
  stateunBet,
  multiplied,
  date,
  time,
  codeBet,
  idAccordion,
  numbet,
  nameAccordion,
  codeBtn,
  isDisabled,
  inCupon,
  titulo,
  subTitulo
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 650px)" }); //yellow
  const dispatch = useDispatch();
  const { Row } = useSelector((state) => state.showBet);
  const event = {
    codeBet,
    idAccordion,
    codeBtn,



    accordionStatement: nameAccordion,
    statement: stateunBet,
    multiplicador: multiplied,
    comienza: `${date} ${time}`,
    n_bet: `${idAccordion}. ${numbet}`,
    titulo,
    subTitulo,
    inCupon: true,
  };
  // console.log(codeBet, ": Codigo de la apuesta, ", idAccordion, ": codigo del acordion, ", codeBtn, ": codigo del boton");
  const refBet = useRef(null);
  const onClickMultiplied = () => {
    
    if(Row.map(e=>e.codeBtn).flat().includes(codeBtn)){
      return removerRowInRedux(codeBtn, dispatch, Row);
    }
    //* Si la apuesta esta en el mismo acordion que una apuesta seleccionada del 
    //*  mismo codeBet, no agregar al redux
    if(Row.map(e=>e.codeBet).flat().includes(codeBet) && NewArray(Row).map(b=>b.bets.map(b=>b.idAccordion)).flat().includes(idAccordion)){
      return ToastsStore.error("No puedes seleccionar esa apuesta", 3710);
    }
    AddinRedux(dispatch, Row, multiplied, event);
  };
  
  return (
    <>
      <ContainerBet
        onClick={onClickMultiplied}
        betSelect = {Row.map((e) => e.codeBtn).flat().includes(codeBtn)}
        className="containerBet"
        ref={refBet}
      >
        <div className="stateUnBet">
          <p>
            {stateunBet}
          </p>
          <p>
            x{multiplied}
          </p>
        </div>
      </ContainerBet>

    </>
  );
};

const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  cursor: pointer;
  background-color: ${props=> props.betSelect? "green": "#37474f"};
  
  
  border-bottom: 1px solid #37474f;
  .stateUnBet {
    width: 100%;
    white-space: nowrap;
    text-align: center;
    padding: 5px 0;
    p {
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 11px;
      font-family: font-family: 'Poppins', sans-serif;
      font-weight: 400;
      word-wrap: break-word;
    }
  }
  &:hover {
    border: none;
    transition: all 0.5s;
    background-color: ${props=> props.betSelect? "green":"purple"};
    .multipliedBet {
    }
  }
`;
