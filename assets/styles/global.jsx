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

  container: {
    flex: 1,
    backgroundColor: "#5448C8",
    padding: 10,
  },
  titulo: {
    fontSize: 50,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    marginTop:50,
    color: "aliceblue",
    textTransform:"uppercase",
  },
  row: {
    justifyContent: "space-between", 
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "aliceblue",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    alignItems: "center",
  },
  disciplina: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5448C8",
    marginBottom: 10,
  },
  nota: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5448C8",
  },
  status: {
    fontSize: 14,
    color: "#5448C8",
    marginTop: 10,
  },
});
 

