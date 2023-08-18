import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
    console.log("cities??", cities);

  return (
        <div className='Button-section'>
            <Button
                className='Button-style' 
                variant={`${setCity === '' ? "outline-info" : "info" }`} 
                onClick={() => handleCityChange("current")}
                style={{fontSize: 15}}
            >
                Current Location
            </Button>

            {cities.map((city) => (
                <Button
                    className='Button-style' 
                    variant={`${setCity === city ? "outline-info" : "info" }`} 
                    onClick={() => handleCityChange(city)}
                    style={{fontSize: 15}}
                >
                    {city}
                </Button>
            ))}
        </div>
  )
}

export default WeatherButton;
