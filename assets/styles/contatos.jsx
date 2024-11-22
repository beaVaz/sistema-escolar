import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#5448C8",
    },
    title: {
        fontSize: 50,
        color: "aliceblue",
        textTransform: "uppercase",
        fontWeight: "700",
        padding: 50,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        width: "48%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    cardPressed: {
        backgroundColor: "#F0F0F0",
    },
    iconContainer: {
        marginBottom: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
    },
    icon: {
        width: 40,  
        height: 40, 
        marginRight: 10, 
      },
});

