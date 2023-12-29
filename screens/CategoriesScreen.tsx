import React from "react";
import { FlatList } from "react-native";
import { categories } from "../utils/dummy-data";
import SingleCategory from "../components/SingleCategory";
function CategoriesScreen({ navigation }: any) {
  function renderSingleCategory(itemData: any) {
    const handleRoute = () => {
      navigation.navigate("MealDetails", { categorId: itemData?.item?.id });
    };
    return (
      <SingleCategory
        title={itemData?.item?.title}
        color={itemData?.item?.color}
        onPress={handleRoute}
      />
    );
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderSingleCategory}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
