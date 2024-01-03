import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { TMeal } from "../types";
import { meals } from "../utils/dummy-data";
import { Feather } from "@expo/vector-icons";
const SaveButton = () => {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={(pressed) =>
        pressed
          ? [styles.saveHeaderButtonStyle, { opacity: 0.7 }]
          : [styles.saveHeaderButtonStyle]
      }
      onPress={() => console.log("pressed here")}
    >
      <Feather name="save" size={18} color="white" />
      <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
        save
      </Text>
    </Pressable>
  );
};
const MealDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [mealDetailed, setMealDetailed] = useState<TMeal>();
  const { width } = useWindowDimensions();
  useEffect(() => {
    const init = () => {
      const exactMeal = meals.find((m) => m?.id === route?.params?.mealId);
      setMealDetailed(exactMeal);
      navigation.setOptions({
        headerRight: () => <SaveButton />,
      });
    };
    if (route) init();
  }, [route]);

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={styles.imageStyleContainer}>
          <Image
            source={{ uri: mealDetailed?.imageUrl }}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.styleTitle}>{mealDetailed?.title}</Text>
          <View style={{ width: "100%", justifyContent: "flex-end", gap: 10 }}>
            <View style={styles.singleInfo}>
              <Text>Duration</Text>
              <Text
                style={{
                  fontSize: 14,
                  opacity: 0.5,
                  fontWeight: "600",
                  textAlign: "right",
                }}
              >
                {mealDetailed?.duration}m
              </Text>
            </View>
            <View style={styles.singleInfo}>
              <Text>Complexity</Text>
              <Text
                style={{
                  fontSize: 14,
                  opacity: 0.5,
                  fontWeight: "600",
                  textAlign: "right",
                }}
              >
                {mealDetailed?.complexity}
              </Text>
            </View>
            <View style={styles.singleInfo}>
              <Text>Affordability</Text>
              <Text
                style={{
                  fontSize: 14,
                  opacity: 0.5,
                  fontWeight: "600",
                  textAlign: "right",
                }}
              >
                {mealDetailed?.affordability}
              </Text>
            </View>
            {/* =================== ENGREDIENTS ==================================== */}
            <View style={styles.singleInfo}>
              <Text style={{ fontWeight: "700" }}>Engredients</Text>
              <View style={{ alignItems: "flex-start", gap: 5 }}>
                {mealDetailed?.ingredients.map((m, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 12,
                      opacity: 0.5,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    - {m}
                  </Text>
                ))}
              </View>
            </View>
            {/* =================== STEPS ==================================== */}

            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: "700" }}>Steps:</Text>
              <View style={{ alignItems: "flex-start", gap: 10 }}>
                {mealDetailed?.steps?.map((m, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 12,
                      opacity: 0.5,
                      fontWeight: "600",
                      textAlign: "justify",
                      width: width - 40,
                    }}
                    numberOfLines={3}
                  >
                    {`${index + 1}.` + m}
                  </Text>
                ))}
              </View>
            </View>
            {/* =================== BOLEANS EX:IS FREE ==================================== */}

            <View style={styles.booleanContainerStyle}>
              <View style={styles.booleanSingleStyle}>
                <Text style={{ fontWeight: "700" }}>Is Gluten Free</Text>
                <View>
                  <Feather
                    name={
                      mealDetailed?.isGlutenFree ? "check-circle" : "x-circle"
                    }
                    size={16}
                    color={mealDetailed?.isGlutenFree ? "green" : "red"}
                  />
                </View>
              </View>
              <View style={styles.booleanSingleStyle}>
                <Text style={{ fontWeight: "700" }}>Vegan</Text>
                <View>
                  <Feather
                    name={mealDetailed?.isVegan ? "check-circle" : "x-circle"}
                    size={16}
                    color={mealDetailed?.isVegan ? "green" : "red"}
                  />
                </View>
              </View>
              <View style={styles.booleanSingleStyle}>
                <Text style={{ fontWeight: "700" }}>Vegetarian</Text>
                <View>
                  <Feather
                    name={
                      mealDetailed?.isVegetarian ? "check-circle" : "x-circle"
                    }
                    size={16}
                    color={mealDetailed?.isVegetarian ? "green" : "red"}
                  />
                </View>
              </View>
              <View style={styles.booleanSingleStyle}>
                <Text style={{ fontWeight: "700" }}>Is Lacose Free</Text>
                <View>
                  <Feather
                    name={
                      mealDetailed?.isLactoseFree ? "check-circle" : "x-circle"
                    }
                    size={16}
                    color={mealDetailed?.isLactoseFree ? "green" : "red"}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },

  imageStyleContainer: {
    width: "100%",
    alignSelf: "center",
    flex: 0.7,
  },
  imageStyle: {
    width: "100%",
    height: 250,
    borderRadius: 5,
    flex: 0.7,
  },
  infoContainer: {
    paddingTop: 10,
    flex: 0.3,
    gap: 20,
  },
  singleInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  booleanContainerStyle: {
    maxWidth: 300,
  },
  booleanSingleStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  saveHeaderButtonStyle: {
    backgroundColor: "#3299a8",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    marginHorizontal: 8,
    opacity: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
export default MealDetailsScreen;
