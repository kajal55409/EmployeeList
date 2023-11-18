import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/Utils/Route";
import { KeyboardAvoiderProvider } from "@good-react-native/keyboard-avoider";
export default function App() {
  return (
    <KeyboardAvoiderProvider style={styles.container}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <MyStack />
      </NavigationContainer>
    </KeyboardAvoiderProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
