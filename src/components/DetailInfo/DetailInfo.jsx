import React, { useEffect, useState } from "react";
import { getDailyForecastWeatherData } from "../../api/api";
const DetailInfo = () => {
  const [dailyWeatherData, setDailyWeatherData] = useState(null);

  const getDailyWeatherData = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let cnt = 7;
      try {
        const data = await getDailyForecastWeatherData(lat, lon, cnt);
        setDailyWeatherData(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    });
  };

  useEffect(() => {
    getDailyWeatherData();
  });
  return <div></div>;
};

export default DetailInfo;
