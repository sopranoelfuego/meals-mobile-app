import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { TMeal } from "../types";
import { meals } from "../utils/dummy-data";

const MealDetailsScreen = ({ route }: { route: any }) => {
  const [mealDetailed, setMealDetailed] = useState<TMeal>();
  useEffect(() => {
    const init = () => {
      const exactMeal = meals.find((m) => m?.id === route?.params?.mealId);
      setMealDetailed(exactMeal);
    };
    if (route) init();
  }, [route]);
  /**
   * ingredients: Array<string>;
    steps: Array<string>;
    isGlutenFree: boolean;
   * duration: number;
    complexity: string;
    affordability: string;
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
   * */

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
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: "700" }}>Steps</Text>
              <View style={{ alignItems: "flex-start", gap: 5 }}>
                {mealDetailed?.steps?.map((m, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 12,
                      opacity: 0.5,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                    numberOfLines={2}
                  >
                    {`${index + 1}.` + m}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          {/* <Pressable style={({pressed})=>pressed?[{backgroundColor:"#3299a8",padding:5,borderRadius:5,opacity:0.6}]:[{backgroundColor:"#3299a8",padding:5,borderRadius:5}]} onPress={onPress}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:5}}>
              <Feather name="info" size={24} color='white'/>
              <Text style={{color:"white",fontWeight:'600'}}>Further information</Text>
            </View>
          </Pressable> */}
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
    flex: 0.3,
    gap: 5,
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
});
export default MealDetailsScreen;
