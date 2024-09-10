import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/MAnageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverView() {
  return (
      <BottomTabs.Navigator screenOptions={{
          headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: 'white',
          tabBarStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}>
        <BottomTabs.Screen
            name='RecentExpenses'
            component={RecentExpenses}
            options={{
                title: 'Recent Expeneses',
                tabBarLabel: 'Recent',
                tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color} />

            }}
        />
        <BottomTabs.Screen
            name='AllExpeneses'
            component={AllExpenses}
            options={{
                title: 'All Expeneses',
                tabBarLabel: 'All Expenses',
                tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color} />

            }}
        />
      </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
      <>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name='ExpenesesOverView'
                  component={ExpensesOverView}
                  options={{
                      headerShown: false
                  }} />
              <Stack.Screen name='ManageExpense' component={ManageExpenses}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
);
}
