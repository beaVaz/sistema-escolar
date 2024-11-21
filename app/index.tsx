import React from "react";
import { Text, SafeAreaView } from "react-native";
import globalStyles from "../assets/styles/global";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {

    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#5448C8" }}>
      <Text style={globalStyles.tituloPrincipal}>Olá, Seja Bem-vindo!</Text>
    </SafeAreaView>
  );
}
