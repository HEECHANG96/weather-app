import React from 'react';
import { Button } from 'react-bootstrap';
const WeatherBox = ({ weather }) => {
  return (
    <div>
        <div className='weather-box'>
            <h4>{weather?.name}</h4>
            <h1 className='temp'>{weather?.main.temp}°C</h1>
            <h2>{weather?.weather[0].description}</h2>

            <div className='max-min'>
              <Button className='max-button' variant='danger'>{weather?.main.temp_max}°C</Button>
              <Button className='min-button' variant='primary'>{weather?.main.temp_min}°C</Button>
            </div>            
        </div>
    </div>
  )
}

export default WeatherBox;
