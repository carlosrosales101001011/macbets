import React, { useRef } from "react";
import { ContentOFoptionsBTN } from "./ContentOFoptionsBTN";
import { MenuContent } from "./MenuContent";

export const IconMenu = () => {
  const OverMenuref= useRef(null)
  const ClickClose = (e)=>{
    if (e.target.classList.contains('main-navigation')) {
      OverMenuref.current.click()
    }
    if (e.target.classList.contains('closeOver')) {
      OverMenuref.current.click()
    }
  }

  return (
    <>
      {/* <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className='hamburger'/>
          <span className="" */}
    <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
<label htmlFor="page-nav-toggle" ref={OverMenuref}>
  <svg className="icon--menu-toggle" viewBox="0 0 60 30">
    <g className="icon-group">
      <g className="icon--menu">
        <path d="M 6 0 L 54 0" />
        <path d="M 6 15 L 54 15" />
        <path d="M 6 30 L 54 30" />
      </g>
      <g className="icon--close">
        <path d="M 15 0 L 45 30" />
        <path d="M 15 30 L 45 0" />
      </g>
    </g>
  </svg>
</label>

<nav className="main-navigation"  onClick={ClickClose}>
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
        } onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'My notifications'} onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'Agregar mas MACS'} onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'Depositar'} onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'Ayuda'} onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'Ajustes'} onClick={ ClickClose }/>
        <ContentOFoptionsBTN nameBTN={'Salir'} onClick={ ClickClose }/>
    </div>
</nav>

    </>
  );
};
