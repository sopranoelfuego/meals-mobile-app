import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { meals } from "../utils/dummy-data";
import { TMeal } from "../types";
import MealItem from "../components/MealItem";

function MealByCategoryScreen({ route }: { route: any }) {
  const [listOfMeals, setListOfMeals] = useState<Array<TMeal>>([]);
  useEffect(() => {
    // categories,meals
    const init = () => {
      const listOfMeals = meals.filter((m: TMeal) =>
        m.categoryIds.includes(route?.params?.categorId)
      );
      setListOfMeals(listOfMeals);
    };
    if (route?.params?.categorId) init();
  }, [route?.params?.categorId]);

  function renderSingleMeal({ item }: { item: TMeal }) {
    return <MealItem item={item} />;
  }

  return (
    <FlatList
      data={listOfMeals}
      style={styles.container}
      renderItem={renderSingleMeal}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MealByCategoryScreen;
