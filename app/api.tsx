import { Alert } from "react-native";
export const getWeather = async (city:any, setWeatherData:any, setForecastData:any) => {
    try {
        const api_key =  `${process.env.REACT_APP_API_KEY}`;
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        const response = await fetch(api_url);
        const data = await response.json();
        if (data.cod && data.cod !== 200) {
            throw new Error(data.message || 'Check city name properly');
        }
        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
        const feelsLike = data.main.feels_like;
        const feelsLikeCelcius = (feelsLike - 273.15).toFixed(2);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        setForecastData(null);
        setWeatherData({ temperature: temperatureCelsius, description,icon,feelsLikeCelcius });
    } catch (error:any) {
        console.error('Error fetching weather data:', error.message);
        Alert.alert('Error', error.message);
    }
}
export const getForecast = async (city:any, setWeatherData:any, setForecastData:any) => {
    try {
        const apiKey = "c2b71cac33f896c3579a4f71ceaf8239";
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
 
        if (data.cod && data.cod !== '200') {
            throw new Error(data.message || 'Check the forecast data');
        }
 
        const forecast = data.list.slice(0, 3);
 
        setWeatherData(null);
        setForecastData(forecast);
    } 
    catch (error:any) {
        console.error('Error fetching forecast data:', error.message);
        Alert.alert('Error', 'Failed to fetch forecast data. Please try again.');
    }
};