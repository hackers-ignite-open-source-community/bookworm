import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeTab from "./Tabs/HomeTab";
import { BookIcon } from "../components/Images";
import Header from "../components/Header";

const { Navigator, Screen } = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Screen name="Home" component={HomeTab} />
    </Navigator>
  );
}

export default HomeScreen;
