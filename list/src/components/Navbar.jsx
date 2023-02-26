import React  from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div className='rounded-div flex items-center justify-between h-20  font-bold  bg-black'>
        <h1 className='text-2xl ml-10 text-white  shadow-lg sm:shadow-cyan-500/50 cursor-pointer' >
                Tradebrains portal
            </h1>
            <div className='hidden md:block mr-10  '>
                <Link to='/' className='p-4 hover:text-zinc-500 text-white font-bold  '>Home</Link>
                <Link to='/watchlist' className='p-4 hover:text-zinc-500 text-white font-bold '>Watchlist</Link>
            </div>
             
    
          
    </div>
  )
}

export default Navbar