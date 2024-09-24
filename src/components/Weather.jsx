import { useState, useEffect } from "react";
export default function Weather() {
  const [weather, setWeather] = useState();

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        // console.log(`latitude : ${pos.latitude} longitude : ${pos.longitude}`);
        const key = import.meta.env.VITE_I_AM_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${key}&units=metric`
        );
        const data = await response.json();
        // console.log(data);
        setWeather({
          // 온도
          temp: data.main.temp,
          // 습도
          humidity: data.main.humidity,
          // 도시
          city: data.name,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  // 컴포넌트 실행이 완료된 후(JSX코드가 실행 된 후)
  // useEffect가 실행
  useEffect(() => {
    getLocation();
  }, []);
  console.log(weather);
  // 옵셔널 체이닝(optional chaing)
  return (
    <>
      <div className="ee">
        <div>
          <h3>온도</h3>
          <p>{weather?.temp}</p>
        </div>
        <div>
          <h3>습도</h3>
          <p>{weather?.humidity}</p>
        </div>
        <div>
          <h3>도시</h3>
          <p>{weather?.city}</p>
        </div>
      </div>
    </>
  );
}
