import React, { useEffect, useState } from "react";
import { getWeatherByCurrentLocation } from "../../api/api";
const Location = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      try {
        const data = await getWeatherByCurrentLocation(lat, lon);
        setWeatherData(data);
      } catch (error) {
        console.error("Error : ", error);
      }
    });
  };

  useEffect(() => {
    getCurrentLocation();
  });

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Location;
