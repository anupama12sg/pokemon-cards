import React from 'react'

const typeColors = {
  normal: "bg-gray-400",
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  ice: "bg-cyan-300",
  fighting: "bg-orange-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-stone-500",
  ghost: "bg-indigo-700",
  dragon: "bg-indigo-800",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-400",
};

const Card = ({name, image, types}) => {
  return (
    <div className='w-60 p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform bg-white dark:bg-gray-900 text-center'>
      
      {/*Pokemon Image*/}
      <img src={image} alt={name} className='w-24 h-24 object-contain mx-auto mb-2' />
    
    
    </div>
  )
}

export default Card
