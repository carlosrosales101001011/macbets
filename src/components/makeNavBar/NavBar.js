import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Aoption } from './Aoption'
import { ElementBarr } from './ElementBarr'
import { ListNotifications } from './ListNotifications'
import { ModeNocturno } from './ModeNocturno'
import { useDispatch } from "react-redux";
import { uiCloseMenu, uiOpenMenu } from "../../action/ui";
import { SvgIcons, Walletsvg } from '../svgsJS/SvgIcons'

export const NavBar = () => {
    // const isDesktopOrLaptop=true, isBigScreen=true, isTabletOrMobile=true, isPortrait=true, isRetina=true;
    const dispatch= useDispatch();
    
    const isDesktopMax = useMediaQuery({query: '(min-width: 1200px)'}) //red
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })//blue
    const isMobileLands = useMediaQuery({ query: '(min-width: 576px)' })//green
    const isPortrail = useMediaQuery({ query: '(min-width: 440px)' })//purple
    


    const isBigTablet = useMediaQuery({ query: '(min-width: 1024px)' })//blue
    const colorOfNavBar = "white"
    
        const OpenMenu=()=>dispatch(uiOpenMenu())
        const CloseMenu = ()=> dispatch(uiCloseMenu())
        const [state, setState] = useState(false)
    //* OPT ==> OPCIONAL
    const ObjectMenuBarr = [
        {
            id: 1,
            name: 'Mis cartillas',
            icon: (isMobileLands) && <div onClick={()=> setState(true)} className='ElementBarr_right_options_option_text'><p style={{color: colorOfNavBar}}>Mis cartillas</p></div>,
            containerDropdown: (isDesktop || isDesktopMax) && <p>Mis cartillas</p>,
            containerResponsive: ( !isDesktop && !isDesktopMax) && 'Mis-Cartillas modal',
        },
        {
            id: 2,
            name: 'Mi wallet (Tienes 70 en saldo)',
            icon: (isMobileLands) && <SvgIcons wallet={true} stroke={colorOfNavBar} width={25}/>,
            containerDropdown: (isDesktop || isDesktopMax) && <p>Mi wallet</p>,
            containerResponsive: ( !isDesktop && !isDesktopMax) && 'Wallet modal',
        },
        {
            id: 3,
            name: 'Mis notificaciones',
            icon: (isMobileLands) && <SvgIcons bell={true} stroke={colorOfNavBar} width={25}/>,
            containerDropdown: (isDesktop || isDesktopMax) && <p>Mis notificaciones</p>,
            containerResponsive: ( !isDesktop && !isDesktopMax) && 'Notificaciones modal',
        },
        {
            id: 4,
            name: 'User',
            icon: 
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <div className='ElementBarr_right_options_option_icon containerAvatar'>
                        <img className='avatarPerfil' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/532.jpg' alt='icon-menu'/>
                    </div>
                    {(isMobileLands )&&
                    <div className='ElementBarr_right_options_option_text nameAvatar'>
                        <p style={{color: colorOfNavBar}}>Carlos</p>
                    </div>  
                    }
                </span>,
            containerDropdown: 
                (isDesktop || isDesktopMax) &&
                <>
                <Aoption nameOption={'Perfil'} href={'.'}/>
                <ModeNocturno/>
                <Aoption nameOption={'Configuración'} href={'.'}/>
                <Aoption nameOption={'Salir'} href={'.'}/>
                </>,
            containerResponsive: '',
            ForItemUsuario:  ( !isDesktop && !isDesktopMax) ? OpenMenu : CloseMenu
        },
        
    ]

  return (
    <>
        <div className='component-navBar'>
            <div className={`ElementBarr_left`}>
                <div className='ElementBarr_left_logo'><p style={{color: colorOfNavBar}}>MACBets</p></div>
            </div>
            <div className='ElementBarr_right'>
                <div className='ElementBarr_right_options'>

                    {
                    ObjectMenuBarr.map(e=>(
                        <ElementBarr 
                            key={e.id} 
                            iconDropdown={e.icon} 
                            containerDropdown={e.containerDropdown} 
                            OptionalResponsive={e.containerResponsive} 
                            ForItemUsuario={e.ForItemUsuario} 
                            setstateModal={setState} 
                            stateModal={state}
                            title={e.name}
                            />
                                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}
