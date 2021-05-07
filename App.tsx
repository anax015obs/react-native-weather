import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Alert } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "./src/components/Loading";
import Weather from "./src/components/Weather";
import { delay } from "./assets/common";

interface weather {
  temp?: number;
  condition?: string;
}

export default function App() {
  const API_KEY = `c31bbb1a4f80b8a1e3e2fab87f11305c`;
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  const getLocation = async (): Promise<number[] | undefined> => {
    try {
      await delay(2000);
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      return [latitude, longitude];
    } catch (error) {
      Alert.alert("Can't find you ");
    }
  };

  const getWeather = async (
    latitude: number,
    longitude: number
  ): Promise<weather | undefined | {}> => {
    try {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      return {
        temp: Math.round(temp),
        condition: weather[0].main,
      };
    } catch (error) {
      console.log(`Can't get Weather`);
      return {};
    }
  };

  const fetch = async () => {
    const [latitude, longitude] = await getLocation();
    const weather = await getWeather(latitude, longitude);
    console.log(`weather: `, weather);

    setWeather(weather ? weather : {});
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : <Weather weather={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
