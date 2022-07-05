import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import MainScreen from "./src/screens/MainScreen";
import Results from "./src/screens/Results";
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import { Globais } from "./styles/colors";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts(
    {'inter': require('./assets/fonts/Inter-Regular.ttf'),
    'poppins-extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')}
  )
  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Globais.backScreenGreen,
          },
          headerTintColor: Globais.fontGreen,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          options={{
            title: "App Conta Fácil",
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: "Página Inicial" }}
          name="MainScreen"
          component={MainScreen}
        />
        <Stack.Screen
          options={{ title: "Lista de Pedidos" }}
          name="Results"
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
