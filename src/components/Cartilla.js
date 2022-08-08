import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './index.css';
import styled from "styled-components";
import { Modal } from "./Modal";

import { TrsCartilla } from "./TrsCartilla";
import { Range } from "./makeRangeforCartilla/Range";
import {ResetCartilla } from "../action/BetInCartilla";
import { ErrorsInLoadRow } from "./ErrorsInLoadRow";
import { ContenedorInformations } from "./ContenedorInformations";

export const Cartilla = ({ stateModal1, setstateModal1 }) => {
  

  const { Row, maxRowBool } = useSelector((state) => state.showBet);
  const dispatch= useDispatch();
  const ClickReset=()=> dispatch(ResetCartilla());
  // if(Row.length >= 3) return dispatch(DeleteLastBet(true))
  // else dispatch(DeleteLastBet(false));
  return (
    <>
    <Modal
      state={stateModal1}
      ChangeState={setstateModal1}
      titulo="Hola"
      mostrarHeader={false}
      showOverlay={true}
      positionModal="start"
      padding="5px"
      positionbtnclose="120%"
    >
      <Contenido className="cartilla">
        <div className="btn_reset">
          <span onClick={ClickReset}>RESET</span>
        </div>
        <table id="lista-apuestas">
          <thead>
            <tr>
              <th>codigo</th>
              <th>Comienza</th>
              <th>Nº de apuesta</th>
              <th>multiplicador</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Row.map((item, index) => (
              <TrsCartilla key={index} id={index} {...item} />
            ))}
            
          </tbody>
        </table>

        { maxRowBool && <ErrorsInLoadRow/> }
        <ContenedorInformations/>
        <div className={"footerCartilla"}>
          <Range btnvalue={10}/>
          <Range btnvalue={20}/>
          <Range btnvalue={30}/>
          <Range btnvalue={40}/>
          <Range btnvalue={50}/>
          <Range btnvalue={60}/>
          <Range btnvalue={70}/>
          <Range btnvalue={80}/>
          <Range btnvalue={90}/>
          <Range btnvalue={100}/>

        </div>
      </Contenido>
    </Modal>
    </>
  );
};

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
