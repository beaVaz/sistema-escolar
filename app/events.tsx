import React from "react";
import { Text, SafeAreaView, Pressable } from "react-native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import EventosStyles from "../assets/styles/eventos";
import AppLoading from "expo-app-loading";

const noticias = [
  { title: "Feira de Ciências", descriptionEvent: "Explore os projetos inovadores dos alunos!", date: "01/03/2024" },
  { title: "Campeonato de Futsal", descriptionEvent: "Competições emocionantes entre as turmas!", date: "15/03/2024" },
  { title: "Palestra sobre Sustentabilidade", descriptionEvent: "Aprenda práticas sustentáveis para o dia a dia.", date: "22/03/2024" },
  { title: "Semana da Leitura", descriptionEvent: "Uma semana para mergulhar no mundo da leitura.", date: "05/04/2024" },
  { title: "Mostra de Arte e Cultura", descriptionEvent: "Venha prestigiar os talentos artísticos da escola.", date: "20/04/2024" },
];

export default function Eventos() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={EventosStyles.container}>
    <Text style={EventosStyles.titulo}>Eventos</Text>
    {noticias.map((noticia, index) => (
      <Pressable
        key={index}
        style={({ pressed }) => [
          EventosStyles.card,
          pressed && { backgroundColor: "#E0E0E0" }, 
        ]}
      >
        <Text style={EventosStyles.cardTitle}>{noticia.title}</Text>
        <Text style={EventosStyles.cardDescription}>{noticia.descriptionEvent}</Text>
        <Text style={EventosStyles.cardDate}>Data: {noticia.date}</Text>
      </Pressable>
    ))}
  </SafeAreaView>
  );
}
