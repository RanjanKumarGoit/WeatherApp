import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../Services/weatherService';

const TemperatureAndDetails = (
    {weather: {
        temp, 
        details, 
        icon, 
        temp_min, 
        temp_max, 
        feels_like, 
        speed, 
        sunrise, 
        sunset, 
        timezone,
        humidity
    }}) => {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{details}</p>
        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={iconUrlFromCode(icon)} className='w-20' alt="" />
            <p className="text-5xl">{temp}°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1" />
                    Real Fell: 
                    <span className='font-medium ml-1'>{feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1" />
                    Humidity: 
                    <span className='font-medium ml-1'>{humidity}%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1" />
                    Wild: 
                    <span className='font-medium ml-1'>{speed.toFixed()}km/hr</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-1.5 text-white text-sm py-3">
            <UilSun />
            <p className="font-light">
                Rise:<span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
            </p>
            <div className="font-light">|</div>
            <UilSunset />
            <p className="font-light">
                Set:<span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone, "hh:mm a")}</span>
            </p>
            <div className="font-light">|</div>
            <UilSun />
            <p className="font-light">
                High:<span className='font-medium ml-1'>{temp_max.toFixed()}°</span>
            </p>
            <div className="font-light">|</div>
            <UilSun />
            <p className="font-light">
                Low:<span className='font-medium ml-1'>{temp_min.toFixed()}°</span>
            </p>
        </div>


    </div>
  )
}

export default TemperatureAndDetails