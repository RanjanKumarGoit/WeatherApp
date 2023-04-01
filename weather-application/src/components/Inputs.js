import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from "react-toastify";

const Inputs = ({units, setUnits, setQuery}) => {
    const [city, setCity] = useState("");

    const handleSearchClick = () =>{
        if(navigator.geolocation){
            toast.info("Fetching users location.");
            navigator.geolocation.getCurrentPosition((position)=>{
                let lon = position.coords.longitude;
                let lat = position.coords.latitude;

                setQuery({lat,lon})
                setCity("");
            })
        }
    }

    const handleChangeUnits = (e) =>{
        const currUnit = e.target.name;
        if(units !== currUnit){
            setUnits(currUnit);
        }
        if(e.key == 'Enter'){
            console.log("Enter is pressed")
        }
    }

  return (
    <div className='inputMainContainer flex flex-row justify-center my-6'>
        <div className='locationContainer flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                type="text" 
                className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase locationInput'
                placeholder='Enter the location...'
                value={city}
                onChange={(e)=>setCity(e.target.value)}
            />
            <div className="flex justify-between inputBtns">
                
                <UilSearch 
                    size={25} 
                    className="text-white cursor-pointer transition ease-out hover:scale-150"
                    onClick={(e)=>setQuery({q: city})}
                />
                <UilLocationPoint 
                    size={25} 
                    className="text-white cursor-pointer transition ease-out hover:scale-150"
                    onClick = {handleSearchClick}
                />
            </div>
        </div>
        <div className="unitContainer flex flex-row justify-center items-center w-1/4">
            <button 
            name='metric' 
            className='text-xl text-white font-light hover:scale-125 transition ease-out'
            onClick={handleChangeUnits}
            >°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name='imperial' 
            className='text-xl text-white font-light hover:scale-125 transition ease-out'
            onClick={handleChangeUnits}
            >°F</button>
        </div>

    </div>
  )
}

export default Inputs 