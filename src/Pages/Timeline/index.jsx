import { useState, useEffect } from 'react'


import { getDays, createDay } from '../../utilities/day-services'

import { useNavigate } from 'react-router-dom'


import Loading from '../../Components/Loading/Loading'
import DayCard from '../../Components/DayCard/DayCard'


function Timeline(props) {

    const [days, setDays] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [newForm, setNewForm] = useState({
        date: new Date()
    })

    const navigate = useNavigate()


    async function handleRequest() {
        try {
            const daysData = await getDays()
            setDays(daysData)
            setIsLoading(false)

        } catch (error) {
            console.log(error)

        }
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        const dateParts = newForm.date.split("-")
        const formattedDate = dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2]
        const submission = {date: formattedDate}
        try {
            const newDay = await createDay(submission)


            if (newDay._id) {
                navigate(`/timeline/${newDay._id}`)
                setIsLoading(true)
                setNewForm({
                    date: new Date()
                })

            } else {
                //display error message on screen here
            }

        } catch (error) {
            console.log(error)

        }
    }

    function handleChange(evt) {
        
        const dateParts = evt.target.value.split("-")
        const formattedDate = dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2]
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value})
    }

    function loaded() {
        
        return days?.map((day) => {
            return (
                <DayCard
                    key={day._id}
                    day={day}
                    setIsLoading={setIsLoading}
                />

            )
        })
    }

    useEffect(() => { handleRequest() }, [isLoading])

    return (
        // refactor link and separate page to on-page form here
        <section className="container mx-auto bg-purple-300/25 h-3/4 w-2/3 my-12 flex flex-col items-center rounded-3xl overflow-y-scroll">
            <p className='text-2xl'>All Your Journals</p>

            <form 
            className='flex flex-row w-full justify-center items-center space-x-4'
            
            onSubmit={handleSubmit}>
                
                <input
                className='text-black p-2 rounded'
                    type="date"
                    name="date"
                    value={newForm.date}
                    
                    onChange={handleChange}
                />
                <button className="my-4 border border-purple-800 px-4 py-2 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300" type="submit">Journal</button>
            </form>

            {isLoading ? <Loading /> : loaded()}


        </section>
    )

}

export default Timeline