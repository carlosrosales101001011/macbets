import React, { useState } from 'react'
import styled from 'styled-components'
import { SvgIcons } from '../svgsJS/SvgIcons'

export const SearchFilter = () => {
  const [search, setsearch] = useState(true)

  const ClickSearch=()=>{
    setsearch(!search)
  }
  const backgroundColorSearch='#DCDBDB';

  return (
    <>
        <Searchfilter backgroundColorSearch={backgroundColorSearch} onClick={ClickSearch} searchp={search}>
        <div className="wrapper" >
          {/* <i className="fa fa-search fa-fw icon"></i> */}
          <div className='iSearch'>
            <SvgIcons className={'i'} search width={'15px'} stroke={'black'}/>
          </div>
          <input id="search" name="search" type="search" placeholder="Search"/>
        </div>
        </Searchfilter>
    </>
  )
}
const Searchfilter = styled.div`
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: ${props=> props.backgroundColorSearch};
  border-radius: 50px;
  border: 1px solid black;
  color:white;
  transition: all .2s ease-in-out;
  margin: 0 3px 0 0;
}

.wrapper:hover {
  width: 100%;
}

.wrapper:hover .iSearch .i{
  tranform: rotate(360deg) scale(1.5);
}
.iSearch{
  border-radius: 50px;
  position: relative;
  left: 5px;
  top: 1px;
}
.iSearch .i{
  display: flex;
  justify-content: center;
  position: relative;
  left: 15px;
}

input[type=search] {
    background:  ${props=> props.backgroundColorSearch};
    width: 90%;
    outline: none;
    border: 0;
    border-radius: 50px;
    color: #0F2445;
    opacity: 0;
}

input[type=search]:hover {
    width: 90%;
    padding-left: 10px; 
    outline: none ;
    border: none;
    color: none;
    opacity: 1;

}
input[type=search]:focus {
    width: 90%;
    height: 25px;
    padding-left: 25px;
    outline: none ;
    border-radius: 0 50px 50px 0;
    border: none;
    color: black;
    opacity: 1;
}
`

/*
border-radius: 10px;
    width: 100%;
    background-color: rgb(169 166 166);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    height: 65px;
    text-align: center;
    p{
      top: 0;
    }
    input{
      outline: none;
      border-radius: 7px;
      height: 25px;
      border: 1px solid;
      width: 0vw;
      opacity: 0;
      overflow: overlay;
      
    }
    ${ props=> props.searchp && `
    // input[type="search"]{
    //   transition: all 4s;
    //   width: 100vw;
    //   height: 2.4vw;
    //   opacity: 1;
    // }

    `}
    .searchPrincipal{
      display: flex;
      background-color: red;
      border-radius: 100%;
      align-items: center;
      padding: 3px;
      // position: absolute;
      // top: 25.7px;
      // right: 14px;
      .Lens{
      }
    }
    ${ props=> props.searchp && `
    .searchPrincipal{
      position: absolute;
      top: 25.7px;
      right: 14px;
    }
    p{
      transition: all 4s;
      position: absolute;
      top: 5px;
      margin: 4px 0;
      overflow: overlay;
    }
    `}
*/