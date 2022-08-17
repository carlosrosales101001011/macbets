import React, { useEffect, useState } from 'react'
import { Cartilla } from './components/Cartilla'
import { MACBetsBody } from './components/MACBetsBody'
import { NavBar } from './components/makeNavBar/NavBar'
import ReactTooltip from 'react-tooltip';
import {PopupAlert} from './components/PopupAlert';
import { ModalWTransition } from './components/makeModalWTransition/ModalWTransition';
import { CartillaLateral } from './components/CartillaLateral';
import styled from 'styled-components';
import { SectionFiltros } from './components/SectionFiltros';
import { TabBar } from './components/makeNavBar/TabBar';

export const App = () => {
  const [stateModal, setStateModal] = useState(true);
  return (
	  <>
      <NavBar />
      <ContainerBody>
        <SectionFiltros/>
        <MACBetsBody/>
        <CartillaLateral/>
      </ContainerBody>
      {/* <TabBar/> */}
      {/* <Cartilla stateModal1={false}/> */}
    </>
  )
}
const ContainerBody= styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 5px;
`