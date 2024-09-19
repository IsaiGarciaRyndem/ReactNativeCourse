import {StatusBar} from 'expo-status-bar';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import IconButton from "./components/UI/IconButton";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import {Colors} from './constants/colors';
import Map from './screens/Map';
import {useEffect, useState} from "react";
import {init} from "./util/database";


const Stack = createNativeStackNavigator();
export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        init()
            .then(() => {
                setAppIsReady(true)
        })
            .catch(error => {
            console.log(error)
        });
    },[]);

  return (
      <>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: Colors.gray700,
                contentStyle: { backgroundColor: Colors.gray700 },
              }}
          >
            <Stack.Screen
                name="AllPlaces"
                component={AllPlaces}
                options={({ navigation }) => ({
                  title: 'Your Favorite Places',
                  headerRight: ({ tintColor }) => (
                      <IconButton
                          icon="add"
                          size={24}
                          color={tintColor}
                          onPress={() => navigation.navigate('AddPlace')}
                      />
                  ),
                })}
            />
            <Stack.Screen
                name="AddPlace"
                component={AddPlace}
                options={{
                  title: 'Add a new Place',
                }}
            />
              <Stack.Screen name="Map" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}
