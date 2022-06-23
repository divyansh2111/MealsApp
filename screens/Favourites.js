import { StyleSheet, Text, View } from "react-native";
// import { useContext } from "react";
import MealList from "../components/MealList";
// import { FavouriteContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const Favourites = () => {
  // const favouriteCtx = useContext(FavouriteContext);
  // const favourites = MEALS.filter((meal) => favouriteCtx.ids.includes(meal.id));

  const favouriteMeals = useSelector((state) => state.favouriteMeals.ids);
  const favourites = MEALS.filter((meal) => favouriteMeals.includes(meal.id));

  if (favourites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }
  return <MealList inputList={favourites} />;
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
