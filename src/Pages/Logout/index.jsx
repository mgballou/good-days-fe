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
        <p>Successfully logged out</p>
    )
}

export default Logout