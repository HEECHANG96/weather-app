import axios from "axios";

const API_KEY = "1bd3b506be86774ab15096d112352a91";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_BASE_URL2 = "https://api.openweathermap.org/data/2.5/forecast/daily";

const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getWeatherByCurrentLocation = async (lat, lon) => {
  const url = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  try {
    const data = await fetchWeatherData(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getWeatherByCity = async (city) => {
  const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const data = await fetchWeatherData(url);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getDailyForecastWeatherData = async (lat, lon) => {
  const url = `${API_BASE_URL2}?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;

  try {
    const data = await fetchWeatherData(url);
    return data;
  } catch (err) {
    throw err;
  }
};
