import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteLastBet,
  EventStartAddNew,
  EventStartRemoveBetInCartilla,
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
import sweetAlert from "sweetalert2";
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
  codigo,
  idAccordion,
  numbet,
  nameAccordion,
  codeBet,
  isDisabled,
  inCupon,
  titulo,
  subTitulo
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 650px)" }); //yellow
  const dispatch = useDispatch();
  const { Row } = useSelector((state) => state.showBet);
  const event = {
    codigo: codigo,
    idAccordion: idAccordion,
    accordionStatement: nameAccordion,
    statement: stateunBet,
    multiplicador: multiplied,
    codeBet: codeBet,
    comienza: `${date} ${time}`,
    n_bet: `${idAccordion}. ${numbet}`,
    titulo,
    subTitulo,
    inCupon: true,
  };
  const [bet, setBet] = useState(event);

  const refBet = useRef(null);
  const onClickMultiplied = () => {
    if(Row.map(e=>e.codeBet).flat().includes(codeBet)){
      return removerRowInRedux(codeBet, dispatch, Row);
    }
    //* Si la apuesta esta en el mismo acordion que una apuesta seleccionada del 
    //*  mismo codigo, no agregar al redux
    if(Row.map(e=>e.codigo).flat().includes(codigo) && NewArray(Row).map(b=>b.bets.map(b=>b.idAccordion)).flat().includes(idAccordion)){
      return ToastsStore.error("No puedes seleccionar esa apuesta", 3710);
    }
    AddinRedux(dispatch, Row, multiplied, event);
  };
  
  return (
    <>
      <ContainerBet
        data-tip={`${stateunBet}  : :  x${multiplied}`}
        onClick={onClickMultiplied}
        style={{
          width: `${!isTabletOrMobile ? "100%" : "32%"}
          `
        }}
        betSelect = {Row.map((e) => e.codeBet).flat().includes(codeBet)}
        className="containerBet"
        ref={refBet}
      >
        <ReactTooltip effect="solid" />
        <div className="stateUnBet">
          <p>
            {stateunBet}
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

      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_LEFT}
      />
    </>
  );
};

const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  height: 50px;
  background-color: ${props=> props.betSelect? "green": "#37474f"};
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
    border: none;
    background-color: purple;
    .multipliedBet {
    }
  }
`;
