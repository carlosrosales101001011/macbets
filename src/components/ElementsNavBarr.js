import React, { useState } from 'react'
import 'animate.css';
import styled from 'styled-components';


export const ElementsNavBarr = ({classDIV, classSPAN, btnOpenDropdown, boxdropdown, widthbox='auto', heightbox='auto', moveRight, responsiveApp}) => {

    const [dropdown, setDropdown] = useState(false)

    const handleDropdownOpen = (e) => {
        console.log('estoy en el contenido dropdown');
    }

  return (
    <>
    {/* ${responsiveApp ? 'visibleSOLODesktop': 'visibleSOLOTablets'} 
      desaparecer el menubar en desktop pero aparecer en tablet*/}
    { responsiveApp ? 
    (<div className={`container_list-menu `} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
          <div className={`${classDIV} btn_dropdown`}>
              {/* <p>Mi cartilla actual</p> */}
              {btnOpenDropdown}
          </div>
          {boxdropdown && dropdown && (<BoxDropdown onClick={()=>setDropdown(false)} moveRight={moveRight} widthbox={widthbox} heightbox={heightbox}  className={`content_${classDIV} content_dropdown content_dropdown--active`}>
              {boxdropdown}
          </BoxDropdown>)
          }
          
    </div>):
    (<div className={`container_list-menu container_list-menu---tel`} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
          <div className={`${classDIV} btn_dropdown`}>
              {/* <p>Mi cartilla actual</p> */}
              {btnOpenDropdown}
          </div>
          {boxdropdown && dropdown && (<BoxDropdown onClick={()=>setDropdown(false)} moveRight={moveRight} widthbox={widthbox} heightbox={heightbox}  className={`content_${classDIV} content_dropdown content_dropdown--active`}>
              {boxdropdown}
          </BoxDropdown>)
          }
          
    </div>)}
    </>
  )
}
const BoxDropdown= styled.div`
  width: ${props=>props.widthbox};
  height: ${props=>props.heightbox};
  right: ${props=>props.moveRight};`