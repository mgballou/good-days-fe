import { useContext, useEffect } from 'react';

import { UserContext } from '../../data';

import { clearUserToken } from '../../utilities/auth-token';

function Logout(props){
    const {setUser} = useContext(UserContext)
    
    function clearUserInfo(){
        clearUserToken()
        setUser(null)
    }


    useEffect(() => {clearUserInfo()}, [])

    return (
        <section className="container mx-auto bg-purple-300/25 h-3/4 my-12 flex flex-col items-center rounded-3xl">
            <p>Successfully logged out</p>
        </section>
    )
}

export default Logout