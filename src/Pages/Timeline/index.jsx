import { useState, useEffect } from 'react'


import { getDays, createDay } from '../../utilities/day-services'

import {useNavigate } from 'react-router-dom'


import Loading from '../../Components/Loading/Loading'
import DayCard from '../../Components/DayCard/DayCard'


function Timeline(props){

    const [days, setDays] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [newForm, setNewForm] = useState({
        date: new Date()
    })

    const navigate = useNavigate()
    

    async function handleRequest(){
        try {
            const daysData = await getDays()
            setDays(daysData)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newDay = await createDay(newForm)
            // setIsLoading(true)
            // setNewForm({
            //     date: new Date()
            // })
            console.log(newDay)
            if (newDay._id){
                navigate(`/timeline/${newDay._id}`)

            } else {
                //display error message on screen here
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function handleChange(evt){
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value })
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

           <form onSubmit={handleSubmit}>
            <label>Select a Day</label>
            <input 
            type="date" 
            name="date" 
            value ={newForm.date}
            placeholder={newForm.date}
            onChange={handleChange}
            />
            <button type="submit">Journal</button>
           </form>
           
            {isLoading ? <Loading/> : loaded()}


        </section>
    )

}

export default Timeline