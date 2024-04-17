import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GameBoard } from "./src/components/GameBoard";
import Constants from "expo-constants";

export default function App() {
  const [score, setScore] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>Match Game</Text>
      </View>
      <View style={styles.instrucBackground}>
        <Text style={styles.instrucText}>
          Click on Two Cards to flip them over
        </Text>
        <Text style={styles.instrucText}>
          +2 points for correct, -1 for wrong
        </Text>
      </View>
      <GameBoard setScore={setScore} />
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>Score: {score}</Text>
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
    flex: 0.15,
    margin: 5,
  },
  instrucBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  instrucText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
