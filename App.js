import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Topo</Text>
        </View>

        <View>
          <Text>Conteudo..</Text>
        </View>
        <View>
          <Text>Rodape</Text>
          <Button title="Toca Aqui!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
