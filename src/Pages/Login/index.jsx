import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';

import { login } from '../../utilities/auth-services';
import { setUserToken } from '../../utilities/auth-token';

import { UserContext } from '../../data';

function Login (props){
    const [loginForm, setLoginForm] = useState(
        { username: "",
         password: ""})
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            const incomingUser = await login(loginForm)
            console.log(incomingUser)
           
         
            if (incomingUser.token){
                navigate('/timeline')
                setUserToken(incomingUser.token)
                setUser(incomingUser.user)
                setLoginForm({ username: "",
                password: ""})

            } else {
                navigate('/Login')
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    function handleChange(evt){
        setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value })
    }

    return (
        <section>
            <h4>Log In</h4>
            <form
            onSubmit={handleSubmit}>
                <label>username</label>
                <input 
                type="text"
                name="username"
                value={loginForm.username}
                onChange={handleChange}
                />
                <label>password</label>
                <input 
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                />
                <button type="submit">Create account</button>

            </form>

        </section>
    )
}

export default Login