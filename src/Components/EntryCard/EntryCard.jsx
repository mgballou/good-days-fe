function EntryCard({entry}) {

    return (
        <div>
            <h4>{entry.mood}</h4>
            <p>{entry.post}</p>
        </div>
    )
}

export default EntryCard