import {Routes, Route} from 'react-router'

import Home from '../../Pages/Home'
import Timeline from '../../Pages/Timeline'
import Day from '../../Pages/Day'
import CreateEntry from '../../Pages/CreateEntry'


function Main(props){

    return (
        <Routes>                
            <Route path="/" element={<Home/>} />
            <Route path="/timeline" element={<Timeline/>} />
            
            <Route path="/timeline/:id" element={<Day/>} />
            <Route path="/timeline/:id/createentry" element={<CreateEntry/>} />
        </Routes>

    )
}

export default Main