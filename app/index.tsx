import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from "react-native";
import Weather from './weather';
import { styles } from './Styles/styles';

export default function Index() {
  const [data, setData] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(require('../assets/images/bgimage.jpeg'));

  const handleDataFromChild = (childData: any) => {
    setData(childData);
    updateBackgroundImage(childData?(childData.temperature):"default");

  };

  const updateBackgroundImage = (weatherData: number) => {
    let bgImage;
    switch (true) {
      case (weatherData < 0)://'Snow':
        bgImage = require('../assets/images/snow.jpeg');
        break;
      case (weatherData >= 0 && weatherData < 10)://'Snow1':
        bgImage = require('../assets/images/snow1.jpeg');
        break;
      case (weatherData >= 10 && weatherData < 20)://'Rain':
        bgImage = require('../assets/images/rainy.jpeg');
        break;
      case (weatherData > 20 && weatherData < 25)://'Clouds':
        bgImage = require('../assets/images/cloudy.jpeg');
        break;
      case (weatherData >= 25 && weatherData < 30)://clear
        bgImage = require('../assets/images/clearclouds.jpeg');
        break;
      case (weatherData >= 30)://sunny
        bgImage = require('../assets/images/sunny.jpeg');
        break;
      default:
        bgImage = require('../assets/images/bgimage.jpeg');
        break;
    }
    setBackgroundImage(bgImage);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Weather onData={handleDataFromChild} />
      </View>
    </ImageBackground>
  );
}

