import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CloseModal } from '../action/BetInCartilla';

export const Modal = ({classNameforBackgrounds, modalForCartilla, children, state, ChangeState, titulo='Alerta', background, showHeader, showOverlay, positionModal, padding, positionbtnclose, putWidth}) => {
    const modalref = useRef(null);

    const dispatch = useDispatch();
    const {openCartilla} = useSelector((state) => state.ui);
    const handleClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            if(openCartilla) return dispatch(CloseModal());
            modalref.current.onclick = ChangeState(false);
        }
    }   
    return (
      <>    
        {state &&
        <Overlay className={'modal-overlay'} showOverlay={showOverlay} positionModal={positionModal} ref={modalref} onClick={handleClick}>
            <ContenedorModal padding={padding} positionbtnclose={positionbtnclose} putWith={putWidth} className={classNameforBackgrounds? classNameforBackgrounds : 'bg-white'}>
                {showHeader &&
                <EncabezadoModal>
                    <h3>{titulo}</h3>
                </EncabezadoModal>  
                }

                <BotonCerrar onClick={()=>ChangeState(false)} positionbtnclose={positionbtnclose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </BotonCerrar>
                {children}
            </ContenedorModal>
        </Overlay>
        }
      </>
  )
}


const Overlay = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
background: ${props=>props.showOverlay ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0)'} ;
overflow-y: auto;

padding: 40px;

display: flex;
align-items: ${props=>props.positionModal ? props.positionModal : 'center'};
justify-content: center;
`
const ContenedorModal= styled.div`
width: ${props=>props.putWith ? props.putWith : '500px'};
min-height: 100px;
// background: ${props=>props.background ? props.background : '#fff'};
position: relative;
border-radius: 5px;

${props=>props.positionbtnclose? 'margin: 0 50%;': ''}

box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: ${props=> props.padding? props.padding: '20px'};
`

const EncabezadoModal= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
border-radius: 1px solid #E8E8E8;

h3{
    font-weight: 500;
    font-size: 16px;
    color: #1766DC
}
`
const BotonCerrar= styled.button`
    position: absolute;
    top: ${props=> props.positionbtnclose? props.positionbtnclose: '15px'};
    right: ${props=> props.positionbtnclose? '50px': '15px'};;
    background: none;
    ${props=>props.positionbtnclose? 'background: #f2f2f2;': ''}
    
    width:     ${props=>props.positionbtnclose? '45px': '30px'};
    height: ${props=>props.positionbtnclose? '45px': '30px'};
    border: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: ${props=>props.positionbtnclose? '50%': '5px'};
    color: #1766DC;

    &:hover{
        background: #f2f2f2;
    }
    svg{
        ${props=>props.positionbtnclose? 'width: 60%; height: 60%; color: black' : '5px'}
    }
    `

