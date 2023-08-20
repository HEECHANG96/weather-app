import React, { useEffect, useState } from "react";
import { getWeatherByCurrentLocation } from "../../api/api";
import { Container, CurrentLocationTemperature } from "./Location";

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
    <Container>
      {weatherData && weatherData.main && (
        <div>
          <CurrentLocationTemperature>
            {Math.ceil(weatherData.main.temp)}°C {weatherData.name}
          </CurrentLocationTemperature>
        </div>
      )}
    </Container>
  );
};

export default Location;
