import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨상태

// 3. 5개의 버튼이 있다. 1개는 현재위치 4개는 다른 도시
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다.

// 5. 현재 위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  const cities = ['Seoul', 'Daegu', 'Busan'];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bd3b506be86774ab15096d112352a91&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }    
  };

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bd3b506be86774ab15096d112352a91&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      console.log("data", data);
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
        }
  };

  const handleCityChange = (city) => {
    if(city === "current") {
      setCity('');
    }else {
      setCity(city);
    }
  };


  // 1. UI가 그려지고 나서 호출
  // 2. 배열에 있는 state 값이 바뀔 때마다 호출
  useEffect(() => {
    if(city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);



  return (
    <div className='app'>
      {loading? (
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
          <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange} />
        </div> 
        ) : (
          apiError
        )}  
    </div>
  );
};

export default App;
