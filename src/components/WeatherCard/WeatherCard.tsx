import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import './WeatherCard.css';

export interface WeatherCardProps {
  name: string;
  date: Date;
  tempFahrenheit: number;
  tempMin: number,
  tempMax: number,
  wind: number,
  humidity: number,
  imgUrl ?: string;
  loading ?: boolean;
};

//Default svg icon
const svg = (
  <svg width="34" className="card__weather__icon" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M31.7764 13.3718C30.8073 12.1841 29.5779 11.4201 28.0897 11.0793C28.5632 10.3633 28.7992 9.57921 28.7992 8.72709C28.7992 7.52249 28.3664 6.49418 27.5014 5.64182C26.6361 4.78976 25.592 4.36354 24.3688 4.36354C23.2612 4.36354 22.3034 4.71584 21.496 5.42044C20.8155 3.80682 19.7334 2.50001 18.251 1.50001C16.7682 0.500241 15.1152 0 13.2921 0C10.8461 0 8.75757 0.852482 7.02679 2.55703C5.29589 4.26116 4.43071 6.31818 4.43071 8.72727C4.43071 8.89777 4.44229 9.1419 4.46532 9.46011C3.12694 10.0738 2.04801 11.0027 1.22884 12.2473C0.409735 13.4913 0 14.8637 0 16.3637C0 18.4659 0.758789 20.2642 2.27594 21.7583C3.79316 23.2528 5.61918 24 7.75375 24H26.5847C28.4191 24 29.9853 23.3603 31.2836 22.0823C32.5816 20.804 33.2308 19.2615 33.2308 17.4545C33.2306 15.9206 32.7457 14.5591 31.7764 13.3718Z"
    fill="#567DF4" />
</svg>
)

//rendered component
const WeatherCard = (
  {
    name,
    date,
    tempFahrenheit,
    tempMin,
    tempMax,
    wind,
    humidity,
    imgUrl,
    loading = false
  } : WeatherCardProps
) => {

  const time = new Intl.DateTimeFormat(undefined,
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        })
  .format(date);

  console.log("tempFahrenheit",tempFahrenheit)

  const fullDate = new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric", year: "numeric",weekday: "long" }).format(date);

  //if component is on loading state,load skeleton
  if(loading)
  return (<WeatherCardLoader/>)

  return (
    <div className="card">
      <div className="card__header">
        <div className='card__image'>
          {imgUrl ? <img src={imgUrl} alt="-" id="weather-icon" /> : svg}
        </div>
        <h2 className="card__temp">{Math.round(((tempFahrenheit - 32) * 5) / 9)}° C</h2>
        <p className="card__hour">Min : {Math.round(((tempMin - 32) * 5) / 9)}° / Max : {Math.round(((tempMax - 32) * 5) / 9)}° </p>
      </div>
      <div className="card__description">
        <div className="card__info">
          <p className="card__info__place">{name}</p>
          <p className="card__info__time">{time}</p>
          <p className="card__info__date">{fullDate}</p>
        </div>
        <div className="card__weather">
          <p className="card__weather__temp">Humidity: {humidity}%</p>
          <p className="card__weather__temp">Wind: {wind} km/h</p>
        </div>
      </div>
    </div>
  );
}

//Generated from https://skeletonreact.com/
const WeatherCardLoader = (props :IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={430}
    viewBox="0 0 500 430"
    backgroundColor="#faf9f9"
    foregroundColor="#ababab"
    className='card card-loading'
    {...props}
  >
    <rect x="30" y="334" rx="0" ry="0" width="93" height="12" /> 
    <rect x="30" y="354" rx="0" ry="0" width="113" height="24" /> 
    <rect x="31" y="382" rx="0" ry="0" width="145" height="16" /> 
    <rect x="367" y="343" rx="0" ry="0" width="95" height="16" /> 
    <rect x="358" y="372" rx="0" ry="0" width="117" height="14" /> 
    <rect x="210" y="174" rx="0" ry="0" width="77" height="27" /> 
    <rect x="174" y="211" rx="0" ry="0" width="152" height="21" /> 
    <circle cx="250" cy="117" r="36" />
  </ContentLoader>
)

export default WeatherCard;
