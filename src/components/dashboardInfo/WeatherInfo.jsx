import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

const WeatherInfo = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const apiKey = "5dde2283aedba1542a03fe6987595a9d";

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherData(latitude, longitude);
            },
            () => {
                alert("위치를 가져올 수 없습니다.");
            }
        );
    }, []);

    const getWeatherData = (latitude, longitude) => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`;
        
        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => setCurrentWeather(data))
            .catch(error => console.error("현재 날씨 데이터를 가져오는데 실패했습니다.", error));
    };

    return (
        <div style={{ textAlign: "left", margin: "5px"}}>
            <Typography variant="h4" sx={{ margin: '10px' }}>
                현재 날씨
            </Typography>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "5px", backgroundColor: 'white' }}>
                <div style={{ textAlign: "center", margin: "5px"}}>
                    {currentWeather ? (
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                            alt={currentWeather.weather[0].description}
                            style={{ width: '200px', height: '200px' }}
                        />
                    </div>
                    ) : (
                        <p>날씨 데이터를 불러오는 중...</p>
                    )}
                </div>
                <div style={{ textAlign: "center", margin: "5px"}}>
                    {currentWeather ? (
                        <div>
                            <h2>{currentWeather.main.temp}°C</h2>
                            <h1>{currentWeather.weather[0].description}</h1>
                        </div>
                    ) : (
                        <p>날씨 데이터를 불러오는 중...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;

/*

            <h3>일주일 예보</h3>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
                {forecast.length > 0 ? (
                    forecast.map((day, index) => (
                        <div key={index} style={{ textAlign: "center" }}>
                            <p>{new Date(day.dt * 1000).toLocaleDateString("ko-KR", { weekday: "long" })}</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                alt={day.weather[0].description}
                            />
                            <p>{day.temp.day}°C</p>
                        </div>
                    ))
                ) : (
                    <p>예보 데이터를 불러오는 중...</p>
                )}
            </div>
            */
