import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { EventStartRemoveBetInCartilla, EventUpdateProductMultiplieds, ResetCartilla, UpdateEarningsMACS } from '../action/BetInCartilla';
export const CartillaLateral = () => {
  const [cuponOpen, setcuponOpen] = useState(false);
  const { Row, maxRow, maxRowBool, rowLength } = useSelector((state) => state.showBet);
  const dispatch= useDispatch();
  const ClickReset=()=> dispatch(ResetCartilla());
  console.log(cuponOpen);
  const Clickcupon = ()=>{
    setcuponOpen(!cuponOpen);
  }

  //TODO: PARA JUNTAR LAS APUESTAS DEPENDIENDO DEL CODIGO
  const arrayMap = Row.map((item) => {
    return [item.codigo, item];
  });
  const countriesMapArr = new Map(arrayMap);
  
  const uniqArr = [...countriesMapArr.values()];

  const newArr = uniqArr.map((e) => {
    return {
      codigo: e.codigo,
      comienza: e.comienza,
      n_bet: e.n_bet,
      bets: Row
        .filter((item) => item.codigo === e.codigo)
        .map(({codigo, comienza, n_bet, statement, accordionStatement, multiplicador, codeBet}) => {return {statement, accordionStatement, multiplicador, codeBet}}),
    };
  });
  //TODO: FIN -------------------------------------------------------------
  const clickDeleteRow =(index)=>{
    console.log(index);
      dispatch(EventStartRemoveBetInCartilla(index));
      dispatch(EventUpdateProductMultiplieds())
      dispatch(UpdateEarningsMACS())
      // dispatch(EventUpdateRemoveOneMultiplieds())
      if(Row.length === 1){
          dispatch(ResetCartilla());
        } 
  }
  const clickDeleteRows = ()=>{

  }


  return (
    <>
    <CartillaContenedor style={{transform: `translateY(${cuponOpen?'0': '35rem'})`}}>
        <ContainerHeader onClick={Clickcupon}>
          <p>Cupon de apuesta ({rowLength})</p>
          <div className='angle-down' onClick={()=>clickDeleteRows()}></div>
        </ContainerHeader>
        <ContainerBody style={{height: `35rem`}}>
              {newArr.map((itema, index)=>(
              <ContentApuesta key={index}>
                <HeaderApuesta>
                <span>{itema.codigo}</span>
                <div className='icon-cross'></div>
                </HeaderApuesta>
                <BodyApuesta>
                  {itema.bets.map((itemb, indexb)=>(
                  <div className='Apuesta-row' key={indexb}>
                    <div className='statementBet'>
                      <span>{itemb.accordionStatement}</span>
                      <span>{itemb.statement}</span>
                    </div>
                    <div>
                      <div className='multipliedCuota'>
                        x{itemb.multiplicador}
                      </div>
                      <div className='icon-cross' onClick={()=>clickDeleteRow(itemb.codeBet)}></div>
                    </div>
                  </div>
                  ))}
                </BodyApuesta>
              </ContentApuesta>
              ))}
        </ContainerBody>
        <ContainerFooter>

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
const ContainerBody= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2px;
  overflow-y: auto;
  background-color: #DFDFDF;
`
const ContainerFooter= styled.div`

`
const ContentApuesta = styled.div`
  width: 100%;
  border-radius: 2px;
  margin-bottom: 3px;
  background-color: #EEEEEE;

  -webkit-box-shadow: 0px 0px 18px -2px rgba(0,0,0,0.19);
-moz-box-shadow: 0px 0px 18px -2px rgba(0,0,0,0.19);
box-shadow: 0px 0px 18px -2px rgba(0,0,0,0.19);

border-radius: 2px 2px 0px 0px;
-moz-border-radius: 2px 2px 0px 0px;
-webkit-border-radius: 2px 2px 0px 0px;
border: 0px solid #000000;
`
const HeaderApuesta = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2C3E50;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  padding: 3px 10px;
  width: 100%;
  .icon-cross{
    width: 16px;
    heigth: 16px;
    cursor: pointer;
  }

  border-radius: 2px 2px 0px 0px;
-moz-border-radius: 2px 2px 0px 0px;
-webkit-border-radius: 2px 2px 0px 0px;
border: 0px solid #000000;
`
const BodyApuesta = styled.div`
  .Apuesta-row{
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    font-family: 'Raleway', sans-serif;
    background-color: #BDC3C7;
    border-bottom: 1px solid #95A5A6;
    .statementBet{
      font-size: 15px;
      display: flex;
      flex-direction: column;
      padding: 10px 3px;
      // span:first-child{
      //   color: #ABB7B7;
      // }
      span:last-child{
        font-weight: bold;
      }
    }
    div:last-child{
      display: flex;
      .multipliedCuota{
        font-size: 12px;
        margin: 0 7px 0 0;
      }
      .icon-cross{
        width: 20px;
        heigth: 100%;
      }
    }

  }
  
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