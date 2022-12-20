import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { SvgIcons } from '../svgsJS/SvgIcons';
import { SearchFilter } from './SearchFilter';

export const ComponentFiltersFilter = ({nameFilter, urlFilter, width, size}) => {
    const refChekbox = useRef(false)
    const [CheckBox, setCheckBox] = useState(false)
    const hadleCheckBox = ()=>{
        setCheckBox(!CheckBox)
    }
  return (
    <>
        
        <Filters widthp={width} sizep={size} href={urlFilter} onClick={hadleCheckBox}>
            <p>{nameFilter}</p> 
            <div>
                    <input type={'checkbox'} checked={CheckBox} onChange={hadleCheckBox} value={nameFilter} /> 
                <div className='ArrowSlide'>
                <SvgIcons arrow width={20} stroke={"Black"}/>
                </div>
            </div>
        </Filters>
    </>
  )
}
const Filters = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${props=> props.widthp? props.widthp: '3px 5px'};
    div{
        display: flex;
        input{
            margin-right: 10px;
            cursor: pointer;
        }
        .ArrowSlide{
            transform: rotate(-90deg);
        }
    }
    p{
        font-size: ${props=> props.sizep? props.sizep: '12px'};
        font-family: 'Mingzat', sans-serif;
    }
`
