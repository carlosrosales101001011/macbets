import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { SvgIcons } from '../svgsJS/SvgIcons';
import { ComponentFiltersFilter } from './ComponentFiltersFilter';

export const ComponentListFilter = ({NameFilter, subFilters}) => {
  const refAngleDown = useRef(null);
  const refSubList=useRef(null);
  const [AngleDown, setAngleDown] = useState(false);
  const ClickAngleDown = ()=>{
    setAngleDown(!AngleDown)
  };
  return (
    <UlFilter AngleDownp={AngleDown}>
    <div className='item_list'> 
      <a  onClick={ClickAngleDown} href='#' className='ListItem'>
        <p>{NameFilter}</p> 
        <div className='ArrowSlide'>
        <SvgIcons arrow width={20} stroke={AngleDown ? 'white': "Black"}/>
        </div>
      </a>

      <div  className='SubList'>
        {
          subFilters.map((props)=>{
            return <ComponentFiltersFilter nameFilter={props.name} urlFilter={props.url} key={props.i}/>
          })

        }
        
        </div>
      </div>
    </UlFilter> 
  
  )
}
const UlFilter = styled.ul`
  width: 100%;
  margin: 2px auto;
  
  .ArrowSlide{
    transform: rotate(180deg);
    transition: all .6s;
  }
  .ArrowSlide{
    ${ props=> props.AngleDownp && `transform: rotate(0); transition: all .45s;`}
  }
  .item_list  .ListItem{
    background-color:${ props=> props.AngleDownp ? '#37474F' : `rgb(188, 188, 188)`};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    padding: 4px 8px;
    align-items: center;
    border-radius: 5px;
    &:hover{
      background-color: ${ props=> props.AngleDownp ? '#37474F' : `rgb(169 166 166)`};
      transition: all .5s;
    }
  p{
    font-size: 13px;
    color: ${ props=> props.AngleDownp ? 'white' : `black`};
    font-family: 'Poppins', sans-serif;
  }
}
.SubList{
  position: static;
  border-left: 1px solid #949494;
  border-right: 1px solid #949494;
  border-bottom: 1px solid #949494;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 8px;
	max-height: 0vh;
  width: 100%;
  transition: all .6s;
  overflow: hidden;
  visibility: hidden;
  li{
    list-style: none;
    padding: 3px 10px;
  }
  ${props=> props.AngleDownp &&`
  transition: all .6s;
  max-height: 100vh;
  visibility: visible;     
  `}
}
`
//#37474F