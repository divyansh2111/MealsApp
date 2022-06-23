import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = ({ inputList }) => {
  const renderMealItems = (itemData) => {
    const mealDetails = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealDetails} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={inputList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
