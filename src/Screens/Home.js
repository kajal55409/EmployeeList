import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useEffect,useState } from "react";
import Header from "../Components/Header";
import { Colors } from "../Utils/Colors";
import Card_Item from "../Components/Card_Item";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";


const Home = () => {
  const navigation = useNavigation();
  const isfocus= useIsFocused();
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    getEmployeeData()
  }, [isfocus]);

const getEmployeeData =async()=>{
  const result = await AsyncStorage.getItem("EMPLOYEE");
  setEmployeeData(JSON.parse(result));
  await AsyncStorage.setItem("EMPLOYEE", JSON.stringify(employeeData));
  console.log('result',result)
}
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={Colors.green}/>
      <SafeAreaView>
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
            renderItem={({ item, index }) => <Card_Item item={item} />}
          />
        </View>

        <TouchableOpacity
          style={[styles.addButton]}
          onPress={() => navigation.navigate("Add_Employee")}
        >
          <View
            style={[
              styles.shadowContainer,
              {
                backgroundColor: Colors.green,
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 35,
              },
            ]}
          >
            <Ionicons name="add" size={40} color="white" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // for Android
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    bottom: 130,
  },
});
