import './App.css';
import { useEffect } from 'react';
import Weather from './component/Weather';
import WeatherButton from './component/WeatherButton';




function App() {
  //현재 위치 좌표를 가져오는 함수.
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재 위치", lat, lon)
      getWeatherByCurrentLocation(lat, lon) // 현재 위치를 기반으로 날씨 정보를 가져옴.

    })
  };

  // 현재 위치를 기반으로 날씨 정보를 가져오는 함수.
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=643e15264c2dbc9802de15e443f35f88`
    let response = await fetch(url) // API 호출
    let data = await response.json(); // 응답을 JSON 형태로 변환
    console.log("data", data);
  }



  // 컴포넌트가 처음으로 렌더링될 때 한 번만 실행될 getCurrentLocation 함수 호출
  useEffect(() => {
    getCurrentLocation()
  }, [])



  return (
    <div className="App">
      <div className='container'>
        <Weather />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
