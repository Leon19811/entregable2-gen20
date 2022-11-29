import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)

  console.log(weather)

  return (
    <article className='card'>
      <h1 className='card__title'>Weather App</h1>
      <h2 className='card__subtitule'>{`${weather?.name}, ${weather?.sys.country}`}</h2>

      <section className='card_first-section'>
        <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <h3 cardName='card_temp'>{weather?.main.temp} K</h3>
      </section>

      <section className='card_second-section'>
        <h3 className='second__title'>"{weather?.weather[0].description}"</h3>

        <ul cardName='second__list'>
          <li className='second__item'><span className='second__span'>Wind Speed</span>{weather?.wind.speed} m/s</li>
          <li className='second__item'><span className='second__span'>Clouds</span>{weather?.clouds.all} %</li>
          <li className='second__item'><span className='second__span'>Pressure</span>{weather?.main.pressure} hPa</li>
        </ul>

      </section>
        <h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
        <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>


    </article>

  )
}

export default WeatherCard