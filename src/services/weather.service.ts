import AppConfig from '../config/app.config.json'

export const loadWeatherFromLocalisationName = (city : string)=> {
    return fetch(`${AppConfig.URL}?q=${city}&units=imperial&APPID=${AppConfig.APP_ID}`).then((response) => response.json());
};

export const loadWeatherFromLocalisation = (latitude : number,longitude : number)=> {
    //https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric
    return fetch(`${AppConfig.URL}?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${AppConfig.APP_ID}`).then((response) => response.json());
};

export const getWeatherCardProps = (dataRaw :any) => {
    return ({
        name : dataRaw?.name,
        date : new Date(),
        tempFahrenheit : dataRaw?.main?.temp,
        imgUrl : (dataRaw?.weather ? `http://openweathermap.org/img/wn/${dataRaw?.weather[0].icon}@2x.png` : undefined) 
    })
}