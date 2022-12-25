import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Draggable from "react-draggable";
import { SvgIcons } from './svgsJS/SvgIcons';
import { useDispatch, useSelector } from 'react-redux';
import { ResetCartilla } from '../action/BetInCartilla';
import { removeRowsInRedux, removerRowInRedux } from '../helpers/metodosReduxAddRemove';
import { NewArray } from '../helpers/ArrayCodexCode';
import { ContentApuesta } from './ContentApuesta';
import { EmptyHtml } from './EmptyHtml';
import { ContenedorInformations } from './ContenedorInformations';
import { Range } from './makeRangeforCartilla/Range';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { useRef } from 'react';

export const CartillaDifentedos = () => {

    const refcupon = useRef(null)
    const [cuponOpen, setcuponOpen] = useState(false);
    const { Row, maxRow, maxRowBool } = useSelector((state) => state.showBet);
    const dispatch= useDispatch();
    const ClickReset=()=> dispatch(ResetCartilla());
    const Clickcupon = (e)=>{ 
        if (e.target.classList.contains("p--cursor-draggable")||e.target.classList.contains('strong--cursor-draggable')) {return}
        console.log("desplegar");
      setcuponOpen(!cuponOpen);
    }
    const clickDeleteRow =(index)=>{
        removerRowInRedux(index, dispatch, Row)
    }
    const clickDeleteRows = (codeBet)=>{
      removeRowsInRedux(dispatch, Row, codeBet)
    }
    const options = [
      { value: 'simple', label: 'Simple' },
      { value: 'combinada', label: 'Combinada' },
      { value: 'sistema', label: 'Sistema' },
    ];
    const styleSumaArr = ["4 rem", "35 rem", "15 rem"];
    const reducer = (accumulator, curr) => accumulator + curr;
    const styleRepCupon={padding: '5px', backgroundColor: '#DFDFDF'}
  




    
  const [state, setstate] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  })

  const onStart = () => {
    setstate({activeDrags: ++state.activeDrags});
  };
  const onStop = (e) => {
    // console.log(refcupon.current.style.transform==='translate(342px, 0px)');
    // console.log(refcupon.current.style.transform==='translate(342px, 0px)'?true: false);
    setstate({activeDrags: --state.activeDrags});
  };
  const dragHandlers = {onStart: onStart, onStop: onStop};
  return (
      <CouponBet cuponOpenp={cuponOpen}>
        <Draggable axis="x" handle="strong" bounds={'parent'} {...dragHandlers}>
            <div className="box no-cursor">
                <div className='cartilla container-slider'  onClick={Clickcupon}>
                    <p>Cupon de apuesta</p>
                    <strong className="cursor strong--cursor-draggable"><p className='p--cursor-draggable'>Presiona y arrastra</p></strong>
                    <SvgIcons arrow stroke={'white'} width={25} />
                </div>
                <div className='Contenido--Coupon'>
              <div className='container-header--Coupon' >
                  
              <div onClick={ClickReset} className="btnVaciarCupon">Vaciar cupon</div>
              </div>
              <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT}/>
              <div className='container-body--Coupon' style={{overflow:'auto', ...{height: styleSumaArr[1].replace(' ', '')}, ...styleRepCupon}}>
              {
                  Row.length?
                  NewArray(Row).map((itema, index)=>{
                    //console.log(itema.bets);
                    return (<ContentApuesta
                                  key={index} 
                                  itema={itema}
                                  codeBet={itema.codeBet} 
                                  titulo={itema.titulo}
                                  subTitulo={itema.subTitulo}
                                  bets={itema.bets} 
                                  clickDeleteRow={clickDeleteRow} 
                                  clickDeleteRows={clickDeleteRows}
                                  />)
                  })
                  : <EmptyHtml msg={"No hay apuesta seleccionada"} fontSize={"20px"}/>
                  }
              </div>
              <div className='container-body--Coupon' style={{...{height: styleSumaArr[2].replace(' ', '')}, ...styleRepCupon}}>
              { maxRowBool && ToastsStore.error(`¡Alto!, el numero de filas maxima es de ${maxRow}`, 3700)}
              <ContenedorInformations/>
              <Range btnvalue={10}/>
              <Range btnvalue={20}/>
              <Range btnvalue={30}/>
              <Range btnvalue={40}/>
              <Range btnvalue={50}/>
              <Range btnvalue={60}/>
              <Range btnvalue={70}/>
              <Range btnvalue={80}/>
              <Range btnvalue={90}/>
              <Range btnvalue={100}/>
              </div>
            </div>
            </div>
        </Draggable>
    </CouponBet>
  )
}
const CouponBet= styled.div`
position: fixed;
bottom: 0;
width: 100%;
height: 0;
background-color: red;
    .strong--cursor-draggable:hover{
        cursor: w-resize;
    }
    .box {
        position: absolute;
        bottom: 0;
        background: yellow;
        border-radius: 3px;
        width: 400px;
        height: auto;
        margin: 0px 40px 0px 0px;
        float: left;
        strong {
            width: 100px;
            background: green;
            display: block;
            margin: 10px;
            padding: 3px 5px;
            text-align: center;
          }
      }

      .cartilla{
        background-color: #050415; //**
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 1.8rem 1.5rem;
        p{
          font-size: 13px;
          color: white;
          font-family: 'Raleway', sans-serif;
        }
      }
      .Contenido--Coupon{
        background-color: #d6d6d6;
        height: 0;
        .btnVaciarCupon{
        background-color: #DFDFDF;
        }
      }
      ${props=>props.cuponOpenp&& `
      .box{
        bottom: 510px;
      }
      `};
`