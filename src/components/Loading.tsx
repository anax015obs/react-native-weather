import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.mainView}></View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{`Getting the fucking \nweather!`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FDF6AA`,
  },
  mainView: {
    flex: 8,
  },
  titleView: {
    flex: 2,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    textAlign: "left",
  },
});
