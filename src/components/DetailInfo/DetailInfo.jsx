import React, { useEffect, useState } from "react";
import { getDailyForecastWeatherData } from "../../api/api";
const DetailInfo = () => {
  const [dailyWeatherData, setDailyWeatherData] = useState(null);

  const getDailyWeatherData = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      try {
        const data = await getDailyForecastWeatherData(lat, lon);
        setDailyWeatherData(data);
        console.log("daily: ", dailyWeatherData);
      } catch (error) {
        console.error("Error: ", error);
      }
    });
  };

  useEffect(() => {
    getDailyWeatherData();
  });
  return <div>{dailyWeatherData}</div>;
};

export default DetailInfo;
