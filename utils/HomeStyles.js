import {StyleSheet, Dimensions} from "react-native"

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fb8500"
    },
    headerTitle: {
        fontSize: 25,
        textAlign: "center",
        margin: 10,
        color: "white",
        fontWeight: "bold"
    },
    firstView: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width,
        paddingHorizontal: 10
    },
    description: {
        color: "white",
        fontSize: 16,
        marginVertical: 10
    },
    image: {width: "100%", height: 180, borderRadius: 20, marginVertical: 5}
})

export default styles