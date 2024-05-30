import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    weathercol: {
        backgroundColor: "blue",
        fontSize: 30,
        color: "yellow"
    },
    city: {
        borderColor: "grey",
        fontSize: 20,
        borderWidth: 1,
        width: 200,
        marginVertical: 10,
        paddingHorizontal: 8
    },
    container2: {
        width: 350,
        height: "90%",
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // For Android
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        flexDirection: "row",
        width: '90%',
        justifyContent: "space-around",
        gap: 30,
        paddingTop: 20
    },
    weatherdisplay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white,"
    },
    weatherDetails: {
        justifyContent: "flex-end",
        alignContent: "flex-end",
        borderColor: "blue",
        fontSize: 20,
        borderWidth: 2,
        width: 300,
    },
    forecastdisplay: {
        flex: 1,
        paddingTop: 20,
        justifyContent: "flex-start"
    },
    display1: {
        fontSize: 60,
        color: "white"
    },
    weatherIcon: {
        width: 250,
        height: 250,
    },
    
})