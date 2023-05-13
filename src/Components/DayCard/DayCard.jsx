import EntryCard from "../EntryCard/EntryCard"

import { Link } from 'react-router-dom'

import { format } from 'date-fns'

function DayCard({day, setIsLoading}){
    const entriesArray = day.entries?.map((entry) => {
        return (
            <EntryCard 
            key={entry._id}
            entry={entry}
            setIsLoading={setIsLoading}/>
        )
    })


    return (
        <div>
            <Link to={`/timeline/${day._id}`}><h3>{format( new Date(day.date), 'MMMM d, y')}</h3></Link>
            
            <p>Overall Mood: {day.aggregate_mood}</p>
            {entriesArray}
        </div>
    )
}

export default DayCard