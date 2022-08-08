import React, { useRef } from 'react'
import { ContentOFoptionsBTN } from './ContentOFoptionsBTN'

export const MenuContent = ({clickClose}) => {
  const useRef = useRef(null)
  const aparecerModal = () => {
    
  }
  return (
    <div className={'blank_menuContent'}>
        <ContentOFoptionsBTN nameBTN={
          <>
            <span className={'linex'}>
              <div className={'photoUser'}>
                  <p>C</p>
              </div>
              <div className="nameUser_MACS">
                  <span><p>Carlos Rosales</p></span>
                  <span><p>tienes <b>160 MACS</b></p></span>
              </div>
            </span>
          </>
        } clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'My notifications'} clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'Agregar mas MACS'} clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'Depositar'} clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'Ayuda'} clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'Ajustes'} clickClose={ clickClose }/>
        <ContentOFoptionsBTN nameBTN={'Salir'} clickClose={ clickClose }/>
    </div>
  )
}
