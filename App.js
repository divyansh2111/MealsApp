import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import Favourites from "./screens/Favourites";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
// import FavouriteContextProvider from "./store/context/favourite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const DrawerComponent = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#440303" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#512e2e" },
          drawerActiveBackgroundColor: "#a76d6d",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#440303",
          drawerContentStyle: { backgroundColor: "#600707" },
        }}
      >
        <Drawer.Screen
          name="MealsCategories"
          component={CategoryScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={Favourites}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      {/* <FavouriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#440303" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#512e2e" },
            }}
          >
            <Stack.Screen
              name="DrawerNav"
              component={DrawerComponent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
