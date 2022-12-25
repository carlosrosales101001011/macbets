import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { SvgIcons } from '../svgsJS/SvgIcons'

export const NewAccordion = ({name, content}) => {


    const [clickAccordion, setclickAccordion] = useState(false)
    const ClickAccordion = () =>{
        setclickAccordion(!clickAccordion)
    }   


  return (
    <>
        <Accordeon clickAccordionp={clickAccordion} className="btn">
                  <button id="accordion" onClick={ClickAccordion}>
                    {name}
                  <SvgIcons arrow width={25} stroke={'white'}/>
                  </button>
                  <div className="content">
                    {content}
                  </div>
                </Accordeon>
    </>
  )
}

const Accordeon = styled.div`
margin: 0px 5px;
            position: relative;
            overflow-x: auto;


            button{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:10px;
                background: #1e272e;
                border: none;
                font-size:1.3rem;
                color:white;
                width: 450px;
                cursor: pointer;
            }
              .plus{
                  position: absolute;
                  width: 24px;
                  height: 2px;
                  top: 20px;
                  right: 30px;
                  background:white;
              }
              .pluse2{
                  top: 20px;
                  background: white;
                  transform: rotate(90deg);
                  width: 24px;
              }
              .content{
                  background: #05c46b;
                  color: white;
                  font-size: 1.1rem;
                  margin:0px 0px 2px 0px;
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    
                  max-height:0;
                  overflow: hidden;
                  transition:.3s;
            }
            .content{
              ${props=>props.clickAccordionp&&`max-height:400px;
              padding:10px;`}
            }
`