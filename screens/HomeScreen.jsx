import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeTab from "./Tabs/HomeTab";
import Header from "../components/Header";
import CategoriesTab from "./Tabs/CategoriesTab";

const { Navigator, Screen } = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Navigator
      screenOptions={{
        header: ({ route }) => <Header route={route} />,
      }}
    >
      <Screen name="Home" component={HomeTab} />
      <Screen name="Categories" component={CategoriesTab} />
      <Screen name="My Story" component={HomeTab} />
      <Screen name="Settings" component={HomeTab} />
    </Navigator>
  );
}

export default HomeScreen;
