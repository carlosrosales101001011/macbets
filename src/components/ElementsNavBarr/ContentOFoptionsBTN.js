import React, {useRef, useState} from 'react'

export const ContentOFoptionsBTN = ({nameBTN, contentBTN, needContent, clickClose}) => {

  const ref = useRef(null)
  const aparecerModal=()=>{

  }

  return (
    <>
      <div className={'linea margin-top BTNoptionMenu closeOver'}>
        <span className={'nameBTN closeOver'}>
          { nameBTN }
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right closeOver" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
    </>
  )
}
