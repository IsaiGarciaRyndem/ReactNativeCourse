import {Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function CategoryGridTitle({title, color, onPress}) {
    const navigation = useNavigation()
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={
                ({pressed}) =>
                    [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTitle;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        overflow: Platform.select({ios: 'visible', android: 'hidden'}),
        borderRadius: 10,

    },
    button: {
        flex: 1
    },
    buttonPressed: {
      opacity: 0.5
    },
    innerContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
