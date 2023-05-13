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
            console.log(newUser)
           
         
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
        <section>
            <h4>Create an account</h4>
            <form
            onSubmit={handleSubmit}>
                <label>email</label>
                <input 
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleChange}
                />
                <label>password</label>
                <input 
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleChange}
                />
                <button type="submit">Create account</button>

            </form>

        </section>
    )
}

export default Register