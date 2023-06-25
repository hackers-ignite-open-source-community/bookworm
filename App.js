import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Auth from "./screens/Auth";
import SignupScreen from "./screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dob from "./screens/Dob";
import InterestDisScreen from "./screens/InterestDisScreen";

SplashScreen.preventAutoHideAsync();

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_300Light,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Navigator>
          <Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: "Sign up and get started on reading your first book ",
              headerStyle: {
                backgroundColor: "#f0f0f0",
              },
              headerTitleStyle: {
                fontFamily: "Montserrat_700Bold",
                fontSize: "1.125rem",
              },
              headerTitleAlign: "center",
              headerTransparent: true,
              headerBackTitleVisible: false,
            }}
          />
          <Screen
            name="Dob"
            component={Dob}
            options={{ headerTransparent: true, title: "" }}
          />
          <Screen
            name="InterestDiscovery"
            component={InterestDisScreen}
            options={{ headerShown: false }}
          />
        </Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
