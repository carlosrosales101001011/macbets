import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { uiCloseMenu } from "../../action/ui";
import ReactTooltip from 'react-tooltip';

export const MenuBarResponsive = () => {
  const dispatch = useDispatch()

  const closeMenu = ()=> dispatch(uiCloseMenu())
  const nameTar = 'loremconchatumadoasdfadsfasdfadf asd asdasdsas'

  return (
    <Overlay onClick={closeMenu}>
        <ContenedorMenu>
            {/* abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW */}
            {/* Perfil, notificaciones, wallet, configuraciones, mis cartillas, salir */}
            <AoptionPrincipal>
              <a href={'.'}>
                <div className={'containerAvatar'}>
                  <img className='avatarPerfil' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg' alt='icon-menu'/>
                </div>
                <div className='avatarName'>
                  <div data-tip={nameTar} className= 'NameTar'>{nameTar} <ReactTooltip  /> </div>
                  <div>Tienes 0 MACS</div>
                </div>
              </a>
            </AoptionPrincipal>
            <Aoption>
              <a href={'notificaciones'}>
                <div className='iconOption icon-bell'></div>
                Notificaciones
              </a>
              <a href={'mis-cartillas'}>
                <div className='iconOption icon-misCartillas'></div>
                Mis Cartillas
              </a>
              <a href={'historial'}>
                <div className='iconOption icon-historial'></div>
                Historial de movimientos
              </a>
            </Aoption>
            <Aoption>
              <a href={'depositar'}>
                <div className='iconOption icon-deposit'></div>
                Depositar
              </a>
              <a href={'retirar'}>
                <div className='iconOption icon-retirar'></div>
                Retirar
              </a>
            </Aoption>
            <Aoption>
              <a href={'allBets'}>
                <div className='iconOption icon-house'></div>
                Toda las apuestas
              </a>
            </Aoption>
            <Aoption>
              <a href={'config'}>
                <div className='iconOption icon-config'></div>
                Ajustes
              </a>
              <a href={'help'}>
                <div className='iconOption icon-help'></div>
                Ayuda
              </a>
              <a href={'Idiom'}>
                <div className='iconOption icon-languages'></div>
                Idioma
              </a>
              <a href={'Contact'}>
                <div className='iconOption icon-headPhone'></div>
                Contacto
              </a>
              {/* <a href={'config'}>Sobre nosotros</a> */}
            </Aoption>
            <Aoption>
              <a href={'modoNocturnoActivado'}>
                <div className='iconOption icon-moon'></div>
                Modo Nocturno
              </a>
            </Aoption>
            <Aoption>  
              <a href={'Exit'}>
                <div className='iconOption icon-exit'></div>
                Salir
              </a>
            </Aoption>
        </ContenedorMenu>
    </Overlay>
  )
}
const Overlay= styled.div`
  width: 110%;
  height: 110%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${'rgba(0, 0, 0, .7)'};
  padding: 0 0 3rem 0;
  

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const ContenedorMenu = styled.div`
width: auto;
height: 100%;
background: #fff;
position: relative;
padding: 10px;
margin-right: 9rem;
padding-bottom: 5rem;
word-break: break-all;
// ${props=>props.positionbtnclose? 'margin: 0 50%;': ''}
overflow-y: auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const AoptionPrincipal = styled.div`
a{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Roboto;
  padding: 1rem 0;
  .containerAvatar{
    padding: 10px 25px 0 0;
    width: 50%;
    height: 100%;
    .avatarPerfil{
      width: 100%;
      height: 100%;
    }
  }
  div:last-child{
    padding: 0;
    .NameTar{
      background-color: red;
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
  }

  color: #000;
}
  
`
const Aoption = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-top: 1px #d1d7dc solid;
padding: 1rem 0;
a{
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  color: #000;
  width: 100%;
  height: auto;
  .iconOption{
    width: 2rem;
    height: 2rem;
    margin-right: 1.5rem;
  }
  &:hover{
    background-color: #e5e5e5;
  }
}
`