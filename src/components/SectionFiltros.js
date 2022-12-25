import React, { useState } from 'react'
import styled from 'styled-components'
import "react-toggle/style.css"
import { ComponentListFilter } from './makeFilter/ComponentListFilter';
import { SearchFilter } from './makeFilter/SearchFilter';
import { SecundaryFilter } from './makeFilter/SecundaryFilter';

export const SectionFiltros = () => {
  const PackSpecialsFilters=[
        {i: 1, 
          nameFilter: 'Futbolasa', 
          subFilters:[
            {bool: false, 
              i: 1,
              name: 'Peru', 
              url: '#', 
              SecundaryFilter: [
                                {bool: false, i: 1, name: "Alianza Lima", url:'#'}, 
                                {bool: false, i: 2, name: 'Lima Cricket', url: '#'}, 
                                {bool: false, i: 3, name: 'Regatas Lima', url: '#'}, 
                                {bool: false, i: 4, name: 'Internacional', url: '#'}
                              ]
            }, 
          ]
        },
        {i: 2, 
          nameFilter: 'Voley', 
          subFilters:[
            {bool: false, 
              i: 1,
              name: 'Peru', 
              url: '#', 
              SecundaryFilter: [
                                {bool: false, i: 1, name: "Alianza Lima", url:'#'}, 
                                {bool: false, i: 2, name: 'Lima Cricket', url: '#'}, 
                                {bool: false, i: 3, name: 'Regatas Lima', url: '#'}, 
                                {bool: false, i: 4, name: 'Internacional', url: '#'}
                              ]
            }, 
          ]
        }
      ]

  const [clickv, setclickv] = useState(false)
  const [clickb, setclickb] = useState(false)
  // console.log(clickv, clickb);
  return (
    <ContainerFiltros clickvp={clickv} clickbp={clickb}>
      <SearchFilter/>
        <span>
        <SecundaryFilter FilterName={"En vivo"} FilterUrl={"#"} principalFiltro/>
          <SecundaryFilter FilterName={"En breve"} FilterUrl={"#"} principalFiltro/>
          <SecundaryFilter FilterName={"En breve"} FilterUrl={"#"} principalFiltro/>
          <SecundaryFilter FilterName={"En breve"} FilterUrl={"#"} principalFiltro/>
          <SecundaryFilter FilterName={"En breve"} FilterUrl={"#"} principalFiltro/>
          {/* <label>
                <input  name={"En vivo"} type={'checkbox'} value={"En_vivo"} onClick={clickedInput}/> 
                <p>En vivo</p>
          </label>
          <label>
              <input  name={"En breve"} type={'checkbox'} value={"En_breve"} onClick={clickedInput}/> 
              <p>En breve</p>
          </label> */}
        </span>
      {
      Object.values(PackSpecialsFilters).map((props)=>(
          <ComponentListFilter NameFilter={props.nameFilter} key={props.i} subFilters={props.subFilters}/>))
      } 
    </ContainerFiltros>
  )
}
const ContainerFiltros = styled.div`
    position: sticky;
    // background-color: red;
    top: 55px;
    height: 100%;
    // border-radius: 6px;
    padding: 6px 3px;
    span{
      label{
        display: flex;
        align-items: center;
        //background-color: rgb(188, 188, 188);
        margin: 8px 0;
        border-radius: 5px;
        padding: 4px;
        &:hover{
          transition: all .5s;
        }
        input{
          margin: 0 15px 0 0 ;
        }
        p{
          font-family: 'Mingzat', sans-serif;
        }
      }
    }
`