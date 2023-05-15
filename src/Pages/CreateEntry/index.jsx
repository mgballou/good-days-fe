import { useState } from 'react'
import { useParams } from 'react-router'

import { useNavigate } from 'react-router-dom'

// import { format } from 'date-fns'

import { createEntry } from '../../utilities/entry-services'

function CreateEntry(props) {
    const [newForm, setNewForm] = useState({
        post: "",
        mood: "5"
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const newEntry = await createEntry(id, newForm)


            if (newEntry._id) {
                navigate(`/timeline/${id}`)

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

    return (
        <section className="container mx-auto bg-purple-300/25 h-3/4 my-12 flex flex-col items-center rounded-3xl">
            <h3> Create new entry</h3>
            <form
                className='flex flex-col items-center h-3/4 w-3/4'
                onSubmit={handleSubmit}>
                
                <textarea
                    className='text-black text-left rounded h-3/4 w-1/2 px-4'
                    type="text"
                    name="post"
                    value={newForm.post}
                    placeholder={newForm.post}
                    onChange={handleChange}
                />
                <label>How's your mood?</label>
                <div className='flex flex-row space-x-2'
                    onChange={handleChange}
                >
                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="1"></input>
                        <span>
                            1
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="2"></input>

                        <span>
                            2
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="3"></input>

                        <span>
                            3
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="4"></input>
                        <span>
                            4
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="5"></input>

                        <span>
                            5
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="6"></input>
                        <span>
                            6
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="7"></input>
                        <span>
                            7
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="8"></input>
                        <span>
                            8
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="9"></input>
                        <span>
                            9
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <input name="mood" type="radio" value="10"></input>
                        <span>
                            10
                        </span>
                    </label>



                </div>
                <button className="my-4 border border-purple-800 px-4 py-2 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300" type="submit">Save</button>
            </form>

        </section>
    )
}

export default CreateEntry