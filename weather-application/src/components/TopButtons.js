import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id:1,
            title: "Bangalore"
        },
        {
            id:2,
            title: "Janakpur"
        },
        {
            id:3,
            title: "Seattle"
        },
        {
            id:4,
            title: "London"
        },
    ]
  return (
    <div className="flex items-center justify-around my-6 preDefinedLocation">
        {cities.map((city) => (
            <button 
                key={city.id} 
                className='text-white md:text-lg font-medium sm:font-light w-100'
                onClick={()=>setQuery({q:city.title})}
                >
            {city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons