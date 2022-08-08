import React, { useEffect, useMemo, useState } from "react";
import styledComponents from "styled-components";
import { randomNumber } from "../helpers/randomNumber";
import { Accordion } from "./makeAccordion/Accordion";
import { TimeProgressive } from "./makeATimeProgressive/TimeProgressive";
import { Bet } from "./makeComponentBet/Bet";
import { Modal } from "./Modal";

export const UnApuesta = ({bet, titulo, subtitulo, fecha, hora, codigobet}) => {
  //*TODO: ALGUN DIA MODIFICAR ESTE CODIGO SPAGUETY
  console.log(bet);

  const [stateModal1, setstateModal1] = useState(false);

  const [faqs, setfaqs] = useState(bet);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index)  faq.open = !faq.open
        else faq.open = false;
        
        return faq;
      })
    );
  };


  return (
    <div className="ApuestaMAC">
      <div className={"headboardContainer"}>
        <p>{titulo}: {subtitulo}</p>
        <p className={'cod-Bet'}>#{codigobet}</p>
        <TimeProgressive date={fecha} time={hora}/>
      </div>
      <div className="bodyContainer">
          {faqs[0].answer}
      </div>
      <div className="footContainer">
        <p onClick={() => setstateModal1(!stateModal1)}>Ver mas apuestas</p>
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
            {/* <Header /> */}
            <div className="faqs">
              {faqs.map((faq, i) => (
                <Accordion faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
      </Modal>
    </div>
  );
};
