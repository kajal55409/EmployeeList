import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../Utils/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
const Card_Item = ({ item, index }) => {
    const isfocus = useIsFocused();
  const [employeeDAta, setEmployeeData] = useState([]);

  const DeleteEmployeeData = async (index) => {
    const TempEmployee = employeeDAta;
    const selectedEmp = TempEmployee.filter(({item, ind}) => {
      return ind != index;
    });
    setEmployeeData(selectedEmp);
    await AsyncStorage.setItem("EMPLOYEE", JSON.stringify(selectedEmp));
    alert("Deleted Successfully");
  };

  return (
    <View style={styles.card_view}>
      <View style={styles.circle_view}>
        <Text style={{ textAlign: "center", fontSize: 23 }}>
          {item?.firstName[0]}
          {item?.lastName[0]}
       
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, width: "50%" }}>
        <Text style={styles.card_text1}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.card_text2}>{item.jobTitle}</Text>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          width: "20%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="star-outline" size={20} color="black" />
        <TouchableOpacity onPress={() => DeleteEmployeeData(index)}>
          <MaterialCommunityIcons
            name="delete"
            size={24}
            color={Colors.green}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card_Item;

const styles = StyleSheet.create({
  card_view: {
    height: 70,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 10,
  },
  circle_view: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  card_text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.black,
  },
  card_text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});
