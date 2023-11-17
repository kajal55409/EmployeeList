import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect,useState } from "react";
import Header from "../Components/Header";
import { Colors } from "../Utils/Colors";
import Card_Item from "../Components/Card_Item";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();
  const isfocus= useIsFocused();
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    getEmployeeData()
  }, [isfocus]);
const getEmployeeData =async()=>{
    const value = await AsyncStorage.getItem("EMPLOYEE");
    setEmployeeData(JSON.parse(value));
 console.log("Data", employeeData);
}
  return (
    <View>
      <Header />
      <View
        style={{
          alignContent: "center",
          alignSelf: "center",
          marginTop: 10,
          backgroundColor: Colors.background,
        }}
      >
        <FlatList
          data={employeeData}
          renderItem={({ item }) => <Card_Item item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
});
