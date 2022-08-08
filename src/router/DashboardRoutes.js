import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cartillas } from '../components/makeNavBar/Cartillas'
import { NavBar } from '../components/makeNavBar/NavBar'
import { PanelNotification } from '../components/makeNavBar/PanelNotification'
import { User } from '../components/makeNavBar/User'

export const DashboardRoutes = () => {
  return (
<>
    <NavBar/>
    <div className={"container"}>
        <Routes>

            <Route path="/Notifications" element={<PanelNotification />} />
            <Route path="/User" element={<User />} />
            <Route path="/Mis-cartillas" element={<Cartillas />} />
            
        </Routes>
    </div>
</>
  )
}
