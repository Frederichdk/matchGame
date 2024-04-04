import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import blackCardBack from "./blackCardBack.jpg";

export const Card = ({ value, isFlipped, onPress }) => {
  const [flipped, setFlipped] = useState(isFlipped);

  const handlePress = () => {
    setFlipped(!flipped);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {flipped ? (
        <Text style={styles.text}>{value}</Text>
      ) : (
        <Image source={blackCardBack} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#52796f",
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 120,
  },
});
