import React from 'react'
import { formatToLocalTime } from '../Services/weatherService'

const TimeAndLocation = ({weather: {timezone, name, country, dt}}) => {
  return (
    <div>
        <div className="flex items-center justify-center my-6 timeAndLocationContainer">
            <p className="text-white text-xl font-extralight text-center localTimeAndDate">
                {formatToLocalTime(dt,timezone)}
            </p>
        </div>
        <div className="flex items-center justify-center my-3">
            <p className='text-white text-3xl font-medium'>{name}, {country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation