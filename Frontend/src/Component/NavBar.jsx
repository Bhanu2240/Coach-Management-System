import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({isloggin , setIsloggin}) => {



    return (
        <div className='flex gap-10'>
            <div>
                <Link to='/'>
                    {/* <img src="" alt="" /> */}
                </Link>
            </div>
            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/maintenance'>Maintenance Tasks</Link>
                    </li>
                    <li>
                        <Link to='/'>Contect </Link>
                    </li>
                </ul>
            </nav>

            <div>
                {
                    !isloggin&&
                    <Link to='/login'>
                        <button>login</button>
                    </Link>
                }
                {
                    !isloggin&&
                    <Link to='/singup'>
                        <button>singup</button>
                    </Link>
                    
                }
                {
                    isloggin&&
                    <Link to="/">
                        <button onClick={()=>setIsloggin(false)} >logout</button>
                    </Link>
                }
                {
                    isloggin&&
                    <Link to="/coachprofile">
                        <button>Coach Profile</button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default NavBar