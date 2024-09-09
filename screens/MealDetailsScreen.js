import {MEALS} from "../data/dummy-data";
import IconButton from "../components/iconButton";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/mealDetail/subtitle";
import List from "../components/mealDetail/list";
import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

function MealDetailsScreen({route, navigation}) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            // favoriteMealIds.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealIds.addFavorite(mealId)
            dispatch(addFavorite({id: mealId}))
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    size={24}
                    color={'white'}
                />
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle children={'Ingredients'} />
                    <List data={selectedMeal.ingredients} />
                    <Subtitle children={'steps'} />
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>

);
}


export default MealDetailsScreen;
const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 30,
    },
    image: {
        height: 350,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    }
});
