import React from "react";

import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ThemeProvider } from "styled-components";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants-screen";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationConextProvider } from "./src/services/location/location.context";

// import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICONS = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const MapScreen = () => (
    <SafeArea>
      <Text>Map Screen!</Text>
    </SafeArea>
  );

  const SettingsScreen = () => (
    <SafeArea>
      <Text>Settings Screen!</Text>
    </SafeArea>
  );

  const Tab = createBottomTabNavigator();

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name];
    return {
      tabBarIcon: ({ color, size }) => {
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationConextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationConextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
