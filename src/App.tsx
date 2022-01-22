import { useEffect, useState } from 'react';
import './App.css';
import LocationInput from './components/LocationInput/LocationInput';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { getWeatherCardProps, loadWeatherFromLocalisation, loadWeatherFromLocalisationName } from './services/weather.service';
import { ThemeContext, themes } from './components/Theme/contexts/ThemeContext';
import ThemeToogle from './components/ThemeToogle/ThemeToogle';

function App() {
  //Called when submitting a new city search
  const loadData = (input : string) => {
    setLoading(true);
    loadWeatherFromLocalisationName(input).then((data) => {
      if(data?.cod==="404"){
        setError(true)
        setLoading(false);
        return;
      }
      setWeathers(getWeatherCardProps(data));
      setLoading(false);
      setError(false)
    }).catch((e)=> {console.error(e);return false})
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
  const [error,setError] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <LocationInput 
          placeholder='Rechercher...'
          onSubmit={loadData}
          className='input__location'
          error={error}
        />
      </header>
      <main>
        <WeatherCard {...weathers} loading={loading} />
      </main>
      <ThemeContext.Consumer>
      {({ changeTheme,theme }) => {
          return <ThemeToogle
                  toogleAction={() => {
                    changeTheme((theme===themes.dark) ? themes.light : themes.dark);
                  }}
                />
      }}
        </ThemeContext.Consumer>
    </div>
  );
}

export default App;
