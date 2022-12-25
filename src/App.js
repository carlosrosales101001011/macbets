import React, { useEffect, useState } from 'react'
import { MACBetsBody } from './components/MACBetsBody'
import { NavBar } from './components/makeNavBar/NavBar'
import styled from 'styled-components';
import { SectionFiltros } from './components/SectionFiltros';
import { SectionPublicity } from './components/SectionPublicity';
import { CartillaDifentedos } from './components/CartillaDifentedos';
import { ContainerFooter } from './components/ContainerFooter';

export const App = () => {
  const [stateModal, setStateModal] = useState(true);
  return (
	  <>
      <NavBar />
      <ContainerBody>
        <SectionFiltros/>
        <MACBetsBody/>
        <SectionPublicity/>
      </ContainerBody>
      <ContainerFooter/>
        <CartillaDifentedos/>
        {/* <CartillaLateral/> */}
      {/* <TabBar/> */}
      {/* <Cartilla stateModal1={false}/> */}
    </>
  )
}
const ContainerBody= styled.div`
  display: flex;
  justify-content: center;
`