import React, { useRef, useState } from 'react'
import styledComponents from 'styled-components'
import Styled from 'styled-components'

export const Accordion = ({faq, index, toggleFAQ}) => {
    
    return (
        <AccordionItem
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            >
            <div className="faq-question"
            onClick={() => toggleFAQ(index)}
            >
                {faq.question}
            </div>
            <ContentAccordion className="faq-answer">
                {faq.answer}
            </ContentAccordion>
        </AccordionItem>
    )
}
const ContentAccordion = styledComponents.div`
`

const AccordionItem = Styled.div`
`
// const ContainerAccordion = Styled.div`
//     width: 0;
// `