import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    statusBar: {
        paddingTop: StatusBar.currentHeight
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navBar: {
        width: '100%',
        height: '10%',
        backgroundColor: '#14213d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBarTitle: {
        color: "#fff",
        fontSize: 20
    },
    cardContainer: {maxHeight: "30%", paddingVertical: 10},
    card: {width: 150,padding: 10, backgroundColor: "#2a9d8f", marginHorizontal: 2.5, height: "100%", alignItems: "center", justifyContent: "center"},
    cardImage: {width: 50, height: 50}
})

export default styles