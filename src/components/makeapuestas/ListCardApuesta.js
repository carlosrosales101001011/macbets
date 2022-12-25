import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Accordion } from '../makeAccordion/Accordion';
import { TimeProgressive } from '../makeATimeProgressive/TimeProgressive';
import { Bet } from '../makeComponentBet/Bet';
import { Modal } from '../Modal';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GetInformationSeeMore, IsCloseSeeMore, IsOpenSeeMore, isSelectSeeMore } from '../../action/BetInCartilla';
import { SvgIcons } from '../svgsJS/SvgIcons';


export const ListCardApuesta = ({keyId, acordiones, bets, titulo, subtitulo, fecha, hora, codeBetbet}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 850px)' })//yellow
  
  
  const [stateModal1, setstateModal1] = useState(false);

  const { Row } = useSelector((state) => state.showBet);
  
  const {isObjSeeMore, isSelectedSeeMore} = useSelector((state) => state.ui);
  const pp = useSelector((state) => state.ui);
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
                                                                  codeBet={codeBetbet}
                                                                  date={fecha} time={hora} 
                                                                  codeBtn={bet.code} stateunBet={bet.statement} multiplied={bet.multiplied} 
                                                                  idAccordion={a.id} nameAccordion={a.name} 
                                                                  // isDisabled={bet.code}  
                                                                  titulo={titulo}
                                                                  subTitulo={subtitulo}
                                                              />
                                                              ), 
                            open: a.id===1 ? true: false 
                          }
                        )
                  )
                  );
  

  
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
  const dispatch = useDispatch()
  const payload = {
    acordiones, titulo, subtitulo, fecha, hora, codeBetbet
  }
  const [getclickmoreSee, setgetclickmoreSee] = useState(false)
  const clickMoreSee = ()=>{
    if(isObjSeeMore.codeBetbet === codeBetbet){
      return dispatch(GetInformationSeeMore({}, false))
    }
      dispatch(GetInformationSeeMore(payload, true))
      setgetclickmoreSee(!getclickmoreSee)
      console.log(isSelectedSeeMore);
    }
    return (
    <BetMac 
    // style={{display: 'grid', gridTemplateColumns: `${!isTabletOrMobile ? '100%':'35% 55% 10%'}`}}
    
    >
      <div className={"headboardContainer"}>
        <p>{subtitulo}</p>
        <p className={'cod-Bet'}>#{codeBetbet}</p>
        <TimeProgressive date={fecha} time={hora}/>
      </div>
      <div className="bodyContainer">
        <span className='containerContentAccordion'>
        {faqs[0].question}
        </span>
        <span className='containerBet'>
        {faqs[0].answer}
        </span>
      </div>
      <div className="footContainer">
        <p onClick={clickMoreSee}>
        <SvgIcons caretBlack width={30} stroke={"none"}/>
           (+{cantidaDeBets.reduce(reducer)})</p>
      </div>
      <Modal
        AdicionalStyle={'flex-direction: row !important; justify-content: center !important;'}
        classNameforBackgrounds='modal-apuestas'
        state={stateModal1}
        ChangeState={setstateModal1}
        showHeader={false}
        showOverlay={true}
        positionModal="start"
        padding="15px"
        putWidth={'45%'}
        // background={''}
      >
          <div className={"headboardContainerModalTitle"}>
            <p>{titulo}: {subtitulo}</p>
            <p className={'cod-Bet'}>#{codeBetbet}</p>
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
  display: flex;
  
  border-radius: 2px;
  // grid-template-columns: ${props=> props.isTabletOrMobile ? '40%': '40% 50% 10%'};
  background-color: #dcdcdc;
  margin: 10px 20px;
  .headboardContainer{
      padding: .7rem 1rem;
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      width: 40%;
      p{
        font-size: 1.3rem;
        font-weight: bold;
      }
      .dateHour{
        font-size: 12px;
        margin: 2px 10px 0 0;
      }
    }

    .bodyContainer{
      width: 60%;
      padding: 5px 5px 0 0;
      margin: auto;
      .containerContentAccordion{

      }
      .containerBet{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
  }
  
  .footContainer{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 5%;
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
//data={[{title: a.name, content: a.bets.map((bet, index)=> <Bet key={index} stateunBet={bet.statement} multiplied={bet.multiplied} codeBet={codeBetbet} idAccordion={a.id} numbet={index} />)}]