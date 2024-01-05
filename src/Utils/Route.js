import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Launch_screen from "../Screens/Launch_screen";
import Add_Employee from "../Screens/Add_Employee"
import MyDrawer from "./Drawer";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Add_Employee" component={Add_Employee} />
      <Stack.Screen name="Launch_screen" component={Launch_screen} />
      {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
