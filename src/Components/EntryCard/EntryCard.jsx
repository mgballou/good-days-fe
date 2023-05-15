import { useNavigate } from 'react-router-dom'

import { deleteEntry } from '../../utilities/entry-services'

function EntryCard({ entry, setIsLoading }) {

    const navigate = useNavigate()

    async function handleEntryDelete() {
        console.log(entry._id)
        try {
            const deleteResponse = await deleteEntry(entry._id)
            console.log(deleteResponse)

            if (deleteResponse._id) {
                setIsLoading(true)

            } else {
                throw new Error("Unable to complete this request")
            }
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className='bg-purple-800/25 rounded-xl w-1/5 h-40 m-1'>
            <div className='flex flex-row justify-between items-center px-2'>
            <h4 className=''>{entry.mood}</h4>
            <button className="my-4 border border-purple-800 px-2 py-1 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300" onClick={handleEntryDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
            </div>
            


            <p className='break-all px-2'>{entry.post}</p>
            

        </div>
    )
}

export default EntryCard