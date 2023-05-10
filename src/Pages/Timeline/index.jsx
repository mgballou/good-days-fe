import { useState, useEffect } from 'react'
import { getDays } from '../../utilities/day-services'

import { Link } from 'react-router-dom'

import Loading from '../../Components/Loading/Loading'
import DayCard from '../../Components/DayCard/DayCard'


function Timeline(props){

    const [days, setDays] = useState(null)

    const [isLoading, setIsLoading] = useState(true)
    

    async function handleRequest(){
        try {
            const daysData = await getDays()
            setDays(daysData)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function loaded(){
        console.log(days)
        return days?.map((day) => {
            return (
                <DayCard 
                key={day._id}
                day={day}
                />
                
            )
        })
    }

    useEffect(() => {handleRequest()}, [isLoading])

    return (
        // refactor link and separate page to on-page form here
        <section>
            <p> Timeline view</p>

            <Link to="/timeline/create">
            <button>Add a Day</button>
            </Link>
            {isLoading ? <Loading/> : loaded()}


        </section>
    )

}

export default Timeline