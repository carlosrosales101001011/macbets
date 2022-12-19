import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components'
import "react-toggle/style.css"
import { useState } from 'react';
import { ComponentListFilter } from './makeFilter/ComponentListFilter';
import { ComponentFiltersFilter } from './makeFilter/ComponentFiltersFilter';
import { SearchFilter } from './makeFilter/SearchFilter';

export const SectionFiltros = () => {
  const PackSpecialsFilters={
      f1: 
        {i: 1, 
          nameFilter: 'Futbolasa', 
          subFilters:[{i: 1, name: 'Peru', url: '#'}, {i: 2, name: 'Lima', url: '#'}]
        }
  }

  return (
    <ContainerFiltros>
      <SearchFilter/>
      <ComponentFiltersFilter nameFilter={"En vivo"} urlFilter={"#"} width={"15px"}/>
      <ComponentFiltersFilter nameFilter={"En breve"} urlFilter={"#"} width={"15px"}/>
      {
      Object.values(PackSpecialsFilters).map((props)=>(
          <ComponentListFilter NameFilter={props.nameFilter} key={props.i} subFilters={props.subFilters}/>))
      } 
    </ContainerFiltros>
  )
}
const ContainerFiltros = styled.div`
    position: sticky;
    bottom: 10px;
    margin: 2px 1px 1px 20px;
    // border: 1px solid black;
    background-color: #cdcdcd;
    height: 100%;
    // border-radius: 6px;
    padding: 6px 3px;
    z-index: 1;

    
`