import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';


import { register } from '../../utilities/auth-services';
import { setUserToken } from '../../utilities/auth-token';

import { UserContext } from '../../data';

function Register(props){
    const [registerForm, setRegisterForm] = useState(
        { username: "",
         password: ""})
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const newUser = await register(registerForm)
            
           
         
            if (newUser.token){
                navigate('/timeline')
                setUserToken(newUser.token)
                setUser(newUser.user)
                setRegisterForm({ username: "",
                password: ""})

            } else {
                navigate('/register')
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function handleChange(evt){
        setRegisterForm({ ...registerForm, [evt.target.name]: evt.target.value })
    }

    return (
        <section className="container mx-auto bg-purple-300/25 h-3/4 my-12 flex flex-col items-center rounded-3xl">
            <h4 className='font-bold my-16'>Create an account</h4>
            <form
            className='flex flex-col max-w-lg mx-auto items-center'
            onSubmit={handleSubmit}>
                <label className='mb-4'>username</label>
                <input
                className='text-black p-2 rounded' 
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleChange}
                />
                <label className='my-4'>password</label>
                <input
                className='text-black p-2 rounded' 
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleChange}
                />
                <button className="mt-8 border border-purple-800 px-4 py-2 rounded-lg  bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white hover:border-white transition-duration-300" type="submit">Sign Up</button>

            </form>

        </section>
    )
}

export default Register