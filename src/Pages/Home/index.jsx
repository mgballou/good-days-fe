import { useContext } from 'react';


import { UserContext } from '../../data';

function Home(props){

    const {user} = useContext(UserContext)
    

    return (
        <section className="container mx-auto bg-purple-300/25 h-3/4 my-12 flex flex-col items-center rounded-3xl">
            {user ? <p>Hello, {user.username}! Welcome back.</p> : <p>Welcome to Good Days, please log in/register to continue</p>}
        </section>
    )
}

export default Home