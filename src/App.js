import React from 'react'
import Home from './Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Reservation from './Reservation/Reservation'
import Admin from './Admin/Admin'
import Adminview from './Adminview/Adminview'
import Usersignup from './Usersignup/Usersignup'
import Signin from './Signin/Signin.js'
import Profile from './Profile/Profile'
import Viewmessage from './Viewmessage/Viewmessage'
import Bedrooms from './Bedrooms/Bedrooms'
import Balcony from './Balcony/Balcony'
import LargeCafe from './LargeCafe/LargeCafe'
import Wifi from './Wifi/Wifi'
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/reservation" element={<Reservation/> } />
          <Route path="/admin" element={<Admin/> } />
          <Route path="/adminview" element={<Adminview/> } />
          <Route path="/userSignup" element={<Usersignup/> } />
          <Route path="/signin" element={<Signin/> } />
          <Route path="/profile" element={<Profile/> } />
          <Route path="/viewmessage" element={<Viewmessage/> } />
          <Route path="/bedrooms" element={<Bedrooms/> } />
          <Route path="/balcony" element={<Balcony/> } />
          <Route path="/LargeCafe" element={<LargeCafe/> } />
          <Route path="/wifi" element={<Wifi/> } />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
