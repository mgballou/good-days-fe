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
            <section>
                <h3>{format(new Date(day.date), 'MMMM d, y')}</h3>
                <p>Overall Mood: {day.aggregate_mood}</p>
                {entriesArray}
                <Link to={`/timeline/${day._id}/createentry`}><button>Create New Entry</button></Link>

                <div>
                    <h3>Current Flags</h3>
                    {flagsArray}
                    <form onSubmit={handleSubmit}>
                        <label>Add a Flag</label>
                        <input
                            type="text"
                            name="newFlag"
                            value={newForm.newFlag}
                            placeholder={newForm.newFlag}
                            onChange={handleChange}
                        />
                        <button type="submit">Add Flag</button>
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