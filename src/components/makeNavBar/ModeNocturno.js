import React, { useState } from 'react'

export const ModeNocturno = () => {
    const [mode, setMode] = useState(false);

  return (
    <a className='content-dropdown-option' onClick={()=>setMode(!mode)} href={'.'}><div className='Option-Txt'>{mode?'Modo nocturno: activado': 'Modo nocturno: desactivado'}</div></a>
  )
}
