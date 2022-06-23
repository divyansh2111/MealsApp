import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealTags = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, style]}>{duration}m</Text>
      <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealTags;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
