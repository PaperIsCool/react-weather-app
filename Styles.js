import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: require('./assets/weather.png'),
      color: "white"
    },
    maincontainer: {
      flex: 1,
    },
    imageBackground: {
      width: '100%', 
      height: '100%',
      blurRadius: 50,
    },
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    input: {
      width: "90%",
      height: 60,
      padding: 10,
      backgroundColor: "white",
      color: "black",
      borderRadius: 20,
    },
    center: {
      alignContent: "center",
      alignItems: "center"
    },
    header: {
      fontSize: 50,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: 20
    },
    temperature: {
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    other: {
      marginVertical: 10,
      marginHorizontal: -10,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

export default styles