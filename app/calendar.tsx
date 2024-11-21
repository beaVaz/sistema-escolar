import React from "react";
import { Text, SafeAreaView, Pressable, StyleSheet, Linking, View } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const calendarioURL = "https://example.com/calendario-escolar.pdf"; // Substitua pelo link real

export default function Calendar() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calendário Escolar</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Este é o calendário escolar da sua escola! Clique no botão abaixo para fazer o download.
        </Text>
      </View>

      
      <Pressable
        style={styles.downloadButton}
        onPress={() => Linking.openURL(calendarioURL)}
      >
        <Text style={styles.downloadButtonTexto}>Baixe aqui o seu calendário escolar</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    backgroundColor: "#5448C8",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "aliceblue",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  textContainer: {
    backgroundColor: "#FFFFFF", 
    padding: 50,
    borderRadius: 10,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 5, 
    width: 600, 
    marginBottom: 20,
    alignItems: "center", 
  },
  text: {
    fontSize: 16,
    color: "#333", 
    textAlign: "center", 
  },
  downloadButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
  },
  downloadButtonTexto: {
    fontSize: 25,
    color: "#5448C8",
    fontWeight: "bold",
    textAlign: "center",
  },
});
