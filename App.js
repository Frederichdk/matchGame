import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { GameBoard } from "./src/components/GameBoard";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [score, setScore] = React.useState(0);
  // function reset() {
  //   setScore(0);

  //   const copyOfCards = [...cards];
  //   for (let i = 0; i < copyOfCards.length; i++) {
  //     for (let j = 0; j < copyOfCards[i].length; j++) {
  //       copyOfCards[i][j].isFlipped = false;
  //     }
  //   }
  //   setCards(copyOfCards);
  //   randomizeCards();
  // }

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
        {/*<TouchableOpacity style={styles.resetButton} onPress={}>
          <Text>Reset</Text>
  </TouchableOpacity>*/}
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
