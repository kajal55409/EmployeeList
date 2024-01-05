import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Utils/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Common_styles } from "../Components/Common_Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
let employee = [];
const Add_Employee = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [salary, setSalary] = useState();


  const SaveEmployeeList = async () => {
    let Tempemployee = [];
    employee =[];
    let x = JSON.parse(await AsyncStorage.getItem("EMPLOYEE"));
    Tempemployee=x;
    Tempemployee.map(item=>{
      employee.push(item);
    })
    employee.push({
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      salary: salary,
    });
    await AsyncStorage.setItem("EMPLOYEE", JSON.stringify(employee));
    navigation.navigate("Home");
    console.log("employee", employee);
  };



  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ marginTop: 70 }}>
        <Text style={styles.Heading_Text}>Enter employee details</Text>
        <View style={{ marginVertical: 20, marginHorizontal: 40 }}>
          <Text style={styles.Input_Text}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            style={styles.Input_View}
          />

          <Text style={styles.Input_Text}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            style={styles.Input_View}
          />

          <Text style={styles.Input_Text}>Job Title</Text>
          <TextInput
            value={jobTitle}
            onChangeText={(text) => setJobTitle(text)}
            style={styles.Input_View}
          />

          <Text style={styles.Input_Text}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={styles.Input_View}
          />
        </View>
        <TouchableOpacity
          style={[Common_styles.button_view, { marginTop: 60 }]}
          onPress={() => SaveEmployeeList()}
        >
          <Text style={Common_styles.button_text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add_Employee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  Heading_Text: {
    textAlign: "center",
    color: Colors.Text_green,
    fontSize: 20,
    fontWeight: "bold",
  },
  Input_Text: {
    textAlign: "left",
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 30,
  },
  Input_View: {
    borderBottomColor: Colors.Text_green,
    borderBottomWidth: 2,
  },
});
