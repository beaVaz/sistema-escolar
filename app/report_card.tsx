import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import BoletimStyles from "../assets/styles/global";  

const boletim = [
  { id: "1", disciplina: "Matemática", nota: 9.0 },
  { id: "2", disciplina: "Português", nota: 7.5 },
  { id: "3", disciplina: "História", nota: 5.5 },
  { id: "4", disciplina: "Ciências", nota: 1.2 },
  { id: "5", disciplina: "Desenvolvimento Mobile", nota: 10 },
];

export default function ReportCard() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {
    const getStatus = (nota) => {
      if (nota >= 8.5) return "Muito Bom";
      if (nota >= 7) return "Bom";
      return "Ruim";
    };

    const status = getStatus(item.nota);

    return (
      <View style={BoletimStyles.card}>
        <Text style={BoletimStyles.disciplina}>{item.disciplina}</Text>
        <Text style={BoletimStyles.nota}>{item.nota.toFixed(1)}</Text>
        <Text style={BoletimStyles.status}>{status}</Text>
      </View> 
    );
  };

  return (
    <SafeAreaView style={BoletimStyles.container}>
      <Text style={BoletimStyles.titulo}>Boletim Escolar</Text>
      <FlatList
        data={boletim}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        columnWrapperStyle={BoletimStyles.row} 
      />
    </SafeAreaView>
  );
}
