import React from 'react'
import { Link } from 'react-router-dom'
import { BiTrain } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className='navbar bg-blue-100 py-5'>
        <nav className='container mx-auto flex items-center justify-between'>
        <div className="logo text-[#0057D9] font-semibold text-xl flex">
            <Link to='/' className='flex items-center gap-1'>Lara <span  className='text-black'><BiTrain/></span> Junction</Link>
        </div>
        <ul className='links'>
            <li className='border border-[#0057D9] rounded-sm py-2 px-4'>
                <Link to='/'>Login</Link>
            </li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar