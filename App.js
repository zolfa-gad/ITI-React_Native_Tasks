import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CompletedTasks from "./src/pages/completed-tasks";
import TasksHome from "./src/pages/tasks-home";
import BottomNavigator from "./src/routes/bottom.navigator";

export default function App() {
  const bottomNav = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
