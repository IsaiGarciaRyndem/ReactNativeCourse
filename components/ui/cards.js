import {StyleSheet, View} from "react-native";
import {Colors} from "../../constans/colors";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        backgroundColor: Colors.primary500,
        borderRadius: 10,
        gap: 20,
        marginHorizontal: 24,
        marginTop: 50,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {width:0 , height:2},
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
})
