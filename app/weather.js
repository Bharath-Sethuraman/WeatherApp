import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';
import { styles } from './Styles/styles';
import { getWeather, getForecast } from './api';

const Weather = ({ onData }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleWeather = () => {
    getWeather(city, (weatherData) => {
      setWeather(weatherData);
      onData(weatherData);  // Pass the weather data to the parent
    }, setForecast);
  };

  const handleForecast = () => {
    getForecast(city, setWeather, setForecast);
  };

  const clear = () => {
    setWeather(null);
    setForecast(null);
    onData(null); 
    setCity("");
  };

  const iconUrl = weather ? `https://openweathermap.org/img/w/${weather.icon}.png` : null;

  return (
    <View style={styles.container2}>
      <Text style={styles.weathercol}>Weather App</Text>
      <TextInput
        placeholder='City'
        value={city}
        onChangeText={setCity}
        style={styles.city}
      />
      <View style={styles.btn}>
        <Button onPress={handleWeather} title="Get Weather" />
        <Text></Text>
        <Button onPress={handleForecast} title="Get Forecast" />
        <Text></Text>
        <Button onPress={clear} title='CLEAR' />
      </View>
      <ScrollView>
        {weather && (
          <View style={styles.weatherdisplay}>
            <Text style={{ fontSize: 40, justifyContent: 'flex-start', color: "white" }}>{city}</Text>
            <Text style={styles.display1}>{weather.temperature}° C</Text>
            <Text style={{ fontSize: 30, color: "white", justifyContent: "center", alignItems: "center" }}>{weather.description}</Text>
            <Text style={{ fontSize: 30, color: "white", justifyContent: "center", alignItems: "center" }}>{"(Feels like:" + weather.feelsLikeCelcius + ")"}</Text>
            <View style={styles.weatherDetails}>
              {iconUrl && <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />}
            </View>
          </View>
        )}
        {forecast && (
          <SafeAreaView style={styles2.forecastdisplay}>
            <Text style={{ fontSize: 40, color: "white", marginBottom: 20 }}>Forecast for the next hours:</Text>
            {forecast.map((fItem, index) => (
              <View key={index} style={styles2.forecastItem}>
                <Image source={{ uri: `https://openweathermap.org/img/w/${fItem.weather[0].icon}.png` }} style={styles2.imagelist} />
                <Text style={{ color: "blue" }}>Time: {new Date(fItem.dt * 1000).toLocaleTimeString()}</Text>
                <Progress.Bar progress={(fItem.main.temp - 273.15) / 100} width={200} height={10} borderRadius={6} style={{ marginTop: 10 }} />
                <Text style={{ color: "blue" }}>Temperature: {(fItem.main.temp - 273.15).toFixed(2)}</Text>
                <Text style={{ color: "red" }}>Description: {fItem.weather[0].description}</Text>
              </View>
            ))}
          </SafeAreaView>
        )}
      </ScrollView>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  weathercol: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  city: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  weatherdisplay: {
    marginBottom: 20,
  },
  display1: {
    fontSize: 28,
    color: 'white',
    marginBottom: 10,
  },
  weatherDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  forecastdisplay: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  forecastItem: {
    borderColor: "grey",
    fontSize: 20,
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imagelist: {
    borderColor: "blue",
    borderRadius: 5,
    width: 250,
    height: 250,
    borderWidth: 1,
    width: 300,
    flexDirection: 'column',
  }
});

export default Weather;
