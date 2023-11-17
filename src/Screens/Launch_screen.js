import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
const Launch_screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button_view}
        onPress={() => navigation.navigate("Add_Employee")}
      >
        <Text style={styles.button_text}>ADD EMPLOYEE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Launch_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Light_green,
    alignItems: "center",
    justifyContent: "center",
  },
  button_view: {
    height: 50,
    width: "90%",
    backgroundColor: Colors.Shadow_green,
    justifyContent: "center",
  },
  button_text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
