import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Siginup from './Siginup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Card from './Card'
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Siginup/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/Card' element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
