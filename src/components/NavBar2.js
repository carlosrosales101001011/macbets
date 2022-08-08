import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenDropdown } from "../action/ui";

export const NavbarNavigation = () => {

  const [dropdown, setDropdown] = useState(false)
  console.log(dropdown);      
  const handledropdownOpen = (e)=>{
    setDropdown(!dropdown)
    
  }
  // const {dropdownOpen}= useSelector(state=>state.ui)
    
    return (
    <div className="Navigation-barr">
      <div className="Navigation-logo">
        <div className="btn_logo">
          <p>MACBets</p>
        </div>
      </div>
      <div className="Navigation-user_active">
        {/*  */}
        <div className="container_list-menu"  onClick={handledropdownOpen}>
          <div className="icon-box btn_dropdown">
            <span className="box-icon-NavBar icon-NavBar">
              <p>Mi cartilla actual</p>
            </span>
          </div>
          {dropdown && (<div className={`content_icon-box content_dropdown content_dropdown--active`}>
          </div>)
          }
          
        </div>
        {/*  */}
        <div className="container_list-menu" onClick={handledropdownOpen}>
          <div className="icon-notification btn_dropdown">
            <span className="notification-icon-NavBar icon-NavBar">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
              >
                    <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z" />
              </svg>
            </span>
          </div>
          <div className={`content_icon-notification content_dropdown`}>
          </div>
        </div>
        {/*  */}
        <div className="container_list-menu" onClick={handledropdownOpen}>
          <div className="icon-user btn_dropdown">
            <span className="user-icon-NavBar icon-NavBar">
              <p>c</p>
            </span>
          </div>
          <div className={`content_icon-user content_dropdown`}>
          </div>
        </div>
      </div>  
      {/* <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div> */}
    </div>
  );
};
