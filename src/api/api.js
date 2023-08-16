const API_KEY = "1bd3b506be86774ab15096d112352a91";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeatherData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getWeatherByCurrentLocation = async (lat, lon, setLoading) => {
  const url = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  setLoading(true);
  try {
    const data = await fetchWeatherData(url);
    return data;
  } catch (err) {
    throw err;
  } finally {
    setLoading(false);
  }
};

export const getWeatherByCity = async (city, setLoading) => {
  const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  setLoading(true);
  try {
    const data = await fetchWeatherData(url);
    return data;
  } catch (err) {
    throw err;
  } finally {
    setLoading(false);
  }
};
