import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { Feather, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { Common_styles } from "./Common_Styles";
const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.maintoolview}>
      <StatusBar backgroundColor={Colors.white} />
      <TouchableOpacity
        style={Common_styles.mainbackBtn}
        onPress={() =>
          props.onPress
            ? navigation.navigate(props.onPress)
            : navigation.goBack()
        }
      >
        <Feather name={"menu"} size={30} color={"black"} />
      </TouchableOpacity>

      <Text style={Common_styles.maintooltxt}>Index</Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          justifyContent: "flex-end",
        }}
        // onPress={() => navigation.navigate("")}
      >
        <Entypo name="dots-three-vertical" size={22} color={Colors.black} />
      </TouchableOpacity>

      <View style={Common_styles.maintoolblankview} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  maintoolview: {
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor:Colors.green,
    borderBottomWidth: 2,
    borderBottomColor: "#E7E7E7",
    marginTop: 22,
  },
});
