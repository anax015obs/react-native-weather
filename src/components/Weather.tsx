import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface weatherProp {
  weather: {
    temp?: number;
    condition?:
      | "Thunderstorm"
      | "Drizzle"
      | "Rain"
      | "Snow"
      | "Atmosphere"
      | "Clear"
      | "Clouds"
      | "Haze"
      | "Mist"
      | "Dust";
  };
}

export default function Weather(props: weatherProp) {
  const { weather } = props;

  const weatherOptions = {
    Thunderstorm: {
      icon: "ios-thunderstorm",
      subtitle: "Upset ☹️",
    },
    Drizzle: {
      icon: "ios-rainy",
      subtitle: "Upset ☹️",
    },
    Rain: {
      icon: "ios-rainy",
      subtitle: "Upset ☹️",
    },
    Snow: {
      icon: "md-snow",
      subtitle: "Upset ☹️",
    },
    Atmosphere: {
      icon: "md-cloudy",
      subtitle: "Upset ☹️",
    },
    Clear: {
      icon: "md-sunny",
      subtitle: "Upset ☹️",
    },
    Clouds: {
      icon: "md-cloudy",
      subtitle: "Upset ☹️",
    },
    Haze: {
      icon: "md-cloudy",
      subtitle: "Upset ☹️",
    },
    Mist: {
      icon: "md-cloudy",
      subtitle: "Upset ☹️",
    },
    Dust: {
      icon: "md-cloudy",
      subtitle: "Upset ☹️",
    },
    NotFound: {
      icon: "ios-warning",
      subtitle: "Sorry.",
    },
  };
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.main}>
        <Ionicons
          size={96}
          name={
            weatherOptions[weather.condition ? weather.condition : "NotFound"]
              .icon
          }
          color="white"
        />
        <Text style={styles.temp}>
          {weather.temp ? `${weather.temp}°` : `-`}
        </Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.title}>
          {weather.condition ? weather.condition : "Server Error"}
        </Text>
        <Text style={styles.subtitle}>
          {
            weatherOptions[weather.condition ? weather.condition : "NotFound"]
              .subtitle
          }
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  main: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  temp: {
    fontSize: 42,
    color: `white`,
  },
  status: {
    flex: 1,
    alignItems: `flex-start`,
    justifyContent: `center`,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 42,
    color: `white`,
  },
  subtitle: {
    fontSize: 30,
    color: `white`,
    paddingVertical: 10,
  },
});
