import React from 'react'
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components'

export const ContentApuesta = ({itema, codeBet, bets, titulo, subTitulo, clickDeleteRows, clickDeleteRow}) => {
  return (
    <ContainerApuesta>
    <HeaderApuesta data-tip={codeBet}>
        <span>{titulo}: {subTitulo}</span>
        <div className='icon-cross' onClick={()=>clickDeleteRows(codeBet)}></div>
    </HeaderApuesta>
    <BodyApuesta>
        {bets.map((itemb, indexb)=>(
        <div className='Apuesta-row' key={indexb}>
        <div data-tip={itemb.statement} className='statementBet'>
            <span>{itemb.accordionStatement}</span>
            <span>{itemb.statement}</span>
        </div>
        <div>
            <div className='multipliedCuota'>
            x{itemb.multiplicador}
            </div>
            <div className='icon-cross' onClick={()=>clickDeleteRow(itemb.codeBtn)}></div>
        </div>
        </div>
        ))}
    </BodyApuesta>
    <ReactTooltip effect="solid" place='top'/>
    </ContainerApuesta>
  )
}
const ContainerApuesta = styled.div`
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
  //background-color: #2C3E50;
  background-color: #26de81;

  color: white;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  padding: 7px 6px;
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
      font-size: 12px;
      display: flex;
      flex-direction: column;
      padding: 10px 3px;
      width: 10rem;
      span{
        overflow: hidden;
        text-overflow: ellipsis;
      }
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
        cursor: pointer;
      }
    }

  }
  
`

                // {/* <HeaderApuesta>
                // <span>{itema.codeBet}</span>
                // <div className='icon-cross' onClick={()=>clickDeleteRows(itema.codeBet)}></div>
                // </HeaderApuesta>
                // <BodyApuesta>
                //   {itema.bets.map((itemb, indexb)=>(
                //   <div className='Apuesta-row' key={indexb}>
                //     <div className='statementBet'>
                //       <span>{itemb.accordionStatement}</span>
                //       <span>{itemb.statement}</span>
                //     </div>
                //     <div>
                //       <div className='multipliedCuota'>
                //         x{itemb.multiplicador}
                //       </div>
                //       <div className='icon-cross' onClick={()=>clickDeleteRow(itemb.codeBtn)}></div>
                //     </div>
                //   </div>
                //   ))}
                // </BodyApuesta> */}