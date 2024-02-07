import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import { StyleSheet } from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>imagine a Cool Text</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.paragaph}>
            Fortnite, a wildly popular online video game developed by Epic
            Games, has taken the gaming world by storm since its release in
            2017. With its unique blend of fast-paced action, building
            mechanics, and vibrant graphics, Fortnite has attracted millions of
            players worldwide. The game's battle royale mode, where 100 players
            compete to be the last one standing, has become a cultural
            phenomenon, inspiring tournaments, events, and even dance crazes.
            With regular updates and collaborations keeping the gameplay fresh,
            Fortnite continues to be a dominant force in the gaming industry.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>a Footer btw</Text>
          <Button title="Toca Aqui!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    /* justifyContent: "center",
    flexDirection: "row", */ // padrão é column
  },
  head: { backgroundColor: "gray", flex: 0.8 },
  content: {
    backgroundColor: "white",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    marginBottom: 4,
    marginTop: 4,
  },
  footer: { backgroundColor: "brown", flex: 0.7 },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  paragaph: {
    fontSize: 20,
    textAlign: "center",
    color: "#007BA7",
  },
});
