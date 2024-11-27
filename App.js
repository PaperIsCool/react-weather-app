import React, {useState} from 'react';
import { StatusBar, ImageBackground, SafeAreaView, View, TextInput, Text, Image } from 'react-native';
import styles from './Styles';
import backgroundImage from './assets/weather.png';
import formatTime from './FormatTime';



export default function App() {
  const apikey = 'e2bdafd75d61b1f58d0fc8024e0291e4'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")
  const [header, setHeader] = useState("Weather")

  const getWeather = (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`).then(
      responce => responce.json()
    ).then(
      data => {
         setWeatherData(data)
         setHeader((data.name) + " Weather")
      }
    )
  }

  return (
    <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.imageBackground}>
          <SafeAreaView style={styles.maincontainer}>
            
            <View style={styles.center}>
              <Text style={styles.header}>{header}</Text>
              <TextInput
              placeholder="Enter a city..."
              style={styles.input}
              onChangeText={setCity}
              value={city}
              onSubmitEditing={getWeather}
            />
            <View style={{
              flexDirection: "column",
              marginTop: 30
            }}>

            {typeof weatherData.main === 'undefined' ? (
              <Text>Enter a city to get started...</Text>
              ) :
              <>
                <View style={styles.temperature}>
                  <Text style={{
                    fontSize: '120%',
                    fontWeight: 'bold'
                  }}>{Math.round(weatherData.main.temp)}°C</Text>
                  <Text style={{
                    fontSize: '30%',
                    fontWeight: 'bold'}}>{(weatherData.weather[0].description).charAt(0).toUpperCase() + (weatherData.weather[0].description).slice(1)}</Text>
                    <Text style={{
                    fontSize: '20%',
                    fontWeight: 'bold',
                    marginTop: 10
                    }}>Feels like {Math.round(weatherData.main.feels_like)}°C</Text>
                </View>

                <View style={styles.other}>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Humidity: {Math.round(weatherData.main.humidity)}%</Text>
                  </View>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Pressure: {Math.round(weatherData.main.pressure)} hPa</Text>
                  </View>
                </View>
                <View style={styles.other}>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Wind: {Math.round(weatherData.wind.speed) * 3.6} km/h</Text>
                  </View>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Visibility: {Math.round(weatherData.visibility)/1000} km</Text>
                  </View>
                </View>
                <View style={styles.other}>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Sunrise: {formatTime(weatherData.sys.sunrise)}</Text>
                  </View>
                  <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    borderRadius: 500
                  }}>
                    <Text>Sunset: {formatTime(weatherData.sys.sunset)}</Text>
                  </View>
                </View>
                

              </>
            }

            </View>
            
            </View>



          </SafeAreaView>
        </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
