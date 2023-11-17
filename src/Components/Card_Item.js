import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const Card_Item = ({item}) => {
  return (
    <View style={styles.card_view}>
      <View style={styles.circle_view}>
        <Text style={{ textAlign: "center", fontSize: 23 }}>
          {item.firstName[0]}
          {item.lastName[0]}
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, width: "60%" }}>
        <Text style={styles.card_text1}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.card_text2}>{item.jobTitle}</Text>
      </View>

      <View style={{ justifyContent: "center", width: "10%" }}>
        <Ionicons name="star-outline" size={24} color="black" />
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
