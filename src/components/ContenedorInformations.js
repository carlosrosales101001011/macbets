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
    margin-top: 1.3rem;
    line-height: 1rem;
`
const InfQ = styled.span`
    font-size: 90%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 0.5rem;
    text-decoration: underline;
`
const InfA = styled.span`
    font-size: 80%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 0.5rem;
`