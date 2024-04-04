import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";

export const GameBoard = () => {
  const [cards, setCards] = useState([
    [
      { name: "Mom", isFlipped: false },
      { name: "Dad", isFlipped: false },
      { name: "Opa1", isFlipped: false },
      { name: "Mimi", isFlipped: false },
    ],
    [
      { name: "Mom", isFlipped: false },
      { name: "Dad", isFlipped: false },
      { name: "Opa2", isFlipped: false },
      { name: "Mimi", isFlipped: false },
    ],
    [
      { name: "Mom", isFlipped: false },
      { name: "Dad", isFlipped: false },
      { name: "Opa3", isFlipped: false },
      { name: "Mimi", isFlipped: false },
    ],
    [
      { name: "Mom", isFlipped: false },
      { name: "Dad", isFlipped: false },
      { name: "Opa", isFlipped: false },
      { name: "Mimi", isFlipped: false },
    ],
  ]);

  return (
    <View style={styles.container}>
      {cards.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((card, columnIndex) => (
            <Card
              key={columnIndex}
              value={card.name}
              isFlipped={card.isFlipped}
              // onPress={() => handlePress(rowIndex, columnIndex, card.name)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3e46",
  },
  row: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
  },
});
