import React, {  useLayoutEffect, useState } from "react";
import { FlatList,  StyleSheet } from "react-native";
import { meals } from "../utils/dummy-data";
import { TMeal } from "../types";
import MealItem from "../components/MealItem";

function MealByCategoryScreen({ route,navigation }: { route: any,navigation:any }) {
  const [listOfMeals, setListOfMeals] = useState<Array<TMeal>>([]);
  useLayoutEffect(() => {
    const init = () => {
      const listOfMeals = meals.filter((m: TMeal) =>
        m.categoryIds.includes(route?.params?.categorId)
      );
      setListOfMeals(listOfMeals);
       navigation.setOptions({
      title:route?.params?.title
    })
    };
    if (route?.params?.categorId) init();
  }, [route?.params?.categorId]);

 
  function renderSingleMeal({ item }: { item: TMeal }) {
    const handleOnPress=()=>{
      navigation.navigate('SingleMealDetails',{mealId:item?.id})
    }
    return <MealItem item={item} onPress={handleOnPress} />;
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
