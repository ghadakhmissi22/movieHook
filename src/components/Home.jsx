import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'    
import Description from '../pages/Description'
import Erreur from '../pages/Erreur'
import Nave from './Nave'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <Nave/>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            {/* c'est une route dynamique */}
            <Route path='/movie/:id' element={<Description/>}></Route>
            <Route path='/*' element={<Erreur/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Home