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
          <Text>head</Text>
        </View>

        <View style={styles.content}>
          <Text>Content..</Text>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
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
  content: { backgroundColor: "white", flex: 4 },
  footer: { backgroundColor: "brown", flex: 0.7 },
});
