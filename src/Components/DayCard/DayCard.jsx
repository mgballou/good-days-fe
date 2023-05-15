import EntryCard from "../EntryCard/EntryCard"

import { Link } from 'react-router-dom'

import { format } from 'date-fns'

function DayCard({ day, setIsLoading }) {
    const entriesArray = day.entries?.map((entry) => {
        return (
            <EntryCard
                key={entry._id}
                entry={entry}
                setIsLoading={setIsLoading} />
        )
    })


    return (
        <div className=" w-full flex flex-col items-center px-4">
            <div className="flex justify-between w-full px-8 border rounded mx-2">
            <Link
                to={`/timeline/${day._id}`}
                className="text-xl underline hover:text-purple-800"
            >
                <h3>{format(new Date(day.date), 'MMMM d, y')}</h3>
            </Link>

            <p className="text-xl">{day.aggregate_mood}</p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-between w-full px-14">
            {entriesArray}

            </div>

        </div>
    )
}

export default DayCard