import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpensesOverView = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverView"
            component={ExpensesOverView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              presentation: "transparentModal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
