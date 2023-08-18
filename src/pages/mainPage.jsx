import WeatherBox from "../components/WeatherBox";
import WeatherButton from "../components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { getWeatherByCurrentLocation, getWeatherByCity } from "../api/api";
import CurrentDate from "../components/CurrentDate";

const MainPage = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  const cities = ["Seoul", "Daegu", "Busan"];

  const handleCityChange = (selectedCity) => {
    if (selectedCity === "current") {
      setCity("");
    } else {
      setCity(selectedCity);
    }
  };

  // 1. UI가 그려지고 나서 호출
  // 2. 배열에 있는 state 값이 바뀔 때마다 호출
  useEffect(() => {
    if (city === "") {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon, setLoading)
          .then((data) => {
            setWeather(data);
          })
          .catch((err) => {
            setAPIError(err.message);
          });
      });
    } else {
      getWeatherByCity(city, setLoading)
        .then((data) => {
          setWeather(data);
        })
        .catch((err) => {
          setAPIError(err.message);
        });
    }
  }, [city]);

  return (
    <div className="app">
      <CurrentDate />
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !apiError ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
};

export default MainPage;
