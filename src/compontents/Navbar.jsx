import React from 'react'
import pokemon_logo from '/pokemon_logo.png'

const Navbar = () => {
  return (
    <div className='flex items-center space-x-3 px-12 py-4 bg-white dark:bg-gray-900 shadow-md'>
      <div className='flex items-center space-x-3'></div>
      <img src={pokemon_logo} alt="" className='h-10 w-10'/>
      <h1 className='text-xl font-bold text-gray-900 dark:text-white font-mono'>Pokemon Cards</h1>
    </div>
  )
}

export default Navbar
