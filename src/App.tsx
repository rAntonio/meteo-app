import { useEffect, useState } from 'react';
import './App.css';
import LocationInput from './components/LocationInput/LocationInput';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getWeatherCardProps, loadWeatherFromLocalisation, loadWeatherFromLocalisationName } from './services/weather.service';

function App() {
  //Called when submitting a new city search
  const loadData = (input : string) => {
    setLoading(true);
    loadWeatherFromLocalisationName(input).then((data) => {
      setWeathers(getWeatherCardProps(data));
      setLoading(false);
    })
  }

  //on load app, search for current location
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition((position) => {
      loadWeatherFromLocalisation(position.coords.latitude,position.coords.longitude).then((data) => {
        setWeathers(getWeatherCardProps(data));
        setLoading(false);
      })
    });
  }, []);
  

  const [weathers,setWeathers] = useState<any>(null);
  const [loading,setLoading] = useState<boolean>(true);

  return (
    <div className="App">
      <main>
        <LocationInput 
          placeholder='Rechercher...'
          onSubmit={loadData}
          className='input__location'/>
        <WeatherCard {...weathers} loading={loading} />
      </main>
    </div>
  );
}

export default App;
