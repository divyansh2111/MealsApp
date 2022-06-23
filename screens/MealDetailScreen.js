import { useContext, useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import List from "../components/List";
import MealTags from "../components/MealTags";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";
// import { FavouriteContext } from "../store/context/favourite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourite-slice";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((item) => item.id === mealId);

  // const FavouriteMealsCtx = useContext(FavouriteContext);
  // const isFavourite = FavouriteMealsCtx.ids.includes(mealId);
  const favouriteMeals = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();
  const isFavourite = favouriteMeals.includes(mealId);

  const onPressHandler = () => {
    if (isFavourite) {
      // FavouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // FavouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            onPress={onPressHandler}
            icon={isFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
      title: meal.title.split(" ")[0],
    });
  }, [meal, navigation, onPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealTags
        duration={meal.duration}
        complexity={meal.complexity.toUpperCase()}
        affordability={meal.affordability.toUpperCase()}
        style={styles.tags}
      />
      <View style={styles.listOuter}>
        <View style={styles.listInner}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    margin: 8,
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  tags: {
    color: "white",
  },
  listInner: {
    width: "80%",
  },
  listOuter: {
    alignItems: "center",
  },
});
