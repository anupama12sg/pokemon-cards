import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex items-center justify-center max-h-screen py-6'>
            <input type="text" placeholder='Search Pokemon...' className='w-72 max-w-md h-10 px-4 rounded-lg border border-gray-300 dark:border-gray-700 
                   font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
    )
}

export default SearchBar
