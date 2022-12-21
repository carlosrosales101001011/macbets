import React, { useEffect, useState } from 'react'
import { MACBetsBody } from './components/MACBetsBody'
import { NavBar } from './components/makeNavBar/NavBar'
import ReactTooltip from 'react-tooltip';
import {PopupAlert} from './components/PopupAlert';
import { ModalWTransition } from './components/makeModalWTransition/ModalWTransition';
import { CartillaLateral } from './components/CartillaLateral';
import styled from 'styled-components';
import { SectionFiltros } from './components/SectionFiltros';

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
  grid-template-columns: 20% 50%;
  margin: 1px;
`