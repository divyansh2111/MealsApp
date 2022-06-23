import { StyleSheet, FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryScreen({ navigation }) {
  const renderItemHandler = (newData) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: newData.item.id,
      });
    };

    return (
      <CategoryTile
        title={newData.item.title}
        color={newData.item.color}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItemHandler}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
