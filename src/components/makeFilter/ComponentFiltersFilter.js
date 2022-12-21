import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { useChecked } from '../../hook/useChecked';
import { SvgIcons } from '../svgsJS/SvgIcons';
import { SearchFilter } from './SearchFilter';
import { SecundaryFilter } from './SecundaryFilter';

export const ComponentFiltersFilter = ({AngleMayor, nameFilter, urlFilter, width, size, isSecundaryFilter, bool}) => {
    // console.log(isSecundaryFilter);
    const [ClickAngle, setClickAngle] = useState(false)
    const inputRef = useRef(null)

    const [CheckBoxFiltros, setCheckBoxFiltros] = useState([]);


    // console.log(CheckBoxFiltros &&(CheckBoxFiltros.length>1?CheckBoxFiltros: null));
    function handleAngle(e) {
        if (e.target.localName === 'input') {
            
            return;
        }
        return setClickAngle(!ClickAngle);
    }
    useEffect(() => {
        setCheckBoxFiltros(isSecundaryFilter);
    }, [isSecundaryFilter]);
    // console.log(CheckBoxFiltros.some((user) => user?.isChecked !== true));

    const handleCheckbox = (e)=>{
        const { name, checked } = e.target;
        // console.log(name, checked);
        if (name === `AllSelect`) {
            // console.log(name);
            let tempUser = CheckBoxFiltros.map((user) => {
                
                return { ...user, isChecked: checked };
            });
            setCheckBoxFiltros(tempUser);
            // console.log(checked);
        }
        else{
            let tempUser = CheckBoxFiltros.map((user) =>
            user.name === name ? { ...user, isChecked: checked } : user
            );
            setCheckBoxFiltros(tempUser);
        }
    }
    
    // if(CheckBoxFiltros){
        //     console.log(CheckBoxFiltros.some((user) => user?.isChecked !== true));
        // }
        /**checked={CheckBox} onChange={hadleCheckBox} */
        // console.log(isSecundaryFilter);
        // const [checked, handleClickCheckbox] = useChecked({nameFilter, bool})
        return (
    <>
        
        <Filters ClickAnglep={ClickAngle} widthp={width} sizep={size} href={urlFilter} onClick={(e)=>handleAngle(e)}>
            <p>{nameFilter}</p> 
            <div>
                    <input name={`AllSelect`} 
                            type={'checkbox'} 
                            ref={inputRef} 
                            // checked={CheckBoxFiltros===false &&(!CheckBoxFiltros.filter((user) => user?.isChecked !== true).length < 1)} 
                            checked={CheckBoxFiltros.filter((user) => user?.isChecked !== true).length < 1} 
                            value={nameFilter} 
                            onChange={handleCheckbox}/>
                <div className='ArrowSlide'>
                <SvgIcons arrow width={20} stroke={AngleMayor?"white":"Black"}/>
                </div>
            </div>
        </Filters>
        <SubList ClickAnglep={ClickAngle}>
            {isSecundaryFilter&&
                CheckBoxFiltros.map(props=>(<SecundaryFilter 
                                                key={props.i} 
                                                FilterName={props.name} 
                                                FilterUrl={props.url} 
                                                bools={props.bool} 
                                                checked={props?.isChecked || false} 
                                                onChange={handleCheckbox}
                                                setChecked/>))
            }
        </SubList>
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
            transform: rotate(180deg);
            transition: all .5s;
        }
        .ArrowSlide{
            ${props=> props.ClickAnglep && `transform: rotate(0); transition: all .5s;`}
        }
    }
    p{
        font-size: ${props=> props.sizep? props.sizep: '15px'};
        font-family: 'Mingzat', sans-serif;
        word-wrap: break-word;
        // color: white;
    }
`
const SubList = styled.div`
max-height: 0vh;
width: 100%;
transition: all .5s;
overflow: hidden;
visibility: hidden;
        ${props=> props.ClickAnglep &&`
        transition: all .5s;
        max-height: 100vh;
        visibility: visible;     
        `}
`
