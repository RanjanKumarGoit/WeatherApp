import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "bangalore" });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");


  useEffect(() => {
    const message = query.q ? query.q : "current location.";
    toast.info("Fetching weather for " + message);
    const fetchWeather = async() =>{
      await getFormattedWeatherData({...query,units}).then(
        (data) => {
          toast.success(`Successfully fetched weather for ${data.name}, ${data.country}.`);
          setWeather(data);
          console.log(data)
      });
    }
  
    fetchWeather();
  }, [query, units]);

  const formatBackground = () =>{
    if(!weather) return 'from-cyan-700 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700';
  }
  
  

  return (
    <div className={`mainContainer mx-auto flex flex-col max-w-screen-md py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs units = {units} setUnits={setUnits} setQuery={setQuery} />
      {!weather && 
      <div>
        <h1 className='flex justify-center items-center text-white text-7xl'>Loading...</h1>
        </div>}
      {weather && 
      <div>
        <TimeAndLocation weather = {weather} />
        <TemperatureAndDetails weather = {weather}/>
        <Forecast title={"Hourly Forecast"} weather = {weather.hourly}/>
        <Forecast title={"Daily"} weather = {weather.daily}/>
        </div>}
        <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
