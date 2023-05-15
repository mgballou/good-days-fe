import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


import { getDay, updateDay } from '../../utilities/day-services'

import { format } from 'date-fns'

import EntryCard from '../../Components/EntryCard/EntryCard'
import Loading from '../../Components/Loading/Loading'




function Day(props) {
    const { id } = useParams()
    // const navigate = useNavigate()
    const [day, setDay] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [newForm, setNewForm] = useState({
        newFlag: ""
    })

    const entriesArray = day?.entries.map((entry) => {
        return (
            <EntryCard
                key={entry._id}
                entry={entry} 
                setIsLoading={setIsLoading}/>
        )
    })

    const flagsArray = day?.flags.map((flag, idx) => {
        return (
            <p
                key={idx}
            >
                {flag}
            </p>
        )
    })


    async function handleRequest() {
        try {
            const dayData = await getDay(id)
            setDay(dayData)
            setIsLoading(false)

        } catch (error) {
            console.log(error)

        }
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const allFlags = { flags: [...day.flags, newForm.newFlag] }
            const updatedDay = await updateDay(id, allFlags)

            if (updatedDay._id) {
                // navigate(`/timeline/${updatedDay._id}`)
                setIsLoading(true)
                setNewForm({newFlag: ""})

            } else {
                //display error message on screen here
            }

        } catch (error) {
            console.log(error)

        }
    }

    function handleChange(evt) {
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value })
    }



    function loaded() {
        return (
            <section className="container mx-auto bg-purple-300/25 h-3/4 my-12 flex flex-col items-center rounded-3xl">
                <h3 className='text-2xl'>{format(new Date(day.date), 'MMMM d, y')}</h3>
                <p className='text-xl'>Overall Mood: {day.aggregate_mood}</p>
                <div className='flex flex-row flex-wrap justify-center'>

                {entriesArray}
                </div>
                <Link to={`/timeline/${day._id}/createentry`}><button className="my-4 border border-purple-800 px-4 py-2 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300">Create New Entry</button></Link>

                <div className='flex flex-row justify-between mt-12'>
                    <div className='w-1/2'>
                    <h3>Current Flags</h3>
                    {flagsArray}

                    </div>
                    <form 
                    className='w-1/2'
                    onSubmit={handleSubmit}>
                        <label>Add a Flag</label>
                        <input
                            type="text"
                            name="newFlag"
                            value={newForm.newFlag}
                            placeholder={newForm.newFlag}
                            onChange={handleChange}
                        />
                        <button className="my-4 border border-purple-800 px-4 py-2 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300" type="submit">Add Flag</button>
                    </form>

                </div>

            </section>

        )
    }

    
    useEffect(() => {handleRequest()}, [isLoading])

    return (
        <>
            {isLoading ? <Loading /> : loaded()}
        </>
    )
}

export default Day