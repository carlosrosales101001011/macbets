import React, { useState } from 'react';
import { Modal } from '../Modal';
import styled from "styled-components";
// import { useDispatch } from 'react-redux';
// import { uiOpenMenu } from '../../action/ui';

export const ElementBarr = ({iconDropdown, containerDropdown, OptionalResponsive, ForItemUsuario, title}) => {
    const [dropdown, setDropdown] = useState(false);
    const [stateModal, setStateModal] = useState(false);
    // const dispatch= useDispatch();
    // const OpenMenu=()=>dispatch(uiOpenMenu())
    // const [MenuBarResponsive, setMenuBarResponsive] = useState(false)
  return (
    <div 
        className='ElementBarr_right_options_option' 
        onClick={ForItemUsuario}
        onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=>setDropdown(false)}
        
        > {/* Elemento de la barra */}
        {
            OptionalResponsive?
            <>
            <div onClick={()=>setStateModal(true)} className='container-ElementBarr_right_options_option'> {/* Button */}
                {iconDropdown}
            </div>
            <Modal
                state={stateModal}
                ChangeState={setStateModal}
                titulo= {title}
                showHeader={true}
                showOverlay={true}
                positionModal="start"
                
            >
                <Contenido className="cartilla">
                    {OptionalResponsive}
                </Contenido> 
            </Modal>
            </>
            :
            <div className='container-ElementBarr_right_options_option'> {/* Button */}
                {iconDropdown}
            </div>
        }
        
        {
            //Si hay algo en containerDropdown y esta en true dropdown y esta en false ForItemUsuario
            (containerDropdown&&dropdown) &&
        <>
        <div className='container-dropdown'>
            <div className='content-dropdown'>
            {containerDropdown}
            </div>
        </div>
        </>
        }


        {/* {
        //Si esta en true el estado MenuBarResponsive aparece el contenido de ForItemUsuario
        MenuBarResponsive&& ForItemUsuario
        } */}
    </div>
  )
}



const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
