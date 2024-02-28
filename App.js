import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Card = () => <View style={styles.card} />;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>Match Game</Text>
      </View>
      <View style={styles.row}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.row}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.row}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.row}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>Score Zone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#2f3e46",
  },
  row: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#52796f",
    flex: 1,
    margin: 5,
  },
  Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  lableBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84a98c",
    flex: 0.5,
    margin: 5,
  },
});
