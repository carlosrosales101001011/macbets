import React from 'react'
import { ListNotifications } from './ListNotifications';

export const NotificationBar = () => {

  const NotificationEmpty = false;


  return (
    <>
      <div className="notification-bar_title utilityContent"><p>Your notifications</p></div>
      { NotificationEmpty ? 
          <div className="content_Emty"><p>Empty</p></div> : 
          <ul className="content_notification LineTop">
            <ListNotifications />
          </ul> 
      }
    </>
  )
}
