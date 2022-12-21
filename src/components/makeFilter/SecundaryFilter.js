import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useChecked } from '../../hook/useChecked'

export const SecundaryFilter = ({FilterName, FilterUrl, bools, isCheckedFilter, onChange, checked, principalFiltro}) => {
const inputRef = useRef(null)
const changeCheckbox = (e)=>{
  return bools === e.target.checked
  // console.log(e.target.checked)
}
const [clickFiltro, setClickFiltro] = useState(false)
const handleCheckbox=()=>{
  setClickFiltro(!clickFiltro);
}
  return (
    <Filter principalFiltrop={principalFiltro}  clickFiltrop={clickFiltro} href={FilterUrl}>
        <label>
            <input onClick={handleCheckbox} ref={inputRef} onChange={onChange} name={FilterName} type={'checkbox'} checked={checked} value={FilterName}/> 
            <p>{FilterName}</p>
        </label>
    </Filter>
  )
}
const Filter = styled.a`
label{
    display: flex;
    margin: 3px;
    line-height: 1.5em;
    width: 100%;
    &:hover{
    transition: all .5s;
    }
    p{
        font-family: 'Mingzat', sans-serif;
        font-size: 12.8px;
        margin-left: 8px; 
        word-wrap: break-word;
        // color: white;
        color: ${props=>props.clickFiltrop? 'white' : `black`};
    }
    border-bottom: 1px solid #707070;
    background-color: ${props=>props.principalFiltro===false&& '#4c4747'};
    background-color: ${props=>props.principalFiltrop&&(props.clickFiltrop? '#4c4747' : `rgb(188, 188, 188)`)};
  
  }
  
  `


  /*
  const inputRef = useRef(null)
const changeCheckbox = (e)=>{
  return bools === e.target.checked
  // console.log(e.target.checked)
}
const [clickFiltro, setClickFiltro] = useState(false)
const handleCheckbox=()=>{
  setClickFiltro(!clickFiltro);
  return onchange;
}
  return (
    <Filter principalFiltrop={clickFiltro} href={FilterUrl}>
        <label>
            <input ref={inputRef} onChange={handleCheckbox} name={FilterName} type={'checkbox'} checked={checked} value={FilterName}/> 
            <p>{FilterName}</p>
        </label>
    </Filter>
  )
}
  */