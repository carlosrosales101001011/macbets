import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteLastBet,
  EventStartAddNew,
  EventStartRemoveBetInCartilla,
  EventUpdateProductMultiplieds,
  OpenModal,
  ResaltarBet,
  ResetCartilla,
  UpdateAmountBetInCartilla,
  UpdateEarningsMACS,
  UpdateMaxTimeBetInCartilla,
} from "../../action/BetInCartilla";
import { randomDate2 } from "../../helpers/randomNumber";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import  sweetAlert from "sweetalert2";
import ReactTooltip from 'react-tooltip';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import { NewArray } from "../../helpers/ArrayCodexCode";


export const Bet = ({
  stateunBet,
  multiplied,
  date,
  time,
  codigo,
  idAccordion,
  numbet,
  nameAccordion,
  codeBet,
  isDisabled,
  inCupon,
}) => {
  
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 650px)" }); //yellow
  const dispatch = useDispatch();
  const { Row } = useSelector((state) => state.showBet);
  const event = {
    codigo: codigo,
    idAccordion: idAccordion, accordionStatement: nameAccordion,
    statement: stateunBet, multiplicador: multiplied, codeBet: codeBet,
    comienza: `${date} ${time}`,
    n_bet: `${idAccordion}. ${numbet}`,
    inCupon: true,
  };
  const [bet, setBet] = useState(event);
  
  const refBet = useRef(null);
  const onClickMultiplied = () => {
    setBet({ ...bet, inCupon: !(bet.inCupon)});
    // console.log(bet);

    // Row.map(e=>e.codigo).flat().includes(codigo)
    // ? 
    // (Row.map(e=>e.idAccordion).flat().includes(idAccordion)
    // && 
    // BetError("No puedes seleccionar esa apuesta")) 
    // : AddinRedux()

    // Row.map(e=>e.codigo).flat().includes(codigo)?
    
    // (Row.map(e=>e.idAccordion).flat().includes(idAccordion) ? 
    // BetError("La apuesta ya a sido selecciona 1"): AddinRedux())  :AddinRedux()

    // if(Row.map(e=>e.codigo).flat().includes(codigo)){
    //   return (Row.map(e=>e.idAccordion).flat().includes(idAccordion)
    //   && 
    //   BetError("No puedes seleccionar esa apuesta")) 
    // }else {
      /***** */
      // if (Row.map(e=>e.codeBet).flat().includes(codeBet)) {
      //   return BetError("La apuesta ya a sido selecciona")
      // } else {
      //   return AddinRedux()
      // }
      /****** */
    // }

    // Row.map(e=>e.codeBet).flat().includes(codeBet)? BetError("La apuesta ya a sido selecciona") : AddinRedux();
    // switch (Row.map(e=>e.codeBet).flat().includes(codeBet)) {
    //   case false:
    //     //Si el switch es falso, hacer otro switch
    //     switch (Row.map(e=>e.codigo).flat().includes(codigo)) {
    //       case true:
    //         (Row.map(e=>e.idAccordion).flat().includes(idAccordion)
    //           && 
    //           ToastsStore.error("No puedes seleccionar esa apuesta", 3610)
    //         )
    //         break;
            
    //       default:
    //         // console.log("agregando");
    //         AddinRedux()
    //         break;
    //     }
    //     break;
    //   default:
    //     //Si el switch es verdadero, agrega un mensaje "La apuesta ya a sido selecciona"
    //     clickDeleteRow()
    //     break;
    // }

    const eliminaDuplicados = (originalArray, prop) => {
      // return arr.filter((valor, indice) => {
      //   return arr.indexOf(valor) === indice;
      // });
      // const dataArr = new Set(data);
      // let result = [...dataArr];
      // return result

      // let set = new Set( data.map( JSON.stringify ) )
      // let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
      // return arrSinDuplicaciones;
          var newArray = [];
          var lookupObject  = {};

          for(var i in originalArray) {
              lookupObject[originalArray[i][prop]] = originalArray[i];
          }

          for(i in lookupObject) {
              newArray.unshift(lookupObject[i]);
          }
            return newArray;
    }
  //TODO: PARA JUNTAR LAS APUESTAS DEPENDIENDO DEL CODIGO
  // NewArray(Row);
  //TODO: FIN -------------------------------------------------------------
  AddinRedux()
  // console.log(NewArray(Row));
  //.map(e=>{return {codigo: e.codigo, bets: e.bets.map(b=>b.idAccordion===idAccordion? "no se puede": "si se puede")}})
    
  /*
  {idAccordion: 1, codeBet: 'n'}
  {idAccordion: 1, codeBet: 'D'}
  {idAccordion: 2, codeBet: 'F'}
  {idAccordion: 3, codeBet: 'J'}
  {idAccordion: 3, codeBet: 'e'}
  {idAccordion: 3, codeBet: 'Z'}
  */
  

  };
  const AddinRedux = () => {
    // refBet.current.style.backgroundColor = "green";
    dispatch(OpenModal());
    
    const datealeatorio = randomDate2(
      new Date(2024, 0, 1),
      new Date(),
      0,
      24
    ).toLocaleString();
    // if(maxRowBool) return  dispatch(DeleteLastBet())
    dispatch(UpdateAmountBetInCartilla(0));
    dispatch(UpdateEarningsMACS());
    dispatch(EventStartAddNew(Row.length + 1, 10, event));
    dispatch(EventUpdateProductMultiplieds(multiplied));
    dispatch(UpdateMaxTimeBetInCartilla(datealeatorio));
    
    ToastsStore.success("Agregaste una apuesta a tu cupon", 3610)
  };
  const clickDeleteRow =()=>{
    
    ToastsStore.error("Eliminaste una Apuesta de tu cupon", 3610)
    dispatch(EventStartRemoveBetInCartilla(codeBet));
    dispatch(EventUpdateProductMultiplieds())
    dispatch(UpdateEarningsMACS())
    // dispatch(EventUpdateRemoveOneMultiplieds())
    if(Row.length === 1){
        dispatch(ResetCartilla());
      } 
  }
  const BetError = (msgError) =>{
    sweetAlert.fire({
      title: msgError,
      icon: 'error',
      position: 'center',
      width: 'auto',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500
    })
    
  }
  // console.log(Row.map(e=>e.codeBet).flat().includes(codeBet)? codeBet+'es de color rojo' : "no esta");
  
  // console.log(codeBet==="mNpmFASP"? "Es un codigo ya usado": "no esta usado");
  return (
    <>
      <ContainerBet
        data-tip={`${stateunBet}  : :  x${multiplied}`}
        onClick={onClickMultiplied}
        style={{
          width: `${
            !isTabletOrMobile ? "100%" : "32%"
          }
          `,
          backgroundColor: `${Row.map(e=>e.codeBet).flat().includes(codeBet) ? 'green': '#37474f'}`,
        }}
        className="containerBet"
        ref={refBet}
      >
        <ReactTooltip effect="solid"/>
        <div className="stateUnBet">
          <p>
            {stateunBet} : {codeBet}
          </p>
        </div>
        <div className="multipliedBet">
          <input
            type="button"
            className="inputMultiplied"
            value={"x" + multiplied}
          />
        </div>
      </ContainerBet>
      
    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT}/>
    </>
  );
};

/*
if(row.codigo === codigo){
            const eventDiferent = {
                codigo: codigo,
                comienza: `${date} ${time}`,
                n_bet: `${idAccordion}. ${numbet}`,
                betHTML: []
              } 
              eventDiferent.betHTML.push({
                  statement: stateunBet,
                  accordionStatement: nameAccordion,
                  multiplicador: multiplied
                });
                console.log(eventDiferent);
                return eventDiferent
            }else{
              return row
            }
*/
const ContainerBet = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  height: 50px;
  background-color: #37474f;
  .multipliedBet {
    margin-top: 1rem;
  }
  // width: 100%; es para mediaquery
  // width: 32%;
  border-bottom: 1px solid #37474f;
  .stateUnBet {
    width: 80%;
    white-space: nowrap;
    text-align: center;
    p {
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 70%;
      font-family: "Raleway", sans-serif;
    }
  }
  .multipliedBet {
    width: 100%;
    display: flex;
    .inputMultiplied {
      border: none;
      padding: 1px 5px;
      font-size: 85%;

      font-weight: bold;
      cursor: pointer;
      width: 100%;
      heigth: 100%;
    }
  }
  &:hover {
    background-color: red;
    border: none;
    .multipliedBet {
      background-color: purple;
    }
  }
`;
