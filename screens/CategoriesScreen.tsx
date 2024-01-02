import React from "react";
import { FlatList } from "react-native";
import { categories } from "../utils/dummy-data";
import SingleCategory from "../components/SingleCategory";
function CategoriesScreen({ navigation }: any) {
  function renderSingleCategory(itemData: any) {
    const handleRoute = () => {
      navigation.navigate("Meals", {
        categorId: itemData?.item?.id,
        title: itemData?.item?.title,
      });
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
