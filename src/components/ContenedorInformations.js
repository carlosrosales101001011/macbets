import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

export const ContenedorInformations = () => {

    const {maxTime, multipliers, amount, EarningsMACS} = useSelector((state) => state.showBet);
  return (
      <ContenidoInformations>
      <p> <InfQ>Multiplicador Total:</InfQ>  <InfA>x{multipliers}</InfA></p>
      <p> <InfQ>Tiempo maximo:</InfQ>  <InfA>{maxTime}</InfA></p>
      <p> <InfQ>Ganancia total ({amount}MACS x {multipliers}):</InfQ>  <InfA>{EarningsMACS} MACS</InfA></p>
      </ContenidoInformations>
  )
}
const ContenidoInformations = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    // padding: 7px;
`
const InfQ = styled.span`
    font-size: 77%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: underline;
    background-color: yellow;
`
const InfA = styled.span`
    font-size: 80%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 0.5rem;
`