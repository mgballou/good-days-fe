import EntryCard from "../EntryCard/EntryCard"

import { format } from 'date-fns'

function DayCard({day}){
    const entriesArray = day.entries?.map((entry) => {
        return (
            <EntryCard 
            key={entry._id}
            entry={entry}/>
        )
    })


    return (
        <div>
            <h3>{format( new Date(day.date), 'MMMM d, y')}</h3>
            <p>Overall Mood: {day.aggregate_mood}</p>
            {entriesArray}
        </div>
    )
}

export default DayCard