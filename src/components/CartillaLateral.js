import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components'
import { DeleteRows, EventStartRemoveBetInCartilla, EventUpdateProductMultiplieds, ResaltarBet, ResetCartilla, UpdateEarningsMACS } from '../action/BetInCartilla';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import { NewArray } from '../helpers/ArrayCodexCode';
import { ErrorsInLoadRow } from './ErrorsInLoadRow';
import { ContenedorInformations } from './ContenedorInformations';
import { Range } from './makeRangeforCartilla/Range';
import { ContentApuesta } from './ContentApuesta';
import { EmptyHtml } from './EmptyHtml';
import Select from 'react-select';
import { removeRowsInRedux, removerRowInRedux } from '../helpers/metodosReduxAddRemove';
import { SvgIcons } from './svgsJS/SvgIcons';
import Draggable from 'react-draggable';


export const CartillaLateral = () => {
  const [cuponOpen, setcuponOpen] = useState(false);
  const { Row, maxRow, maxRowBool } = useSelector((state) => state.showBet);
  const dispatch= useDispatch();
  const ClickReset=()=> dispatch(ResetCartilla());
  const Clickcupon = (e)=>{ 
    if (e.target.nodeName==='STRONG') {return}

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
  const onStop = () => {
    setstate({activeDrags: --state.activeDrags});
  };


  const dragHandlers = {onStart: onStart, onStop: onStop};
  return (
    <>
      <CartillaContenedor style={{transform: `translateY(${cuponOpen?'0': styleSumaArr.map(e=> Number(e.split(' ')[0])).reduce(reducer)+styleSumaArr[0].split(' ')[1]})`}}>
    
    <Draggable axis="x" handle="strong" bounds={'parent'}  {...dragHandlers}>
    <span className={'box no-cursor'}>
          <ContainerHeader onClick={Clickcupon}>
            <p>Cupon de apuesta ({Row.length})</p>
            <strong  className="custom-btn cursor">Read More</strong>
            <SvgIcons arrow stroke={'white'} width={25} />
          </ContainerHeader>
          <ContainerType style={{...{height: styleSumaArr[0].replace(' ', '')}, ...styleRepCupon}}>
            {/* <span className='containerSelect'>
              <Select 
                className='optionSelect'
                isClearable={false}
                isDisabled={false}
                isSearchable={false}
                defaultValue={options[0]} 
                onChange={setselectedOption} 
                options={options}
                />
            </span> */}
            <span onClick={ClickReset} className="btnVaciarCupon">Vaciar cupon</span>
          </ContainerType>
          
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT}/>
          <ContainerBody style={{...{height: styleSumaArr[1].replace(' ', '')}, ...styleRepCupon}}>
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
          </ContainerBody>
          <ContainerFooter style={{...{height: styleSumaArr[2].replace(' ', '')}, ...styleRepCupon}}>
                      
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
          </ContainerFooter>
    </span>
    
    </Draggable>
      </CartillaContenedor>
    </>
  )
}

const CartillaContenedor = styled.div`
      position: fixed;
      bottom: 0;
      width: 36rem;
      margin-right: 3rem;
`
const ContainerHeader = styled.div`
  height: 25px;
  background-color: #050415;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.8rem 1.5rem;
  
  .custom-btn {
    width: 130px;
    height: 20px;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
     box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;

    background: rgb(96,9,240);
    background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
    border: none;
    
  }
  .custom-btn:before {
    height: 0%;
    width: 2px;
  }
  .custom-btn:hover {
    box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                -4px -4px 6px 0 rgba(116, 125, 136, .5), 
      inset -4px -4px 6px 0 rgba(255,255,255,.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
  }
  
  


  p{
    font-size: 13px;
    color: white;
    font-family: 'Raleway', sans-serif;
  }
  .angle-down{
    width: 20px;
    height: 20px;
    background-color: white;
  }
`
const ContainerType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btnVaciarCupon{
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .containerSelect{
    background-color: green;
    height: auto;
    .optionSelect{
    }
  }
  .btnVaciarCupon:hover{
    color: red;
  }
`
const ContainerBody= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;     /* Tamaño del scroll en vertical */
    height: 1px;    /* Tamaño del scroll en horizontal */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4b6584; 
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #d1d8e0;
    border-radius: 4px;
}


`
const ContainerFooter= styled.div`
`

//
// className={`animate__animated ${cuponOpen&&'animate__fadeInUp'}`}
//TODO: CUPON DE APUESTA EN CIRCULITO
/**
 * import React from 'react'
import styled from 'styled-components'
export const CartillaLateral = () => {
  return (
    <CartillaContenedor>
        <ContainerHeader>
          <p>Cupon de apuesta (2)</p>
        </ContainerHeader>
    </CartillaContenedor>
  )
}

const CartillaContenedor = styled.div`
      background-color: #DFDFDF;
      padding: 1px;
`
const ContainerHeader = styled.div`
  background-color: black;
  cursor: pointer;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 80%;
    color: white;
    text-align: center;
    font-family: 'Raleway', sans-serif;
  }
`
 */




//**Cartilla.js */
/***
 * 
  const { Row, maxRowBool } = useSelector((state) => state.showBet);
  const dispatch= useDispatch();
  const ClickReset=()=> dispatch(ResetCartilla());
  // if(Row.length >= 3) return dispatch(DeleteLastBet(true))
  // else dispatch(DeleteLastBet(false));
  return (
    <>
    <Modal
      state={stateModal1}
      ChangeState={setstateModal1}
      titulo="Hola"
      mostrarHeader={false}
      showOverlay={true}
      positionModal="start"
      padding="5px"
      positionbtnclose="120%"
    >
      <Contenido className="cartilla">
        <div className="btn_reset">
          <span onClick={ClickReset}>RESET</span>
        </div>
        <table id="lista-apuestas">
          <thead>
            <tr>
              <th>codeBet</th>
              <th>Comienza</th>
              <th>Nº de apuesta</th>
              <th>multiplicador</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {Row.map((item, index) => (
              <TrsCartilla key={index} id={index} {...item} />
            ))}
            
          </tbody>
        </table>

        { maxRowBool && <ErrorsInLoadRow/> }
        <ContenedorInformations/>
        <div className={"footerCartilla"}>
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
      </Contenido>
    </Modal>
    </>
  );
};

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

 */