import {StatusBar} from 'expo-status-bar';
import {Colors} from "./constants/styles";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.primary100 },
          }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
      <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.primary100 },
          }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
  );
}

function Navigation() {
  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
  );
}
export default function App() {
  return (
      <>
        <StatusBar style="light" />

        <Navigation />
      </>
  );
}
