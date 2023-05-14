import { useNavigate } from 'react-router-dom'

import { deleteEntry } from '../../utilities/entry-services'

function EntryCard({entry, setIsLoading}) {
    
    const navigate = useNavigate()

    async function handleEntryDelete(){
        console.log(entry._id)
        try {
            const deleteResponse = await deleteEntry(entry._id)
            console.log(deleteResponse)
            
            if (deleteResponse._id){
                setIsLoading(true)

            } else {
                throw new Error("Unable to complete this request")
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <div>
            <h4>{entry.mood}</h4>
            <p>{entry.post}</p>
            <button onClick={handleEntryDelete}>Delete Entry</button>
            
        </div>
    )
}

export default EntryCard