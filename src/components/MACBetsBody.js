import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListCardApuesta } from './makeapuestas/ListCardApuesta';
import { MenuBarResponsive } from './makeNavBar/MenuBarResponsive';
import { ModeloApuesta } from './ModeloApuesta';
import styled from 'styled-components';
import { CartillaLateral } from './CartillaLateral';
import { ResaltarBet } from '../action/BetInCartilla';


export const MACBetsBody = () => {
  
    const {openCartilla, isOpenMenu} = useSelector(state => state.ui)

    const [cartilla, setCartilla] = useState(false);
    const { Row } = useSelector((state) => state.showBet);
    // console.log(Row);/
    

    useEffect(() => {
      setCartilla(openCartilla);
    }, [openCartilla])

    let packApuestas = {
      bet1: new ModeloApuesta('21/09/2023', '12:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'POLIK9')
                .addAccordionName(1, 'General', [
                                      {code: 'OCMmyOiS', inCupon: true, statement: 'Sporting cristal', multiplied: 1.4}, 
                                      {code: 'nKDPVYoQ', inCupon: false, statement: 'Empate', multiplied: 1.4}, 
                                      {code: 'DCUxpcpr', inCupon: false, statement: 'Universitarios', multiplied: 2.3}])
                .addAccordionName(2, 'Nro de goles/1er Tiempo', [
                                      {code: 'dCcZHmll', inCupon: false, statement: 'mas de 1.5', multiplied: 1.4}, 
                                      {code: 'FNhkeZvC', inCupon: false, statement: 'menos de 1.5', multiplied: 3.2}])
                .addAccordionName(3, 'Doble Oportunidad', [
                                      {code: 'eWVjQQYv', inCupon: false, statement: 'Sporting cristal o Empate', multiplied: 1.4}, 
                                      {code: 'JCpksFni', inCupon: false, statement: 'Universitario o Sporting cristal', multiplied: 2.3}, 
                                      {code: 'QOBdTkek', inCupon: false, statement: 'Universitario o Empate', multiplied: 2.3}])
                .addAccordionName(4, 'Apuesta sin empate', [
                                      {code: 'ybguDrKo', inCupon: false, statement: 'Sporting cristal', multiplied: 1.4}, 
                                      {code: 'RvqpyRLN', inCupon: false, statement: 'Universitario', multiplied: 3.2}]),
      bet2: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Peru vs Argentina h', null, 'KILOO0')
                .addAccordionName(1, 'Z', [
                                            {code: 'mNpmFASP', inCupon: false, statement: 'a', multiplied: 1.4}, 
                                            {code: 'VyFzvobM', inCupon: false, statement: 'aa', multiplied: 2.3}, 
                                            {code: 'OuBpjQXk', inCupon: false, statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'CSlMAazJ', inCupon: false, statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'DLAbcTXg', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'SoQlSXxh', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'epdZuMia', inCupon: false, statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'NMxLcCJM', inCupon: false, statement: 'b', multiplied: 1.4}, 
                                            {code: 'xNdSSkDA', inCupon: false, statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'uhgTtTEO', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'lRSNyOBh', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'azFLlwYD', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'qfxDCwiF', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'NzEvBfpg', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'GNmfXSGG', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'uaDSNeOW', inCupon: false, statement: 'bbbb', multiplied: 4.1}]),
      bet3: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Sporting cristal vs Universitario ho', null, 'KILO21')
                .addAccordionName(1, 'Z', [
                                            {code: 'EKoBeTUW', inCupon: false, statement: 'Clwb Pêl Droed Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch Football Club', multiplied: 1.4}, 
                                            {code: 'BoLurejk', inCupon: false, statement: 'aa', multiplied: 2.3}, 
                                            {code: 'LJkHxrSB', inCupon: false, statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'gYDunHLx', inCupon: false, statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'OwljVnUk', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'JNZWaBGO', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'DqodLHHH', inCupon: false, statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'jvzqsqRD', inCupon: false, statement: 'b', multiplied: 1.4}, 
                                            {code: 'mWPHBcYb', inCupon: false, statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'vtmskAhy', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'plyllluV', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'qmqQBfiB', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'sTxLpneI', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'oQKDblVb', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'fwopjCCZ', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'VFNBksSv', inCupon: false, statement: 'bbbb', multiplied: 4.1}]),
      bet4: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Sporting cristal vs Universitario hola', null, 'KILO34')
                .addAccordionName(1, 'Z', [
                                            {code: 'NChcTpkJ', inCupon: false, statement: 'a', multiplied: 1.4}, 
                                            {code: 'dEptDyOd', inCupon: false, statement: 'aa', multiplied: 2.3}, 
                                            {code: 'pmLbHrTD', inCupon: false, statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'CoSUCjmV', inCupon: false, statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'HaIAFLVU', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'hgvWfaYJ', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'oCkxVwFc', inCupon: false, statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'IddVBYYl', inCupon: false, statement: 'b', multiplied: 1.4}, 
                                            {code: 'XVJjCYab', inCupon: false, statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'JuVsrUni', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'naxKKoLy', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'sMBhbwXU', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'EzVxSGUS', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'JMlIIFxI', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'wlslsdAz', inCupon: false, statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'MlldxSRq', inCupon: false, statement: 'bbbb', multiplied: 4.1}]),
      bet5: new ModeloApuesta('21/09/2023', '12:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'POLIK9')
                .addAccordionName(1, 'General', [
                                            {code: 'wXvRuaeb', inCupon: false, statement: 'Sporting cristal', multiplied: 1.4}, 
                                            {code: 'chdXKQfg', inCupon: false, statement: 'Universitarios', multiplied: 2.3}])
                .addAccordionName(2, 'Nro de goles/1er Tiempo', [
                                            {code: 'jizdCImi', inCupon: false, statement: 'mas de 1.5', multiplied: 1.4}, 
                                            {code: 'BNeuUkoK', inCupon: false, statement: 'menos de 1.5', multiplied: 3.2}])
                .addAccordionName(3, 'Doble Oportunidad', [
                                            {code: 'pfBOYaTg', inCupon: false, statement: 'Sporting cristal o Empate', multiplied: 1.4}, 
                                            {code: 'ZhgRJGMT', inCupon: false, statement: 'Universitario o Sporting cristal', multiplied: 2.3}, 
                                            {code: 'tJIfcQyQ', inCupon: false, statement: 'Universitario o Empate', multiplied: 2.3}])
                .addAccordionName(4, 'Apuesta sin empate', [
                                            {code: 'FVwCEFBK', inCupon: false, statement: 'Sporting cristal', multiplied: 1.4}, 
                                            {code: 'PYMycQvU', inCupon: false, statement: 'Universitario', multiplied: 3.2}]),
      }
  return (
    <>
    <BodyMacBets>
      {
        Object.values(packApuestas).map((aps, index)=> (
          <ListCardApuesta 
              key={index}
              acordiones={aps.accordionBet}
              titulo={aps.titulo}
              subtitulo={aps.subtitulo}
              fecha={aps.fecha}
              hora={aps.hora}
              codigobet={aps.codigo}

          />
        ))
      }
    </BodyMacBets>
    
    {isOpenMenu &&
    <MenuBarResponsive/>
    }
    {/* <Cartilla stateModal1={cartilla} setstateModal1={setCartilla}/> */}
  </>
  )
}
const BodyMacBets = styled.div`
`