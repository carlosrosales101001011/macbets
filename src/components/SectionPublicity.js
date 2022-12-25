import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { ComponentCheckboxes } from './makeCheckbox/ComponentCheckboxes';
import Draggable from "react-draggable";
import { SvgIcons } from './svgsJS/SvgIcons';
import { useDispatch, useSelector } from 'react-redux';
import { TimeProgressive } from './makeATimeProgressive/TimeProgressive';
import { Accordion } from './makeAccordion/Accordion';
import { Bet } from './makeComponentBet/Bet';
import { NewAccordion } from './makeAccordion/NewAccordion';
import { GetInformationSeeMore } from '../action/BetInCartilla';

export const SectionPublicity = () => {

  const {isObjSeeMore, isSelectedSeeMore  } = useSelector((state)=>state.ui)
  const ppp = useSelector((state)=>state.ui)
  
  const [clickAccordion, setclickAccordion] = useState(false)


  const dispatch = useDispatch()
  const [isClickEquis, setclickClose] = useState(false)
  const ClickEquis = ()=>{
    dispatch(GetInformationSeeMore({}, false))
    setclickClose(!isClickEquis)

  }



  return (
    <Contenedor clickAccordionp={clickAccordion} ClickEquisp={isClickEquis}  className="--SeeMore">
      <div className="--accordion-seeMore">
        <div className="Section-seeMore_i">
          {isSelectedSeeMore && (
            <>
              <div className="Section-header">
                <p>
                  {isObjSeeMore.titulo}: {isObjSeeMore.subtitulo}
                </p>
                <span className='containerClose' onClick={ClickEquis}>
                  <SvgIcons closeEquis width={25} stroke={'black'}/>
                </span>
              </div>
              <div className="Section-body">
                {
                  isSelectedSeeMore&&(isObjSeeMore.acordiones.map(a=>(
                    <NewAccordion name={a.name} key={a.id} content={
                      
                      (
                        a.bets.map((bet, index)=> <Bet
                                                                  key={index} 
                                                                  numbet={index+1} 
                                                                  codeBet={a.codeBetbet}
                                                                  date={a.fecha} time={a.hora} 
                                                                  codeBtn={bet?.code} 
                                                                  stateunBet={bet?.statement} multiplied={bet?.multiplied} 
                                                                  idAccordion={a.id} nameAccordion={a.name} 
                                                                  // isDisabled={bet.code}  
                                                                  titulo={a.titulo}
                                                                  subTitulo={a.subtitulo}
                                                              />
                                                              )
                      )

                    }/>
                
                  )))
                }

              </div>
            </>
            )
          }
        </div>
      </div>
    </Contenedor>
  );
}
const Contenedor = styled.div`
  position: sticky;
  left: 0;
  top: 56px;
  width: auto;
  height: 75vh;
  overflow: scroll;
  // ${props=>props.ClickEquisp?"display: none": "display: block"};
  .Section-seeMore_i{
    border: 1px solid #dedede;
  }

  .Section-header{
    margin: 2px 0;
    padding: 6px 8px;
    border-radius: 5px;
    background-color: #dedede;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: 14px;
      font-weight: bold;
      color: black;
      font-family: 'Poppins', sans-serif;
    }
    .containerClose:hover{
      cursor: pointer;
    }
  }
      .Section-body{
      }

`
