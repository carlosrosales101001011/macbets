import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            {/* <Route path="/login" element={<LoginScreen />} /> */}
            <Route path="/login" element=
            {<PublicRouter>
              <LoginScreen/>
            </PublicRouter>} 
            />
            <Route path='/*' element={
            <PrivateRoute>
              <DashboardRoutes/>
            </PrivateRoute> 
          }/>
            {/* <Route path='/*' element={<DashboardRoutes/>}/> */}
        </Routes>
    </div>
    </BrowserRouter>
  )
}
