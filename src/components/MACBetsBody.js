import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Cartilla } from './Cartilla';
import { ListCardApuesta } from './makeapuestas/ListCardApuesta';
import { MenuBarResponsive } from './makeNavBar/MenuBarResponsive';
import { ModeloApuesta } from './ModeloApuesta';
import styled from 'styled-components';
import { CartillaLateral } from './CartillaLateral';


export const MACBetsBody = () => {
  
    const {openCartilla, isOpenMenu} = useSelector(state => state.ui)

    const [cartilla, setCartilla] = useState(false);
    useEffect(() => {
      setCartilla(openCartilla);
    }, [openCartilla])
    let packApuestas = {
      bet1: new ModeloApuesta('21/09/2023', '12:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'POLIK9')
                .addAccordionName(1, 'General', 
                                    [{code: 'OCMmyOiS', statement: 'Sporting cristal', multiplied: 1.4}, 
                                      {code: 'nKDPVYoQ', statement: 'Empate', multiplied: 1.4}, 
                                      {code: 'DCUxpcpr', statement: 'Universitarios', multiplied: 2.3}])
                .addAccordionName(2, 'Nro de goles/1er Tiempo', [
                                      {code: 'dCcZHmll', statement: 'mas de 1.5', multiplied: 1.4}, 
                                      {code: 'FNhkeZvC', statement: 'menos de 1.5', multiplied: 3.2}])
                .addAccordionName(3, 'Doble Oportunidad', [
                                      {code: 'eWVjQQYv', statement: 'Sporting cristal o Empate', multiplied: 1.4}, 
                                      {code: 'JCpksFni', statement: 'Universitario o Sporting cristal', multiplied: 2.3}, 
                                      {code: 'QOBdTkek', statement: 'Universitario o Empate', multiplied: 2.3}])
                .addAccordionName(4, 'Apuesta sin empate', [
                                      {code: 'ybguDrKo', statement: 'Sporting cristal', multiplied: 1.4}, 
                                      {code: 'RvqpyRLN', statement: 'Universitario', multiplied: 3.2}]),
      bet2: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Peru vs Argentina h', null, 'KILOO0')
                .addAccordionName(1, 'Z', [
                                            {code: 'mNpmFASP', statement: 'a', multiplied: 1.4}, 
                                            {code: 'VyFzvobM', statement: 'aa', multiplied: 2.3}, 
                                            {code: 'OuBpjQXk', statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'CSlMAazJ', statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'DLAbcTXg', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'SoQlSXxh', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'epdZuMia', statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'NMxLcCJM', statement: 'b', multiplied: 1.4}, 
                                            {code: 'xNdSSkDA', statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'uhgTtTEO', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'lRSNyOBh', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'azFLlwYD', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'qfxDCwiF', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'NzEvBfpg', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'GNmfXSGG', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'uaDSNeOW', statement: 'bbbb', multiplied: 4.1}]),
      bet3: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Sporting cristal vs Universitario ho', null, 'KILO21')
                .addAccordionName(1, 'Z', [
                                            {code: 'EKoBeTUW', statement: 'Clwb Pêl Droed Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch Football Club', multiplied: 1.4}, 
                                            {code: 'BoLurejk', statement: 'aa', multiplied: 2.3}, 
                                            {code: 'LJkHxrSB', statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'gYDunHLx', statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'OwljVnUk', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'JNZWaBGO', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'DqodLHHH', statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'jvzqsqRD', statement: 'b', multiplied: 1.4}, 
                                            {code: 'mWPHBcYb', statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'vtmskAhy', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'plyllluV', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'qmqQBfiB', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'sTxLpneI', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'oQKDblVb', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'fwopjCCZ', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'VFNBksSv', statement: 'bbbb', multiplied: 4.1}]),
      bet4: new ModeloApuesta('21/09/2022', '18:00:00', 'champions', 'Sporting cristal vs Universitario hola', null, 'KILO34')
                .addAccordionName(1, 'Z', [
                                            {code: 'NChcTpkJ', statement: 'a', multiplied: 1.4}, 
                                            {code: 'dEptDyOd', statement: 'aa', multiplied: 2.3}, 
                                            {code: 'pmLbHrTD', statement: 'aaa', multiplied: 3.2}, 
                                            {code: 'CoSUCjmV', statement: 'aaaa', multiplied: 4.1}, 
                                            {code: 'HaIAFLVU', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'hgvWfaYJ', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'oCkxVwFc', statement: 'bbbb', multiplied: 4.1}])
                .addAccordionName(2, 'Y', [
                                            {code: 'IddVBYYl', statement: 'b', multiplied: 1.4}, 
                                            {code: 'XVJjCYab', statement: 'bbb', multiplied: 3.2}, 
                                            {code: 'JuVsrUni', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'naxKKoLy', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'sMBhbwXU', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'EzVxSGUS', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'JMlIIFxI', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'wlslsdAz', statement: 'bbbb', multiplied: 4.1}, 
                                            {code: 'MlldxSRq', statement: 'bbbb', multiplied: 4.1}]),
      bet5: new ModeloApuesta('21/09/2023', '12:00:00', 'champions', 'Sporting cristal vs Universitario', null, 'POLIK9')
                .addAccordionName(1, 'General', [
                                            {code: 'wXvRuaeb', statement: 'Sporting cristal', multiplied: 1.4}, 
                                            {code: 'chdXKQfg', statement: 'Universitarios', multiplied: 2.3}])
                .addAccordionName(2, 'Nro de goles/1er Tiempo', [
                                            {code: 'jizdCImi', statement: 'mas de 1.5', multiplied: 1.4}, 
                                            {code: 'BNeuUkoK', statement: 'menos de 1.5', multiplied: 3.2}])
                .addAccordionName(3, 'Doble Oportunidad', [
                                            {code: 'pfBOYaTg', statement: 'Sporting cristal o Empate', multiplied: 1.4}, 
                                            {code: 'ZhgRJGMT', statement: 'Universitario o Sporting cristal', multiplied: 2.3}, 
                                            {code: 'tJIfcQyQ', statement: 'Universitario o Empate', multiplied: 2.3}])
                .addAccordionName(4, 'Apuesta sin empate', [
                                            {code: 'FVwCEFBK', statement: 'Sporting cristal', multiplied: 1.4}, 
                                            {code: 'PYMycQvU', statement: 'Universitario', multiplied: 3.2}]),
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
              codigobet={aps.codigo}/>
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