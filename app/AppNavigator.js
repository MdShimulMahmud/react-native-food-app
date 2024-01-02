import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";
import Icon from "./components/Icon";
import DishDetailScreen from "./screens/DishDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { useNavigation } from "@react-navigation/native";
import FavouritesScreen from "./screens/FavouritesScreen";

const MenuStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen
        name="DishDetail"
        component={DishDetailScreen}
        options={(route) => ({ title: route.params.dish.name })}
      />
    </Stack.Navigator>
  );
};

const FavouritesStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStack} />
      <Drawer.Screen name="Favourites" component={FavouritesStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
