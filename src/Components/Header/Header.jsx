import { useContext } from 'react';

import { Link } from 'react-router-dom'

import { UserContext } from '../../data';

function Header(props){
    const {user} = useContext(UserContext)

    return (
        <header>
            <h1>Good Days</h1>
            <nav>
                <Link to="/">Home</Link>
                {user ? 
                <>
                <Link to="/timeline">Timeline</Link>
                <Link to="/logout">Log Out</Link>
                </>
                : 
                <>
                <Link to="/register">Register</Link>
                <Link to="/login">Log In</Link>
                </>}
                
                
                
                <p>{user?.username}</p>

            </nav>
        </header>
    )
}

export default Header