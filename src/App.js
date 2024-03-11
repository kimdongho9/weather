import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';





function App() {
  //현재 위치 좌표를 가져오는 함수.
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon)
      getWeatherByCurrentLocation(lat, lon)

    })
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=643e15264c2dbc9802de15e443f35f88`
    let response = await fetch(url)
    let data = await response.json();
    console.log("data",data);
  }



  // 컴포넌트가 처음으로 렌더링될 때 한 번만 실행될 getCurrentLocation 함수 호출
  useEffect(() => {
    getCurrentLocation()
  }, [])



  return (
    <div className="App">

    </div>
  );
}

export default App;
