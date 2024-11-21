import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tituloPrincipal: {
    fontFamily: "Roboto_500Medium",
    fontSize: "4em", 
    fontWeight: "600",
    color: "aliceblue",
    textTransform:"uppercase",
    letterSpacing:"2px"
  },

  tituloReportCard: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  disciplina: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  nota: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mb: {
    color: "green", 
  },
  r: {
    color: "red",
  },
  b:{
    color: "blue",
  },
});
