import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";

export const GameBoard = ({ setScore }) => {
  const [firstCard, setFirstCard] = React.useState({ row: -1, col: -1 });
  const [cards, setCards] = useState([
    [
      { name: "Jou", isFlipped: false },
      { name: "Dagga", isFlipped: false },
      { name: "Pret", isFlipped: false },
      { name: "Jou", isFlipped: false },
    ],
    [
      { name: "Ma", isFlipped: false },
      { name: "Poes", isFlipped: false },
      { name: "Rook", isFlipped: false },
      { name: "Opa", isFlipped: false },
    ],
    [
      { name: "Se", isFlipped: false },
      { name: "Pret", isFlipped: false },
      { name: "Opa", isFlipped: false },
      { name: "Ma", isFlipped: false },
    ],
    [
      { name: "Poes", isFlipped: false },
      { name: "Dagga", isFlipped: false },
      { name: "Se", isFlipped: false },
      { name: "Rook", isFlipped: false },
    ],
  ]);
  const randomizeCards = () => {
    const copyOfCards = [...cards];
    for (let i = copyOfCards.length - 1; i > 0; i--) {
      for (let j = copyOfCards[i].length - 1; j > 0; j--) {
        const randomRowIndex = Math.floor(Math.random() * (i + 1));
        const randomColIndex = Math.floor(Math.random() * (j + 1));
        [copyOfCards[i][j], copyOfCards[randomRowIndex][randomColIndex]] = [
          copyOfCards[randomRowIndex][randomColIndex],
          copyOfCards[i][j],
        ];
      }
    }
    setCards(copyOfCards);
  };

  React.useEffect(() => {
    randomizeCards();
  }, []);

  function handlePress(row, col) {
    const copyOfCards = [...cards];
    const selectedCard = copyOfCards[row][col];

    if (!selectedCard.isFlipped) {
      selectedCard.isFlipped = true;

      if (firstCard.row === -1 && firstCard.col === -1) {
        setFirstCard({ row, col });
      } else {
        const firstSelectedCard = copyOfCards[firstCard.row][firstCard.col];

        if (selectedCard.name === firstSelectedCard.name) {
          setScore((prevScore) => prevScore + 2);
          setCards(copyOfCards);
        } else {
          setScore((prevScore) => prevScore - 1);

          setTimeout(() => {
            selectedCard.isFlipped = false;
            firstSelectedCard.isFlipped = false;
            setCards(copyOfCards);
          }, 500);
        }

        setFirstCard({ row: -1, col: -1 });
      }
    }
  }

  return (
    <View style={styles.container}>
      {cards.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((card, columnIndex) => (
            <Card
              key={columnIndex}
              value={card.name}
              isFlipped={card.isFlipped}
              onPress={() => handlePress(rowIndex, columnIndex)}
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
