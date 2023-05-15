import { useContext } from 'react';

import { Link } from 'react-router-dom'

import { UserContext } from '../../data';

function Header(props) {
    const { user } = useContext(UserContext)

    return (
        <header className=''>

            <nav className="bg-black/50 rounded-md">
                <div className='px-8 border border-white rounded-md'>
                    <div className='flex justify-between'>
                        <div>
                        <Link to="/" className='flex items-center py-4 px-4 my-2 hover:bg-purple-300/50 hover:rounded-lg'>
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                            <span className='font-bold'>Good Days</span>
                            </Link>
                        </div>

                        {user ?
                            <div className='flex space-x-4'>
                                <Link to="/timeline" className='flex items-center py-3 px-4 my-2 hover:bg-purple-300/50 hover:rounded-lg'>Timeline</Link>
                                <Link to="/logout" className='flex items-center py-3 px-4 my-2 hover:bg-purple-300/50 hover:rounded-lg'>Log Out</Link>
                            </div>
                            :
                            <div className='flex space-x-4'>
                                <Link to="/login" className='flex items-center py-3 px-4 my-2 hover:bg-purple-300/50 hover:rounded-lg'>Log In</Link>
                                <Link to="/register" className='flex items-center py-2 px-4 my-2 rounded-lg bg-purple-300 text-purple-800 hover:bg-purple-600/50 hover:text-white transition-duration-300'>Register</Link>
                            </div>}
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header