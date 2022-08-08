import React from 'react'

export const ListNotifications = () => {
    let NotificationsIsEmpty=true;
  return (
    <>
    <div className="notification-bar_title utilityContent"><p>Your notifications</p></div>
    {NotificationsIsEmpty?
        <div className="content_Emty"><p>Empty</p></div> : 
        <ul className="list-notifications">
            <li>Lista uno</li>
            <li>Lista dos</li>
            <li>Lista tres</li>
        </ul>
    }
    </>
  )
}
