import React from 'react'

export const SvgIcons = ({closeEquis, caretBlack, className, coupon, search, arrow, bell, wallet, stroke, width}) => {

  return (
    <>
        {wallet &&
            <svg width={width} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
        </svg>}
        
        {bell &&
            <svg width={width} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>}
        {arrow &&
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={width} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="6 9 12 15 18 9" />
        </svg>}
        {search &&
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" 
          width={width} height={width} viewBox="0 0 24 24" strokeWidth="1.5" stroke={stroke} 
          fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          // <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width={width}  viewBox="0 0 512 512">
          //   <path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"  fill="none" 
          //   stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
          //   <path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" 
          //   stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
          //   <path fill="none" stroke="currentColor" strokeLinecap="round" 
          //   strokeMiterlimit="10" strokeWidth="32" d="M283.64 283.64L336 336"/>
          //   </svg>
        }
        {coupon &&
          <svg xmlns="http://www.w3.org/2000/svg" 
          className={`icon icon-tabler icon-tabler-ticket ${className}`} 
          width={width} height={width} 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke={stroke} 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="15" y1="6" x2="15" y2="18" />
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
          </svg>
        }
        {caretBlack &&
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" 
          width={width} height={width} viewBox="0 0 24 24" strokeWidth="1.5" 
          stroke='black' fill={stroke} strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
        </svg>
        }
        {closeEquis &&
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width={width} viewBox="0 0 512 512">
            <path fill="none" stroke={stroke} strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/>
            </svg>
        }
    </>
  )
}
