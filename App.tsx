import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealByCategoryScreen from "./screens/MealByCategoryScreen";
import { StatusBar } from "expo-status-bar";
import MealDetailsScreen from "./screens/MealDetailsScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#b8cdd4'}
        }}>
          <Stack.Screen name="Category" component={CategoriesScreen} options={{title:'Meals Categories'}} />
          <Stack.Screen name="Meals" component={MealByCategoryScreen} options={{title:'Meals Overview'}}/>
          <Stack.Screen name="SingleMealDetails" component={MealDetailsScreen} options={{title:'Meal Details'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
