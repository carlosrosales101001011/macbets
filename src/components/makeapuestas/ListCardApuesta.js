import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Accordion } from '../makeAccordion/Accordion';
import { TimeProgressive } from '../makeATimeProgressive/TimeProgressive';
import { Bet } from '../makeComponentBet/Bet';
import { Modal } from '../Modal';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


export const ListCardApuesta = ({keyId, acordiones, bets, titulo, subtitulo, fecha, hora, codigobet}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 850px)' })//yellow
  
  
  const [stateModal1, setstateModal1] = useState(false);

  const { Row } = useSelector((state) => state.showBet);
  // console.log(acordiones.map(a=>a.id));
  // console.log(acordiones.map(a=>a.bets.map(b=>b.code)).flat());

  const [faqs, setfaqs] = useState(
    acordiones.map(a=> (
                          {
                            id: a.id, 
                            question: a.name, 
                            answer: a.bets.map((bet, index)=> <Bet
                                                                  key={index} 
                                                                  numbet={index+1} 
                                                                  codigo={codigobet}
                                                                  date={fecha} time={hora} 
                                                                  codeBet={bet.code} stateunBet={bet.statement} multiplied={bet.multiplied} 
                                                                  idAccordion={a.id} nameAccordion={a.name} 
                                                                  // isDisabled={bet.code}  
                                                              />), 
                            open: a.id===1 ? true: false 
                          }
                        )
                  ));
  

  
  const len = acordiones.map(a=>a.bets.map(b=>b))
  const cantidaDeBets = len.map(c=> c.length)
  const reducer = (accumulator, curr) => accumulator + curr;
  
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index)  faq.open = !faq.open
        else faq.open = false;
        
        return faq;
      })
    );
  };
    // console.log(acordiones, bets, titulo, subtitulo, fecha, hora, codigobet);
    return (
    <BetMac style={{display: 'grid', gridTemplateColumns: `${!isTabletOrMobile ? '100%':'35% 55% 10%'}`}}>
      <div className={"headboardContainer"}>
        <p>{titulo}: {subtitulo}</p>
        <p className={'cod-Bet'}>#{codigobet}</p>
        <TimeProgressive date={fecha} time={hora}/>
      </div>
      <div className="bodyContainer">
        {
          faqs[0].answer
        }
      </div>
      <div className="footContainer">
        <p onClick={() => setstateModal1(!stateModal1)}>Ver mas ({cantidaDeBets.reduce(reducer)})</p>
      </div>
      <Modal
        classNameforBackgrounds='modal-apuestas'
        state={stateModal1}
        ChangeState={setstateModal1}
        showHeader={false}
        showOverlay={true}
        positionModal="start"
        padding="15px"
        putWidth={'100%'}
        // background={''}
      >
          <div className={"headboardContainerModalTitle"}>
            <p>{titulo}: {subtitulo}</p>
            <p className={'cod-Bet'}>#{codigobet}</p>
            <TimeProgressive date={fecha} time={hora}/>
          </div>
          <div className="Accordion">
            <div className="faqs listBets">
              {
                faqs.map((faq, i) => (
                  <Accordion faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
                ))
              }
            </div>
          </div>
      </Modal>
    </BetMac>
  )
}
const BetMac = styled.div`
  // box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  border: 1px solid #bdbdbd;
  border-radius: 2px;
  margin: 1.5rem;
  padding: .5rem;
  // grid-template-columns: ${props=> props.isTabletOrMobile ? '40%': '40% 50% 10%'};
  background-color: #fafafa;

  .headboardContainer{
      padding: .7rem 1rem;
      display: flex;
      flex-direction: column;
      p{
        font-size: 1.3rem;
        font-weight: bold;
      }
      .dateHour{
        font-size: 55%;
      }
    }

    .bodyContainer{
      padding: 0 5px;
      border-right: 1px solid #e5e5e5;
      border-left: 1px solid #e5e5e5;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 4px 4px;
  }
  
  .footContainer{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
          margin: 0;
          font-size: 1.3rem;
          text-align: center;
      }
      p{
          cursor: pointer;
      }
  }

`
//acordiones.map(a=>(<Accordion  key={a.Index} toggleFAQ={toggleFAQ} faq={faq} index={a.Index} }/>))
//data={[{title: a.name, content: a.bets.map((bet, index)=> <Bet key={index} stateunBet={bet.statement} multiplied={bet.multiplied} codigo={codigobet} idAccordion={a.id} numbet={index} />)}]