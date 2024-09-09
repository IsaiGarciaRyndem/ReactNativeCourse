import {StatusBar, StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/categoriesScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/favoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

export default function App() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    function DrawerNavigator() {
        return <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#372a72',
            },

            headerTintColor: 'white',
            contentStyle: {
                backgroundColor: '#ff8519'
            },
            drawerActiveTintColor: '#ff8519',
            drawerContentStyle: {
                backgroundColor: '#372a72'
            },
            drawerInactiveTintColor: 'white',
            drawerActiveBackgroundColor: 'rgba(148,123,241,0.21)',
            headerTitleAlign: 'center',

        }}>
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'All categories',
                    drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
                }}

            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    }

  return (
      <>
          <StatusBar barStyle={'light-content'} backgroundColor={'#372a72'}></StatusBar>
          <Provider store={store}>
          {/*<FavoritesContextProvider>*/}
              <NavigationContainer>
                  <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#372a72'
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        contentStyle: {
                            backgroundColor: '#ff973b'
                        }
                    }}
                  >
                      <Stack.Screen
                          name='Drawer'
                          component={DrawerNavigator}
                          options={{
                              headerShown: false,
                          }}
                      />
                      <Stack.Screen
                          name='MealsCategories'
                          component={CategoriesScreen}
                      />
                      <Stack.Screen
                          name='MealsOverView'
                          component={MealsOverviewScreen}
                      />
                      <Stack.Screen
                          name='MealDetail'
                          component={MealDetailsScreen}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          {/*</FavoritesContextProvider>*/}
          </Provider>
      </>

  );
}

const styles = StyleSheet.create({
});
