import { Link } from 'react-router-dom'

function Header(props){

    return (
        <header>
            <h1>Good Days</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/timeline">Timeline</Link>
                <Link to="/register">Register</Link>

            </nav>
        </header>
    )
}

export default Header