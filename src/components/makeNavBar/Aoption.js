import React from 'react'

export const Aoption = ({href, nameOption}) => {
  return (
    <a className='content-dropdown-option' href={href}><div className='Option-Txt'>{nameOption}</div></a>
  )
}
