import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Log'
import Home from './Pages/Home'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/Localmove/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp