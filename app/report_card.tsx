import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import globalStyles from "../assets/styles/global"; 
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const boletim = [
  { id: "1", disciplina: "Matemática", nota: 9.0},
  { id: "2", disciplina: "Português", nota: 7.5 },
  { id: "3", disciplina: "História", nota: 5.5 },
  { id: "4", disciplina: "Ciências", nota: 1.2  },
  { id: "5", disciplina: "Desenvolvimento Mobile", nota: 10}
];

export default function ReportCard() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => {

    let status;
    if (item.nota >= 8.5 && item.nota <=10 ) {
      status = "Muito Bom"; 
    } else if (item.nota >=7 && item.nota <=8.49) {
      status = "Bom";
    } else {
      status = "Ruim";
    }

    return (
      <View style={globalStyles.card}>
        <Text style={globalStyles.disciplina}>{item.disciplina}</Text>
        <Text style={globalStyles.nota}>Nota: {item.nota.toFixed(1)}</Text>
        <Text
          style={[
            globalStyles.status,
            status === "Muito Bom" ? globalStyles.mb : status === "Aprovado" ? globalStyles.mb : globalStyles.recuperacao,
            status === "Bom" ? globalStyles.b : status === "Aprovado" ? globalStyles.mb : globalStyles.recuperacao,
            status === "Ruim" ? globalStyles.r : status === "Aprovado" ? globalStyles.mb : globalStyles.recuperacao,
          ]}
        >
          {status}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView >
      <Text style={globalStyles.tituloReportCard}>Boletim Escolar</Text>
      <FlatList
        data={boletim}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}


