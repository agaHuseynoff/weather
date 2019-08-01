import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const API_KEY = "b92f83c92c6de37466d0cb6642eb22d9";

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    };

    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const dataWeather = await api_url.json();
            console.log(dataWeather);

            let sunset = dataWeather.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            let sunrise = dataWeather.sys.sunrise;
            let dateSunrise = new Date();
            date.setTime(sunrise);
            let sunrise_date = dateSunrise.getHours() + ':' + dateSunrise.getMinutes() + ':' + dateSunrise.getSeconds();

            this.setState({
                temp: dataWeather.main.temp,
                city: dataWeather.name,
                country: dataWeather.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                lat: dataWeather.coord.lat,
                lon: dataWeather.coord.lon,
                wind: dataWeather.wind.speed,
                error: ''
            });
        }
    };

    render() {
        return (
            <div className='weatherCard'>
                <div className='wrapperCard'>
                    <Header getWeather={this.getWeather}/>
                    <Main state={this.state}/>
                </div>
            </div>

        );
    }
}

export default App;