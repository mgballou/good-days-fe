import {useState} from 'react'
import { useParams } from 'react-router'

import { useNavigate } from 'react-router-dom'

// import { format } from 'date-fns'

import { createEntry } from '../../utilities/entry-services'

function CreateEntry(props){
    const [newForm, setNewForm] = useState({
        post:"",
        mood: "5"
    })
    const {id} = useParams()
    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newEntry = await createEntry(id, newForm)
           
         
            if (newEntry._id){
                navigate(`/timeline/${id}`)

            } else {
                //display error message on screen here
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function handleChange(evt){
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value })
    }

    return (
        <section>
            <h3> Create new entry</h3>
            <form onSubmit={handleSubmit}>
            <label>New Entry</label>
            <textarea 
            type="text" 
            name="post" 
            value ={newForm.post}
            placeholder={newForm.post}
            onChange={handleChange}
            />
            <label>Mood</label>
            <select 
            name="mood"
            value={newForm.mood}
            placeholder={newForm.mood}
            onChange={handleChange} 
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

            </select>
            <button type="submit">Save</button>
           </form>
            
        </section>
    )
}

export default CreateEntry