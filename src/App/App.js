// import './App.css'



import { UserContext } from '../data';
import { useState } from 'react';


import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';


function App() {
  const { Provider: UserInfo } = UserContext
  const [currentUser, setCurrentUser] = useState(null)
  return (
    
    <div className='h-screen bg-slate-700 text-neutral-100'>
      <UserInfo value={{
        user: currentUser,
        setUser: setCurrentUser
      }}>
        <Header />
        <Main />
      </UserInfo>
    </div>
    
  );
}

export default App;
