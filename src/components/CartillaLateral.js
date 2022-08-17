import React from 'react'
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


export const CartillaLateral = () => {
  const [cuponOpen, setcuponOpen] = useState(false);

  const { Row, maxRow, maxRowBool, rowLength } = useSelector((state) => state.showBet);
  const [bets, setbets] = useState(false);
  // const { showBet} = useSelector((state) => state);

  const dispatch= useDispatch();

  const ClickReset=()=> dispatch(ResetCartilla());
  // console.log(cuponOpen);
  const Clickcupon = ()=>{
    setcuponOpen(!cuponOpen);
  }

  //TODO: PARA JUNTAR LAS APUESTAS DEPENDIENDO DEL CODIGO
  
  //TODO: FIN -------------------------------------------------------------
  const clickDeleteRow =(index)=>{
      dispatch(EventStartRemoveBetInCartilla(index));
      dispatch(EventUpdateProductMultiplieds())
      dispatch(UpdateEarningsMACS())
      // dispatch(EventUpdateRemoveOneMultiplieds())
      ToastsStore.error("Eliminaste una Apuesta de tu cupon", 3700)
      if(Row.length === 1){
          dispatch(ResetCartilla());
        } 
      }
  const clickDeleteRows = (codigo)=>{
    const RowRemoved = Row.filter(r=>r.codigo===codigo).length
    ToastsStore.error("Eliminaste "+ RowRemoved + " apuesta de tu cupon", 3700)
    dispatch(DeleteRows(codigo));
  }
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  // const state = {
  //   selectedOption: null,
  // };
  // const handleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //     console.log(`Option selected:`, state.selectedOption)
  //   );
  // };
  // const { selectedOption } = state;
  const [selectedOption, setselectedOption] = useState(null);

  const styleSumaArr = ["4 rem", "35 rem", "15 rem"];
  // console.log(styleSumaArr.map(e=> e.replace(' ', '')));
  // console.log(Row);
  // console.log(styleSumaArr[0].split(' ')[1]);
  const reducer = (accumulator, curr) => accumulator + curr;
  const styleRepCupon={padding: '5px', backgroundColor: '#DFDFDF'}
  return (
    <>
    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT}/>
    <CartillaContenedor style={{transform: `translateY(${cuponOpen?'0': styleSumaArr.map(e=> Number(e.split(' ')[0])).reduce(reducer)+styleSumaArr[0].split(' ')[1]})`}}>
        <ContainerHeader onClick={Clickcupon}>
          <p>Cupon de apuesta ({Row.length})</p>
          <div className='angle-down'></div>
        </ContainerHeader>
        <ContainerType style={{...{height: styleSumaArr[0].replace(' ', '')}, ...styleRepCupon}}>
          <span className='containerSelect'>
            <Select 
              className='optionSelect'
              isClearable={false}
              isDisabled={false}
              isSearchable={false}
              defaultValue={options[0]} 
              onChange={setselectedOption} 
              options={options}
              />
          </span>
          <span onClick={ClickReset} className="btnVaciarCupon">Vaciar cupon</span>
        </ContainerType>
        <ContainerBody style={{...{height: styleSumaArr[1].replace(' ', '')}, ...styleRepCupon}}>
              {
              Row.length?
              NewArray(Row).map((itema, index)=>(
                <ContentApuesta
                              key={index} 
                              itema={itema}
                              codigo={itema.codigo} 
                              bets={itema.bets} 
                              clickDeleteRow={clickDeleteRow} 
                              clickDeleteRows={clickDeleteRows}
                              />
                ))
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
    </CartillaContenedor>
    </>
  )
}

const CartillaContenedor = styled.div`
      position: fixed;
      bottom: 0;
      right: 0;
      width: 36rem;
      height: auto;
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
  background-color: red !important;
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
  p{
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
              <th>codigo</th>
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