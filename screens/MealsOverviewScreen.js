import { useLayoutEffect } from "react";

import MealList from "../components/MealList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const title = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({
      title: title,
    });
  }, [catId, navigation]);

  return <MealList inputList={meals} />;
}
