import React from 'react'
import { iconUrlFromCode } from '../Services/weatherService';

const Forecast = ({title, weather}) => {
  return (
    <div className=''>
      <div className="flex items-center justify-start mt-6">
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2'/>
      <div className="flex flex-row items-center justify-between text-white">
        {weather.map((single) => {
          const {title, temp, icon} = single;
          return (
            <div className="flex flex-col items-center justify-center">
              <p className='font-light text-sm'>{title}</p>
              <img src={iconUrlFromCode(icon)} className='w-10 my-3' alt="" />
              <p className="font-medium">{temp.toFixed()}°</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast