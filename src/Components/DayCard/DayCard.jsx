import EntryCard from "../EntryCard/EntryCard"

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
            <h3>Date: {day.date}</h3>
            <p>Overall Mood: {day.aggregate_mood}</p>
            {entriesArray}
        </div>
    )
}

export default DayCard