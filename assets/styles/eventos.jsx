import { StyleSheet } from "react-native";

export default StyleSheet.create({
  titulo: {
    fontSize: 50, 
    color: "aliceblue", 
    textTransform: "uppercase", 
    fontWeight: "700", 
    padding: 50, 
  }, container: {
    flex: 1,
    backgroundColor: "#5448C8",
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "100%", 
    maxWidth: 500, 
    backgroundColor: "#FFFFFF",
    padding: 25,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 12,
    color: "#777",
  },
});

