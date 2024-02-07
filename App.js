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
  container: { backgroundColor: "lightblue", flex: 1 },
  head: { backgroundColor: "gray" },
  content: { backgroundColor: "white" },
  footer: { backgroundColor: "brown" },
});
