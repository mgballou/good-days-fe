import {Routes, Route} from 'react-router'

import Home from '../../Pages/Home'
import Timeline from '../../Pages/Timeline'
import Day from '../../Pages/Day'
import CreateEntry from '../../Pages/CreateEntry'
import Register from '../../Pages/Register'
import Login from '../../Pages/Login'
import Logout from '../../Pages/Logout'


function Main(props){

    return (
        <Routes>                
            <Route path="/" element={<Home/>} />
            <Route path="/timeline" element={<Timeline/>} />
            
            <Route path="/timeline/:id" element={<Day/>} />
            <Route path="/timeline/:id/createentry" element={<CreateEntry/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
        </Routes>

    )
}

export default Main